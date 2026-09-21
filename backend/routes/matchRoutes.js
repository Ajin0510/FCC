const express = require("express");
const Match = require("../models/Match");

const router = express.Router();

/*
====================================================
CREATE MATCH
====================================================
*/
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

      // Server decides the owner
      lockedBy: userId,
      isLocked: true,
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
====================================================
GET ALL MATCHES
====================================================
*/
router.get("/", async (req, res) => {
  try {
    const matches = await Match.find().sort({
      _id: -1,
    });

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
====================================================
GET ONE MATCH
====================================================
*/
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const match = await Match.findById(id);

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
====================================================
UPDATE MATCH
====================================================
*/
router.put("/:id", async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];

    if (!userId) {
      return res.status(401).json({
        message: "User ID is required",
      });
    }

    const { id } = req.params;

    const updatedMatch = await Match.findOneAndUpdate(
      {
        _id: id,

        $or: [
          {
            isLocked: false,
          },
          {
            lockedBy: userId,
          },
        ],
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedMatch) {
      const match = await Match.findById(id);

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
====================================================
DELETE MATCH
====================================================
*/
router.delete("/:id", async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];

    console.log("=================================");
    console.log("DELETE MATCH REQUEST");
    console.log("Match ID:", req.params.id);
    console.log("User ID:", userId);
    console.log("=================================");

    /*
    -----------------------------------------------
    Check User ID
    -----------------------------------------------
    */
    if (!userId) {
      return res.status(401).json({
        message: "User ID is required",
      });
    }

    const { id } = req.params;

    /*
    -----------------------------------------------
    First check whether match exists
    -----------------------------------------------
    */
    const existingMatch = await Match.findById(id);

    if (!existingMatch) {
      console.log("Match does not exist:", id);

      return res.status(404).json({
        message: "Match not found",
      });
    }

    /*
    -----------------------------------------------
    Check ownership
    -----------------------------------------------
    */
    console.log("Stored lockedBy:", existingMatch.lockedBy);
    console.log("Request userId:", userId);

    if (
      String(existingMatch.lockedBy) !==
      String(userId)
    ) {
      console.log("DELETE DENIED - USER DOES NOT OWN MATCH");

      return res.status(403).json({
        message:
          "You cannot delete another user's match",
        lockedBy: existingMatch.lockedBy,
        requestedBy: userId,
      });
    }

    /*
    -----------------------------------------------
    Delete match
    -----------------------------------------------
    */
    const deletedMatch =
      await Match.findByIdAndDelete(id);

    if (!deletedMatch) {
      return res.status(404).json({
        message: "Match could not be deleted",
      });
    }

    console.log(
      "MATCH DELETED SUCCESSFULLY:",
      deletedMatch._id
    );

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