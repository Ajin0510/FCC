import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MatchList() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loadMatches = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://fcc-backend-4a4b.onrender.com"
      );

      if (!response.ok) {
        throw new Error("Failed to load matches");
      }

      const data = await response.json();

      setMatches(data);
    } catch (error) {
      console.error("Error loading matches:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMatches();
  }, []);

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-amber-400">
              🏏 ScoreMagic Matches
            </h1>

            <p className="mt-1 text-gray-400">
              View live matches or create a new match
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={loadMatches}
              className="rounded-lg border border-amber-400/50 px-4 py-3 font-bold text-amber-400 hover:bg-amber-400 hover:text-black"
            >
              Refresh
            </button>

            <button
              onClick={() => navigate("/scoremagic")}
              className="rounded-lg bg-amber-400 px-5 py-3 font-bold text-black"
            >
              + Create New Match
            </button>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="py-10 text-center text-gray-400">
            Loading matches...
          </div>
        )}

        {/* NO MATCHES */}
        {!loading && matches.length === 0 && (
          <div className="rounded-xl border border-amber-400/30 p-10 text-center">
            <h2 className="text-xl text-gray-300">
              No matches created yet
            </h2>

            <p className="mt-2 text-gray-500">
              Click "Create New Match" to start.
            </p>
          </div>
        )}

        {/* MATCHES */}
        {!loading && matches.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2">
            {matches.map((match) => (
              <div
                key={match._id}
                className="rounded-xl border border-amber-400/40 bg-zinc-900 p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded bg-red-600 px-3 py-1 text-xs font-bold uppercase">
                    {match.status || "LIVE"}
                  </span>

                  <span className="text-sm text-gray-400">
                    Editor: {match.matchEditor || "Unknown"}
                  </span>
                </div>

                <h2 className="text-2xl font-bold">
                  {match.team1} vs {match.team2}
                </h2>

                <div className="my-5 rounded-lg bg-black p-4 text-center">
                  <div className="text-4xl font-bold text-amber-400">
                    {match.score || 0}/{match.wickets || 0}
                  </div>

                  <div className="mt-2 text-gray-400">
                    Overs: {Array.isArray(match.overs)
                      ? match.overs.length
                      : match.overs || 0}
                  </div>
                </div>

                <button
                  onClick={() =>
                    navigate(`/scoremagic/${match._id}`)
                  }
                  className="w-full rounded-lg border border-amber-400 py-3 font-bold text-amber-400 transition hover:bg-amber-400 hover:text-black"
                >
                  View Live Score
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}