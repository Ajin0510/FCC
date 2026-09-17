const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
  {
    matchType: {
      type: String,
      required: true,
    },

    lockedBy: {
      type: String,
      default: null,
    },

    isLocked: {
      type: Boolean,
      default: false,
    },

    totalOvers: {
      type: Number,
      required: true,
    },

    team1: {
      type: String,
      required: true,
    },

    team2: {
      type: String,
      required: true,
    },

    team1Players: {
      type: [String],
      default: [],
    },

    team2Players: {
      type: [String],
      default: [],
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
      type: Array,
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
      type: Array,
      default: [],
    },

    currentOver: {
      type: Array,
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
      type: Object,
      default: {},
    },

    bowlerStats: {
      type: Object,
      default: {},
    },

    showAllOvers: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;