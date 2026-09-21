const express = require("express");
const mongoose = require("mongoose");
const Match = require("../models/Match");

const router = express.Router();

const getUserId = (req) => {
  const userId = req.headers["x-user-id"];
  if (!userId || typeof userId !== "string") return null;
  return userId.trim() || null;
};

const isValidMatchId = (id) =>
  mongoose.Types.ObjectId.isValid(id);

/*
  CREATE
  Any user can create a match.
  The server assigns ownership.
*/
router.post("/", async (req, res) => {
  try {
    const userId = getUserId(req);

    if (!userId) {
      return res.status(401).json({
        message: "User ID is required",
      });
    }

    const match = new Match({
      ...req.body,
      lockedBy: userId,
      ownerId: userId,
      isLocked: true,
      matchStarted: true,
    });

    const savedMatch = await match.save();

    return res.status(201).json(savedMatch);
  } catch (error) {
    console.error("CREATE MATCH ERROR:", error);

    return res.status(500).json({
      message: "Failed to save match",
      error: error.message,
    });
  }
});

/*
  LIST
  Everyone can see all matches.
*/
router.get("/", async (req, res) => {
  try {
    const matches = await Match.find({})
      .sort({ createdAt: -1, _id: -1 })
      .lean();

    return res.status(200).json(matches);
  } catch (error) {
    console.error("GET MATCHES ERROR:", error);

    return res.status(500).json({
      message: "Failed to fetch matches",
      error: error.message,
    });
  }
});

/*
  READ
  Everyone can view a match.
*/
router.get("/:id", async (req, res) => {
  try {
    if (!isValidMatchId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid match ID",
      });
    }

    const match = await Match.findById(req.params.id).lean();

    if (!match) {
      return res.status(404).json({
        message: "Match not found",
      });
    }

    return res.status(200).json(match);
  } catch (error) {
    console.error("GET MATCH ERROR:", error);

    return res.status(500).json({
      message: "Failed to fetch match",
      error: error.message,
    });
  }
});

/*
  UPDATE
  ONLY the creator can edit.
*/
router.put("/:id", async (req, res) => {
  try {
    const userId = getUserId(req);

    if (!userId) {
      return res.status(401).json({
        message: "User ID is required",
      });
    }

    if (!isValidMatchId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid match ID",
      });
    }

    const updateData = {
      ...req.body,
      lockedBy: userId,
      ownerId: userId,
      isLocked: true,
    };

    const updatedMatch = await Match.findOneAndUpdate(
      {
        _id: req.params.id,
        $or: [
          { ownerId: userId },
          { lockedBy: userId },
        ],
      },
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedMatch) {
      const existingMatch = await Match.findById(
        req.params.id
      ).lean();

      if (!existingMatch) {
        return res.status(404).json({
          message: "Match not found",
        });
      }

      return res.status(403).json({
        message:
          "This match is being edited by another user",
        readOnly: true,
      });
    }

    return res.status(200).json(updatedMatch);
  } catch (error) {
    console.error("UPDATE MATCH ERROR:", error);

    return res.status(500).json({
      message: "Failed to update match",
      error: error.message,
    });
  }
});

/*
  DELETE
  ONLY the creator can delete.
*/
router.delete("/:id", async (req, res) => {
  try {
    const userId = getUserId(req);

    if (!userId) {
      return res.status(401).json({
        message: "User ID is required",
      });
    }

    if (!isValidMatchId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid match ID",
      });
    }

    const existingMatch = await Match.findById(
      req.params.id
    ).lean();

    if (!existingMatch) {
      return res.status(404).json({
        message: "Match not found",
      });
    }

    const ownerId =
      existingMatch.ownerId ||
      existingMatch.lockedBy;

    if (String(ownerId) !== String(userId)) {
      return res.status(403).json({
        message:
          "You cannot delete another user's match",
        readOnly: true,
      });
    }

    const deletedMatch =
      await Match.findOneAndDelete({
        _id: req.params.id,
        $or: [
          { ownerId: userId },
          { lockedBy: userId },
        ],
      });

    if (!deletedMatch) {
      return res.status(403).json({
        message:
          "You cannot delete another user's match",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Match deleted successfully",
      deletedMatch,
    });
  } catch (error) {
    console.error("DELETE MATCH ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete match",
      error: error.message,
    });
  }
});

module.exports = router;
