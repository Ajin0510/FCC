const express = require("express");
const Match = require("../models/Match");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];

    if (!userId) {
      return res.status(401).json({
        message: "User ID is required",
      });
    }

    const match = new Match({
      ...req.body,

      // Server decides who owns the match
      lockedBy: userId,
      isLocked: true,
    });

    const savedMatch = await match.save();

    res.status(201).json(savedMatch);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to save match",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const matches = await Match.find();

    res.status(200).json(matches);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch matches",
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);

    if (!match) {
      return res.status(404).json({
        message: "Match not found",
      });
    }

    res.status(200).json(match);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch match",
      error: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];

    if (!userId) {
      return res.status(401).json({
        message: "User ID is required",
      });
    }

    const updatedMatch = await Match.findOneAndUpdate(
      {
        _id: req.params.id,

        $or: [
          { isLocked: false },
          { lockedBy: userId },
        ],
      },
      req.body,
      {
        returnDocument: "after",
      }
    );

    if (!updatedMatch) {
      const match = await Match.findById(req.params.id);

      if (!match) {
        return res.status(404).json({
          message: "Match not found",
        });
      }

      return res.status(403).json({
        message: "This match is being edited by another user",
        readOnly: true,
      });
    }

    res.status(200).json(updatedMatch);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update match",
      error: error.message,
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];

    if (!userId) {
      return res.status(401).json({
        message: "User ID is required",
      });
    }

    const deletedMatch = await Match.findOneAndDelete({
      _id: req.params.id,
      lockedBy: userId,
    });

    if (!deletedMatch) {
      const match = await Match.findById(req.params.id);

      if (!match) {
        return res.status(404).json({
          message: "Match not found",
        });
      }

      return res.status(403).json({
        message: "You cannot delete another user's match",
      });
    }

    res.status(200).json({
      message: "Match deleted successfully",
      deletedMatch,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete match",
      error: error.message,
    });
  }
});

module.exports = router;