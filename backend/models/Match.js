const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema(
  {
    matchType: {
      type: String,
      default: "",
    },

    totalOvers: {
      type: Number,
      default: 6,
    },

    team1: {
      type: String,
      default: "",
    },

    team2: {
      type: String,
      default: "",
    },

    team1Players: {
      type: [String],
      default: () => Array(11).fill(""),
    },

    team2Players: {
      type: [String],
      default: () => Array(11).fill(""),
    },

    matchStarted: {
      type: Boolean,
      default: false,
    },

    innings: {
      type: Number,
      default: 1,
    },

    inningsData: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },

    battingTeam: {
      type: String,
      default: "",
    },

    bowlingTeam: {
      type: String,
      default: "",
    },

    score: {
      type: Number,
      default: 0,
    },

    wickets: {
      type: Number,
      default: 0,
    },

    overs: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },

    currentOver: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },

    striker: {
      type: String,
      default: "",
    },

    nonStriker: {
      type: String,
      default: "",
    },

    currentBowler: {
      type: String,
      default: "",
    },

    dismissedPlayers: {
      type: [String],
      default: [],
    },

    waitingForBatsman: {
      type: Boolean,
      default: false,
    },

    batsmanStats: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },

    bowlerStats: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },

    showAllOvers: {
      type: Boolean,
      default: false,
    },

    // The only user allowed to edit/delete this match.
    ownerId: {
      type: String,
      required: true,
      index: true,
    },

    // Kept for compatibility with existing data/code.
    lockedBy: {
      type: String,
      required: true,
      index: true,
    },

    isLocked: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

module.exports = mongoose.model("Match", MatchSchema);
