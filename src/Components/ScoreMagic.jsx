import { useEffect, useState } from "react";
import { motion } from "motion/react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const STORAGE_KEY = "scoremagic-match";
const USER_ID_KEY = "scoremagic-user-id";

const getUserId = () => {
  // Keep the same anonymous user ID across refreshes and tabs.
  let userId = localStorage.getItem(USER_ID_KEY);

  // Migrate an older sessionStorage ID if one exists.
  if (!userId) {
    userId = sessionStorage.getItem(USER_ID_KEY);
  }

  if (!userId) {
    userId = crypto.randomUUID();
  }

  localStorage.setItem(USER_ID_KEY, userId);
  sessionStorage.setItem(USER_ID_KEY, userId);

  return userId;
};

const USER_ID = getUserId();

const initialMatch = {
  _id: null,
  matchType: "",
  totalOvers: 6,

  team1: "",
  team2: "",

  team1Players: Array(11).fill(""),
  team2Players: Array(11).fill(""),

  matchStarted: false,

  innings: 1,
  inningsData: [],

  battingTeam: "",
  bowlingTeam: "",

  score: 0,
  wickets: 0,

  overs: [],
  currentOver: [],

  striker: "",
  nonStriker: "",
  currentBowler: "",

  dismissedPlayers: [],
  waitingForBatsman: false,

  batsmanStats: {},
  bowlerStats: {},

  showAllOvers: false,
};

const card =
  "rounded-2xl border border-amber-400/20 bg-black/70 p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(245,158,11,0.08)]";

const input =
  "w-full rounded-xl border border-amber-400/20 bg-black/70 px-4 py-3 text-white outline-none focus:border-amber-400";

function ScoreMagicBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-black" />

      <motion.div
        className="absolute -left-60 top-20 h-[700px] w-[700px] rounded-full bg-amber-400/10 blur-[180px]"
        animate={{
          x: [-100, 200, -100],
          y: [-30, 60, -30],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-60 bottom-10 h-[650px] w-[650px] rounded-full bg-orange-500/10 blur-[180px]"
        animate={{
          x: [100, -200, 100],
          y: [50, -80, 50],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[-400px] left-[-250px] h-[900px] w-[900px] rotate-[25deg] bg-gradient-to-b from-amber-300/20 via-transparent to-transparent blur-3xl"
        animate={{
          rotate: [18, 35, 18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[-400px] right-[-250px] h-[900px] w-[900px] -rotate-[25deg] bg-gradient-to-b from-white/10 via-transparent to-transparent blur-3xl"
        animate={{
          rotate: [-18, -35, -18],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

export default function ScoreMagic() {
  const [match, setMatch] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialMatch;
      }
    }

    return initialMatch;
  });

  const [availableMatches, setAvailableMatches] = useState([]);
  const [showMatches, setShowMatches] = useState(false);
  const [loadingMatches, setLoadingMatches] = useState(false);

  const [showRestore, setShowRestore] = useState(match.matchStarted);

  const isReadOnly =
    Boolean(match.lockedBy) &&
    String(match.lockedBy) !== String(USER_ID);

  const updateMatch = (data) => {
    if (isReadOnly) {
      return;
    }

    setMatch((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const loadMatches = async () => {
    setLoadingMatches(true);

    try {
      const response = await fetch(
        "https://fcc-backend-4a4b.onrender.com/api/matches"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch matches");
      }

      const matches = await response.json();

      setAvailableMatches(matches);
      setShowMatches(true);
    } catch (error) {
      console.error("Error loading matches:", error);
      alert("Unable to load matches");
    } finally {
      setLoadingMatches(false);
    }
  };

  const myMatches = availableMatches.filter(
    (savedMatch) => savedMatch.lockedBy === USER_ID
  );

  const liveMatches = availableMatches.filter(
    (savedMatch) => savedMatch.lockedBy !== USER_ID
  );

  const maxInnings =
    match.matchType === "test" ? 4 : 2;

  const totalBalls =
    match.overs.length * 6 +
    match.currentOver.length;

  const completedOvers =
    Math.floor(totalBalls / 6);

  const balls =
    totalBalls % 6;

  const firstInningsScore =
    match.inningsData.length > 0
      ? match.inningsData[0].score
      : 0;

  const targetReached =
    match.matchType !== "test" &&
    match.innings === 2 &&
    match.score >= firstInningsScore + 1;

  const inningsFinished =
    completedOvers >= match.totalOvers ||
    match.wickets >= 10 ||
    targetReached;

  const matchFinished =
    match.innings === maxInnings &&
    inningsFinished;

  const getMatchResult = () => {
    if (!matchFinished) return "";

    const allInnings = [
      ...match.inningsData,
      {
        battingTeam: match.battingTeam,
        score: match.score,
        wickets: match.wickets,
      },
    ];

    const team1Score = allInnings
      .filter(
        (innings) =>
          innings.battingTeam === match.team1
      )
      .reduce(
        (total, innings) =>
          total + innings.score,
        0
      );

    const team2Score = allInnings
      .filter(
        (innings) =>
          innings.battingTeam === match.team2
      )
      .reduce(
        (total, innings) =>
          total + innings.score,
        0
      );

    if (team1Score === team2Score) {
      return "Match Tied 🤝";
    }

    if (team1Score > team2Score) {
      return `${match.team1} won by ${
        team1Score - team2Score
      } runs 🏆`;
    }

    if (
      match.matchType !== "test" &&
      match.innings === 2
    ) {
      return `${match.team2} won by ${
        10 - match.wickets
      } wickets 🏆`;
    }

    return `${match.team2} won by ${
      team2Score - team1Score
    } runs 🏆`;
  };

  /*
    BROWSER BACK

    ScoreMagic does not block the browser Back button.
    The previous page / Home route can be reached normally.
  */

  useEffect(() => {
    return undefined;
  }, []);

  /*
    BLOCK REFRESH / CLOSE
  */

  useEffect(() => {
    if (!match.matchStarted || matchFinished) return;

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener(
      "beforeunload",
      handleBeforeUnload
    );

    return () => {
      window.removeEventListener(
        "beforeunload",
        handleBeforeUnload
      );
    };
  }, [
    match.matchStarted,
    matchFinished,
  ]);

  /*
    AUTO SAVE
  */

  useEffect(() => {
    if (!match.matchStarted) return;

    // A viewer must never write another user's match back to MongoDB.
    if (isReadOnly) return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(match)
    );

    if (!match._id) return;

    fetch(
      `https://fcc-backend-4a4b.onrender.com/api/matches/${match._id}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          "x-user-id": USER_ID,
        },

        body: JSON.stringify(match),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update match");
        }

        return response.json();
      })
      .then((updatedMatch) => {
        console.log(
          "Match updated in MongoDB:",
          updatedMatch
        );
      })
      .catch((error) => {
        console.error(
          "MongoDB update error:",
          error
        );
      });
  }, [match, isReadOnly]);

  /*
    LIVE SCORE FOR VIEWERS

    User B reads the latest match from MongoDB every 2 seconds.
  */

  useEffect(() => {
    if (!isReadOnly || !match._id) {
      return;
    }

    const loadLatestMatch = async () => {
      try {
        const response = await fetch(
          `https://fcc-backend-4a4b.onrender.com/api/matches/${match._id}`
        );

        if (!response.ok) {
          return;
        }

        const latestMatch = await response.json();

        setMatch((prev) => ({
          ...prev,
          ...latestMatch,
        }));
      } catch (error) {
        console.error(
          "Live score update error:",
          error
        );
      }
    };

    loadLatestMatch();

    const interval = setInterval(
      loadLatestMatch,
      2000
    );

    return () => {
      clearInterval(interval);
    };
  }, [isReadOnly, match._id]);

  const battingPlayers =
    match.battingTeam === match.team1
      ? match.team1Players
      : match.team2Players;

  const bowlingPlayers =
    match.bowlingTeam === match.team1
      ? match.team1Players
      : match.team2Players;

  /*
    CREATE NEW MATCH
    -----------------------------------------------
    This is important for viewers.

    A viewer can be watching somebody else's match,
    then leave that match and start a completely
    separate match of their own.
  */

  const createNewMatch = () => {
    localStorage.removeItem(STORAGE_KEY);

    setMatch({
      ...initialMatch,
      team1Players: Array(11).fill(""),
      team2Players: Array(11).fill(""),
      ownerId: USER_ID,
      lockedBy: USER_ID,
      isLocked: false,
    });

    setShowRestore(false);
    setShowMatches(false);
  };

  /*
    START MATCH
  */

  const startMatch = async () => {
    if (!match.matchType) {
      alert("Please select match type");
      return;
    }

    if (!match.team1 || !match.team2) {
      alert("Please enter both team names");
      return;
    }

    const { _id, ...matchWithoutId } = match;

    const matchData = {
      ...matchWithoutId,

      matchStarted: true,
      innings: 1,

      battingTeam: match.team1,
      bowlingTeam: match.team2,

      score: 0,
      wickets: 0,

      overs: [],
      currentOver: [],
      lockedBy: USER_ID,
      ownerId: USER_ID,
      isLocked: true,
    };

    try {
      const response = await fetch(
        "https://fcc-backend-4a4b.onrender.com/api/matches",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "x-user-id": USER_ID,
          },

          body: JSON.stringify(matchData),
        }
      );

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({}));

        throw new Error(
          errorData.message ||
            errorData.error ||
            `Failed to save match (${response.status})`
        );
      }

      const savedMatch = await response.json();

      console.log(
        "Match saved:",
        savedMatch
      );

      setMatch({
        ...matchData,
        _id: savedMatch._id,
      });

      setShowRestore(false);
    } catch (error) {
      console.error(
        "Error saving match:",
        error
      );

      alert(
        `Could not save match to database: ${error.message}`
      );
    }
  };

  /*
    ADD BALL
  */

  const addBall = (value) => {
    if (
      isReadOnly ||
      inningsFinished ||
      match.waitingForBatsman
    ) {
      return;
    }

    let score = match.score;
    let wickets = match.wickets;

    let striker = match.striker;
    let nonStriker = match.nonStriker;

    let batsmanStats = {
      ...match.batsmanStats,
    };

    let bowlerStats = {
      ...match.bowlerStats,
    };

    let dismissedPlayers = [
      ...match.dismissedPlayers,
    ];

    let waitingForBatsman = false;

    const currentOver = [
      ...match.currentOver,
      value,
    ];

    /*
      RUNS
    */

    if (typeof value === "number") {
      score += value;

      if (striker) {
        batsmanStats[striker] =
          (batsmanStats[striker] || 0) +
          value;
      }

      if (
        value % 2 !== 0 &&
        striker &&
        nonStriker
      ) {
        [striker, nonStriker] = [
          nonStriker,
          striker,
        ];
      }
    }

    /*
      WICKET
    */

    if (value === "W") {
      wickets += 1;

      if (striker) {
        dismissedPlayers.push(striker);

        striker = "";
        waitingForBatsman = true;
      }

      if (match.currentBowler) {
        bowlerStats[match.currentBowler] =
          (
            bowlerStats[
              match.currentBowler
            ] || 0
          ) + 1;
      }
    }

    /*
      OVER COMPLETED
    */

    if (currentOver.length === 6) {
      const overs = [
        ...match.overs,
        currentOver,
      ];

      if (
        striker &&
        nonStriker
      ) {
        [striker, nonStriker] = [
          nonStriker,
          striker,
        ];
      }

      updateMatch({
        score,
        wickets,

        overs,
        currentOver: [],

        striker,
        nonStriker,

        currentBowler: "",

        dismissedPlayers,
        waitingForBatsman,

        batsmanStats,
        bowlerStats,
      });
    } else {
      updateMatch({
        score,
        wickets,

        currentOver,

        striker,
        nonStriker,

        dismissedPlayers,
        waitingForBatsman,

        batsmanStats,
        bowlerStats,
      });
    }
  };

  /*
    NEXT BATSMAN
  */

  const selectNewBatsman = (player) => {
    if (isReadOnly) return;

    updateMatch({
      striker: player,
      waitingForBatsman: false,
    });
  };

  /*
    NEXT INNINGS
  */

  const startNextInnings = () => {
    if (isReadOnly) return;

    const completedInnings = {
      innings: match.innings,

      battingTeam: match.battingTeam,
      bowlingTeam: match.bowlingTeam,

      score: match.score,
      wickets: match.wickets,

      batsmanStats: match.batsmanStats,
      bowlerStats: match.bowlerStats,
    };

    const nextInnings =
      match.innings + 1;

    let battingTeam = "";
    let bowlingTeam = "";

    if (nextInnings === 2) {
      battingTeam = match.team2;
      bowlingTeam = match.team1;
    }

    if (nextInnings === 3) {
      battingTeam = match.team1;
      bowlingTeam = match.team2;
    }

    if (nextInnings === 4) {
      battingTeam = match.team2;
      bowlingTeam = match.team1;
    }

    updateMatch({
      innings: nextInnings,

      inningsData: [
        ...match.inningsData,
        completedInnings,
      ],

      battingTeam,
      bowlingTeam,

      score: 0,
      wickets: 0,

      overs: [],
      currentOver: [],

      striker: "",
      nonStriker: "",
      currentBowler: "",

      dismissedPlayers: [],

      waitingForBatsman: false,

      batsmanStats: {},
      bowlerStats: {},
    });
  };

  /*
    RESET MATCH
  */

  const resetMatch = () => {
    if (isReadOnly) return;

    const confirmReset = window.confirm(
      "Are you sure you want to start a new match?"
    );

    if (!confirmReset) return;

    localStorage.removeItem(STORAGE_KEY);

    setMatch({
      ...initialMatch,
      team1Players: Array(11).fill(""),
      team2Players: Array(11).fill(""),
    });

    setShowRestore(false);
  };

  /*
    DELETE MATCH
  */

  const deleteMatch = async (matchId) => {
    if (!matchId) {
      alert("Match ID is missing");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this match?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `https://fcc-backend-4a4b.onrender.com/api/matches/${matchId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "x-user-id": USER_ID,
          },
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.error ||
            `Failed to delete match (${response.status})`
        );
      }

      setAvailableMatches((prev) =>
        prev.filter(
          (savedMatch) =>
            String(savedMatch._id) !== String(matchId)
        )
      );

      if (
        match._id &&
        String(match._id) === String(matchId)
      ) {
        localStorage.removeItem(STORAGE_KEY);

        setMatch({
          ...initialMatch,
          team1Players: Array(11).fill(""),
          team2Players: Array(11).fill(""),
        });

        setShowMatches(false);
        setShowRestore(false);
      }

      alert("Match deleted successfully");
    } catch (error) {
      console.error("Error deleting match:", error);

      alert(
        `Unable to delete match: ${
          error.message || "Failed to delete match"
        }`
      );
    }
  };

  /*
    DOWNLOAD PDF
  */

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);

    doc.text(
      "FRIENDS CRICKET CLUB",
      105,
      20,
      {
        align: "center",
      }
    );

    doc.setFontSize(15);

    doc.text(
      "ScoreMagic Scorecard",
      105,
      30,
      {
        align: "center",
      }
    );

    doc.setFontSize(12);

    doc.text(
      `${match.team1} vs ${match.team2}`,
      20,
      45
    );

    let startY = 55;

    const allInnings = [
      ...match.inningsData,
      {
        innings: match.innings,
        battingTeam: match.battingTeam,
        score: match.score,
        wickets: match.wickets,
        batsmanStats:
          match.batsmanStats,
        bowlerStats:
          match.bowlerStats,
      },
    ];

    allInnings.forEach((innings) => {
      if (startY > 230) {
        doc.addPage();
        startY = 20;
      }

      doc.setFontSize(13);

      doc.text(
        `Innings ${innings.innings}: ${innings.battingTeam}`,
        20,
        startY
      );

      startY += 8;

      doc.text(
        `Score: ${innings.score}/${innings.wickets}`,
        20,
        startY
      );

      startY += 8;

      const batsmanRows =
        Object.entries(
          innings.batsmanStats
        ).map(([name, runs]) => [
          name,
          runs,
        ]);

      if (batsmanRows.length > 0) {
        autoTable(doc, {
          startY,
          head: [
            ["Batsman", "Runs"],
          ],
          body: batsmanRows,
        });

        startY =
          doc.lastAutoTable.finalY +
          10;
      }

      const bowlerRows =
        Object.entries(
          innings.bowlerStats
        ).map(([name, wickets]) => [
          name,
          wickets,
        ]);

      if (bowlerRows.length > 0) {
        autoTable(doc, {
          startY,
          head: [
            ["Bowler", "Wickets"],
          ],
          body: bowlerRows,
        });

        startY =
          doc.lastAutoTable.finalY +
          15;
      }
    });

    doc.save(
      `${match.team1}-vs-${match.team2}-scorecard.pdf`
    );
  };

  /*
    RESTORE SCREEN
  */

  if (
    showRestore &&
    match.matchStarted
  ) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
          <div
            className={`${card} w-full max-w-md text-center`}
          >
            <h1 className="text-3xl font-bold text-amber-400">
              🏏 Match Found
            </h1>

            <p className="mt-3 text-zinc-400">
              Your previous match is temporarily saved.
            </p>

            <button
              onClick={() =>
                setShowRestore(false)
              }
              className="mt-6 w-full rounded-xl bg-amber-400 py-3 font-bold text-black"
            >
              Continue Match
            </button>

            <button
              type="button"
              onClick={createNewMatch}
              className="mt-3 w-full rounded-xl border border-amber-400/40 py-3 font-bold text-amber-400"
            >
              ➕ Create New Match
            </button>

            <button
              onClick={() => deleteMatch(match._id)}
              className="mt-3 w-full rounded-xl border border-red-500/40 py-3 text-red-400"
            >
              Delete Match
            </button>
          </div>
        </div>
      </div>
    );
  }

  /*
    SETUP PAGE
  */

  if (!match.matchStarted) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-black text-white">
        <ScoreMagicBackground />

        <div className="relative z-10 mx-auto max-w-4xl p-4 py-10">
          <h1 className="mb-8 text-center text-4xl font-bold">
            Score
            <span className="text-amber-400">
              Magic
            </span>
          </h1>

          <div className={card}>
            <h2 className="mb-5 text-xl font-bold text-amber-400">
              Match Type
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <button
                onClick={() =>
                  updateMatch({
                    matchType: "limited",
                    totalOvers: 6,
                  })
                }
                className={`rounded-xl border p-5 ${
                  match.matchType ===
                  "limited"
                    ? "border-amber-400 bg-amber-400/10"
                    : "border-white/10"
                }`}
              >
                <h3 className="font-bold">
                  Limited Overs
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  2 Innings
                </p>
              </button>

              <button
                onClick={() =>
                  updateMatch({
                    matchType: "test",
                    totalOvers: 25,
                  })
                }
                className={`rounded-xl border p-5 ${
                  match.matchType ===
                  "test"
                    ? "border-amber-400 bg-amber-400/10"
                    : "border-white/10"
                }`}
              >
                <h3 className="font-bold">
                  Test Match
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  4 Innings
                </p>
              </button>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <input
                className={input}
                placeholder="Team 1 Name"
                value={match.team1}
                onChange={(e) =>
                  updateMatch({
                    team1:
                      e.target.value,
                  })
                }
              />

              <input
                className={input}
                placeholder="Team 2 Name"
                value={match.team2}
                onChange={(e) =>
                  updateMatch({
                    team2:
                      e.target.value,
                  })
                }
              />
            </div>

            <select
              className={`${input} mt-5`}
              value={match.totalOvers}
              onChange={(e) =>
                updateMatch({
                  totalOvers: Number(
                    e.target.value
                  ),
                })
              }
            >
              {(match.matchType === "test"
                ? [25, 30]
                : [6, 10, 20, 30, 50]
              ).map((over) => (
                <option
                  key={over}
                  value={over}
                  className="bg-black"
                >
                  {over} Overs
                </option>
              ))}
            </select>
          </div>

          {/* TEAM 1 PLAYERS */}

          <div className={`${card} mt-6`}>
            <h2 className="mb-4 text-xl font-bold text-amber-400">
              {match.team1 ||
                "Team 1"}{" "}
              Players
            </h2>

            <div className="grid gap-3 sm:grid-cols-2">
              {match.team1Players.map(
                (player, index) => (
                  <input
                    key={index}
                    className={input}
                    placeholder={`Player ${
                      index + 1
                    }`}
                    value={player}
                    onChange={(e) => {
                      const players = [
                        ...match.team1Players,
                      ];

                      players[index] =
                        e.target.value;

                      updateMatch({
                        team1Players:
                          players,
                      });
                    }}
                  />
                )
              )}
            </div>
          </div>

          {/* TEAM 2 PLAYERS */}

          <div className={`${card} mt-6`}>
            <h2 className="mb-4 text-xl font-bold text-amber-400">
              {match.team2 ||
                "Team 2"}{" "}
              Players
            </h2>

            <div className="grid gap-3 sm:grid-cols-2">
              {match.team2Players.map(
                (player, index) => (
                  <input
                    key={index}
                    className={input}
                    placeholder={`Player ${
                      index + 1
                    }`}
                    value={player}
                    onChange={(e) => {
                      const players = [
                        ...match.team2Players,
                      ];

                      players[index] =
                        e.target.value;

                      updateMatch({
                        team2Players:
                          players,
                      });
                    }}
                  />
                )
              )}
            </div>
          </div>

          <button
            onClick={startMatch}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 py-4 text-lg font-bold text-black"
          >
            Start Match 🏏
          </button>

          <button
            onClick={() => {
              if (showMatches) {
                setShowMatches(false);
              } else {
                loadMatches();
              }
            }}
            type="button"
            className="mt-4 w-full rounded-xl border border-amber-400/40 py-3 font-bold text-amber-400 hover:bg-amber-400 hover:text-black"
          >
            {loadingMatches
              ? "Loading Matches..."
              : showMatches
              ? "✖️ Hide Live Matches"
              : "👁️ View Live Matches"}
          </button>

          {showMatches && (
            <div className={`${card} mt-5`}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-amber-400">
                  Matches
                </h2>

                <button
                  type="button"
                  onClick={loadMatches}
                  className="rounded-lg border border-amber-400/30 px-3 py-2 text-sm text-amber-400"
                >
                  {loadingMatches
                    ? "Loading..."
                    : "Refresh"}
                </button>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-bold text-green-400">
                  🏏 My Matches
                </h3>

                {myMatches.length ===
                0 ? (
                  <p className="rounded-xl border border-white/10 p-4 text-center text-sm text-zinc-500">
                    You have not created any matches yet.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {myMatches.map(
                      (savedMatch) => (
                        <div
                          key={
                            savedMatch._id
                          }
                          className="rounded-xl border border-green-400/20 bg-black/60 p-4"
                        >
                          <button
                            type="button"
                            onClick={() => {
                              setMatch(
                                savedMatch
                              );
                              setShowMatches(
                                false
                              );
                              setShowRestore(
                                false
                              );
                            }}
                            className="w-full text-left transition hover:opacity-80"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <p className="font-bold text-white">
                                  {
                                    savedMatch.team1
                                  }{" "}
                                  vs{" "}
                                  {
                                    savedMatch.team2
                                  }
                                </p>

                                <p className="mt-1 text-sm text-zinc-400">
                                  Innings{" "}
                                  {
                                    savedMatch.innings
                                  }
                                </p>

                                <p className="mt-1 text-xs text-green-400">
                                  ✏️ You are the match editor
                                </p>
                              </div>

                              <div className="text-right">
                                <p className="text-2xl font-bold text-amber-400">
                                  {
                                    savedMatch.score
                                  }
                                  /
                                  {
                                    savedMatch.wickets
                                  }
                                </p>

                                <p className="text-xs text-zinc-500">
                                  Continue Editing
                                </p>
                              </div>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              deleteMatch(
                                savedMatch._id
                              )
                            }
                            className="mt-3 w-full rounded-lg border border-red-400/40 py-2 font-bold text-red-400 transition hover:bg-red-500 hover:text-white"
                          >
                            🗑️ Delete Match
                          </button>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              <div className="mt-7">
                <h3 className="mb-3 text-lg font-bold text-blue-400">
                  👁️ Live Matches
                </h3>

                {liveMatches.length ===
                0 ? (
                  <p className="rounded-xl border border-white/10 p-4 text-center text-sm text-zinc-500">
                    No other live matches available.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {liveMatches.map(
                      (savedMatch) => (
                        <button
                          key={
                            savedMatch._id
                          }
                          type="button"
                          onClick={async () => {
                            try {
                              const response =
                                await fetch(
                                  `https://fcc-backend-4a4b.onrender.com/api/matches/${savedMatch._id}`
                                );

                              if (
                                !response.ok
                              ) {
                                throw new Error(
                                  "Failed to load match"
                                );
                              }

                              const latestMatch =
                                await response.json();

                              setMatch(
                                latestMatch
                              );

                              setShowMatches(
                                false
                              );

                              setShowRestore(
                                false
                              );
                            } catch (error) {
                              console.error(
                                "Error opening live match:",
                                error
                              );

                              alert(
                                "Unable to open live match"
                              );
                            }
                          }}
                          className="w-full rounded-xl border border-blue-400/20 bg-black/60 p-4 text-left transition hover:border-blue-400/60 hover:bg-blue-400/5"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="font-bold text-white">
                                {
                                  savedMatch.team1
                                }{" "}
                                vs{" "}
                                {
                                  savedMatch.team2
                                }
                              </p>

                              <p className="mt-1 text-sm text-zinc-400">
                                Innings{" "}
                                {
                                  savedMatch.innings
                                }
                              </p>

                              <p className="mt-1 text-xs text-blue-400">
                                🔒 Live Match — View Only
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="text-2xl font-bold text-amber-400">
                                {
                                  savedMatch.score
                                }
                                /
                                {
                                  savedMatch.wickets
                                }
                              </p>

                              <p className="text-xs text-zinc-500">
                                Watch Live
                              </p>
                            </div>
                          </div>
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  /*
    SCORE PAGE
  */

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <ScoreMagicBackground />

      <div className="relative z-10 mx-auto max-w-4xl p-4 py-8">
        {isReadOnly && (
          <div className="mb-4 rounded-xl border border-blue-400/30 bg-blue-500/10 p-4 text-center">
            <p className="font-bold text-blue-300">
              👁️ Live Score — View Only
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              This match is being edited by another user.
              The score updates automatically.
            </p>

            <button
              type="button"
              onClick={createNewMatch}
              className="mt-4 w-full rounded-xl bg-amber-400 px-4 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              ➕ Create New Match
            </button>
          </div>
        )}

        {!isReadOnly && match.matchStarted && (
          <button
            type="button"
            onClick={createNewMatch}
            className="mb-4 w-full rounded-xl border border-amber-400/40 px-4 py-3 font-bold text-amber-400 transition hover:bg-amber-400 hover:text-black"
          >
            ➕ Create New Match
          </button>
        )}

        <div
          className={`${card} text-center relative`}
        >
          {/* FCC LOGO - LEFT */}

          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-amber-400 bg-black shadow-lg shadow-amber-400/20">
              <img
                src="/eee.png"
                alt="FCC Logo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <p className="text-sm tracking-[0.3em] text-amber-400">
            FRIENDS CRICKET CLUB
          </p>

          <h1 className="mt-3 text-2xl font-bold">
            {match.battingTeam}

            <span className="mx-3 text-amber-400">
              VS
            </span>

            {match.bowlingTeam}
          </h1>

          <p className="mt-2 text-zinc-500">
            Innings {match.innings} of{" "}
            {maxInnings}
          </p>
        </div>

        {/* SCORE - STICKY */}

        <div className="sticky top-0 z-50 mt-4 bg-black/95 py-2 backdrop-blur-md">
          <div className="grid grid-cols-2 gap-4">
            <div className={`${card} text-center`}>
              <p className="text-zinc-500">
                SCORE
              </p>

              <h2 className="mt-2 text-4xl font-bold text-amber-400">
                {match.score}/
                {match.wickets}
              </h2>
            </div>

            <div className={`${card} text-center`}>
              <p className="text-zinc-500">
                OVERS
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                {completedOvers}.{balls}

                <span className="text-base text-zinc-500">
                  /{match.totalOvers}
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* PLAYERS */}

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className={card}>
            <p className="text-amber-400">
              Striker
            </p>

            <select
              className={`${input} mt-3`}
              value={match.striker}
              disabled={isReadOnly}
              onChange={(e) =>
                updateMatch({
                  striker:
                    e.target.value,
                })
              }
            >
              <option value="">
                Select Striker
              </option>

              {battingPlayers
                .filter(
                  (player) =>
                    player &&
                    player !==
                      match.nonStriker &&
                    !match.dismissedPlayers.includes(
                      player
                    )
                )
                .map((player) => (
                  <option
                    key={player}
                    value={player}
                    className="bg-black"
                  >
                    {player}
                  </option>
                ))}
            </select>

            {match.striker && (
              <p className="mt-3 text-amber-300">
                Runs:{" "}
                {match.batsmanStats[
                  match.striker
                ] || 0}
              </p>
            )}
          </div>

          <div className={card}>
            <p className="text-amber-400">
              Non-Striker
            </p>

            <select
              className={`${input} mt-3`}
              value={match.nonStriker}
              disabled={isReadOnly}
              onChange={(e) =>
                updateMatch({
                  nonStriker:
                    e.target.value,
                })
              }
            >
              <option value="">
                Select Non-Striker
              </option>

              {battingPlayers
                .filter(
                  (player) =>
                    player &&
                    player !==
                      match.striker &&
                    !match.dismissedPlayers.includes(
                      player
                    )
                )
                .map((player) => (
                  <option
                    key={player}
                    value={player}
                    className="bg-black"
                  >
                    {player}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* BOWLER */}

        <div className={`${card} mt-4`}>
          <p className="text-amber-400">
            Bowler
          </p>

          <select
            className={`${input} mt-3`}
            value={match.currentBowler}
            disabled={isReadOnly}
            onChange={(e) =>
              updateMatch({
                currentBowler:
                  e.target.value,
              })
            }
          >
            <option value="">
              Select Bowler
            </option>

            {bowlingPlayers
              .filter(Boolean)
              .map((player) => (
                <option
                  key={player}
                  value={player}
                  className="bg-black"
                >
                  {player}
                </option>
              ))}
          </select>

          {match.currentBowler && (
            <p className="mt-3 text-amber-300">
              Wickets:{" "}
              {match.bowlerStats[
                match.currentBowler
              ] || 0}
            </p>
          )}
        </div>

        {/* CURRENT OVER */}

        <div
          className={`${card} mt-4 h-[150px] overflow-hidden`}
        >
          <h3 className="text-lg font-bold text-amber-400">
            Current Over
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {match.currentOver.map(
              (ball, index) => (
                <div
                  key={index}
                  className={`flex h-11 w-11 items-center justify-center rounded-full font-bold ${
                    ball === "W"
                      ? "bg-red-500/30 text-red-400"
                      : "bg-amber-400/10 text-amber-300"
                  }`}
                >
                  {ball}
                </div>
              )
            )}
          </div>
        </div>

        {/* PREVIOUS OVERS */}

        <div
          className={`${card} mt-4 h-[300px] overflow-hidden`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-amber-400">
              Previous Overs
            </h3>

            {match.overs.length > 3 && (
              <button
                type="button"
                disabled={isReadOnly}
                onClick={() =>
                  updateMatch({
                    showAllOvers:
                      !match.showAllOvers,
                  })
                }
                className="rounded-lg border border-amber-400/30 px-3 py-1 text-sm text-amber-400 transition hover:bg-amber-400 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                {match.showAllOvers
                  ? "Show Latest 3"
                  : "Show All Overs"}
              </button>
            )}
          </div>

          <div className="scrollbar-gold mt-4 h-[220px] space-y-3 overflow-y-auto pr-2">
            {(match.showAllOvers
              ? [...match.overs]
              : [...match.overs].slice(-3)
            )
              .reverse()
              .map((over, index) => {
                const overNumber =
                  match.overs.length -
                  index;

                return (
                  <div
                    key={overNumber}
                    className="rounded-xl border border-amber-400/10 bg-black/50 p-4"
                  >
                    <p className="mb-3 font-semibold text-amber-400">
                      Over {overNumber}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {over.map(
                        (ball, i) => (
                          <span
                            key={i}
                            className={`flex h-10 min-w-10 items-center justify-center rounded-full px-2 font-bold ${
                              ball === "W"
                                ? "border border-red-500/30 bg-red-500/20 text-red-400"
                                : "border border-amber-400/20 bg-amber-400/10 text-amber-300"
                            }`}
                          >
                            {ball}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* RUN BUTTONS */}

        {!inningsFinished && (
          <div className={`${card} mt-5`}>
            {match.waitingForBatsman && (
              <div className="mb-4">
                <p className="mb-3 text-center text-amber-400">
                  Select Next Batsman
                </p>

                <select
                  className={input}
                  disabled={isReadOnly}
                  onChange={(e) =>
                    selectNewBatsman(
                      e.target.value
                    )
                  }
                  defaultValue=""
                >
                  <option value="">
                    Select Batsman
                  </option>

                  {battingPlayers
                    .filter(
                      (player) =>
                        player &&
                        !match.dismissedPlayers.includes(
                          player
                        ) &&
                        player !==
                          match.nonStriker
                    )
                    .map((player) => (
                      <option
                        key={player}
                        value={player}
                      >
                        {player}
                      </option>
                    ))}
                </select>
              </div>
            )}

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {[0, 1, 2, 3, 4, 6].map(
                (run) => (
                  <button
                    key={run}
                    onClick={() =>
                      addBall(run)
                    }
                    disabled={
                      isReadOnly ||
                      match.waitingForBatsman
                    }
                    className="rounded-xl border border-amber-400/30 py-4 text-xl font-bold text-amber-400 disabled:opacity-30"
                  >
                    {run}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() =>
                addBall("W")
              }
              disabled={
                isReadOnly ||
                match.waitingForBatsman
              }
              className="mt-4 w-full rounded-xl bg-red-600 py-4 font-bold disabled:opacity-30"
            >
              WICKET
            </button>
          </div>
        )}

        {/* NEXT INNINGS */}

        {inningsFinished &&
          !matchFinished && (
            <div
              className={`${card} mt-5 text-center`}
            >
              <h2 className="text-2xl font-bold text-amber-400">
                Innings Completed 🏏
              </h2>

              <button
                type="button"
                disabled={isReadOnly}
                onClick={
                  startNextInnings
                }
                className="mt-5 rounded-xl bg-amber-400 px-6 py-3 font-bold text-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                Start Innings{" "}
                {match.innings + 1}
              </button>
            </div>
          )}

        {/* MATCH FINISHED */}

        {matchFinished && (
          <div
            className={`${card} mt-5 text-center`}
          >
            <h2 className="text-3xl font-bold text-amber-400">
              🏆 Match Finished
            </h2>

            <p className="mt-3 text-xl font-bold text-white">
              {getMatchResult()}
            </p>

            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={downloadPDF}
                className="rounded-xl bg-amber-400 px-6 py-3 font-bold text-black"
              >
                Download PDF
              </button>

              <button
                onClick={resetMatch}
                className="rounded-xl border border-amber-400/30 px-6 py-3"
              >
                New Match
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}