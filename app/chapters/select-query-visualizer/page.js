"use client";

import {
  IconArrowNarrowLeft,
  IconPlayerPlay,
  IconRefresh,
} from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const sampleData = [
  { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0 },
  { id: 3, title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6 },
  { id: 4, title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9 },
  { id: 5, title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: 8.7 },
];

const queries = [
  {
    name: "Get Everything",
    sql: "SELECT * FROM movies",
    columns: ["id", "title", "year", "genre", "rating"],
    filter: () => true,
    description:
      "The asterisk (*) means 'give me all columns'. No WHERE clause means all rows are returned.",
  },
  {
    name: "Pick Columns",
    sql: "SELECT title, year FROM movies",
    columns: ["title", "year"],
    filter: () => true,
    description:
      "Instead of *, we list specific column names. Only 'title' and 'year' appear in the result.",
  },
  {
    name: "Filter Rows",
    sql: "SELECT * FROM movies WHERE genre = 'Sci-Fi'",
    columns: ["id", "title", "year", "genre", "rating"],
    filter: (row) => row.genre === "Sci-Fi",
    description:
      "WHERE filters which rows to include. Only movies where genre equals 'Sci-Fi' pass through.",
  },
  {
    name: "Columns + Filter",
    sql: "SELECT title, rating FROM movies WHERE year > 2000",
    columns: ["title", "rating"],
    filter: (row) => row.year > 2000,
    description:
      "Combine both! Pick specific columns AND filter rows. Shows title & rating for movies after 2000.",
  },
  {
    name: "Multiple Conditions",
    sql: "SELECT title FROM movies WHERE rating > 8.7 AND year < 2010",
    columns: ["title"],
    filter: (row) => row.rating > 8.7 && row.year < 2010,
    description:
      "Use AND to combine conditions. A row must match ALL conditions to be included in the result.",
  },
];

export default function SelectQueryVisualizer() {
  const [selectedQuery, setSelectedQuery] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentQuery = queries[selectedQuery];

  const runAnimation = () => {
    setAnimationStep(0);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (!isAnimating) return;

    const steps = [1, 2, 3, 4];
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps.length) {
        setAnimationStep(4);
        setIsAnimating(false);
        clearInterval(interval);
      } else {
        setAnimationStep(steps[currentStep]);
      }
    }, 1200);

    setAnimationStep(1);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const reset = () => {
    setAnimationStep(0);
    setIsAnimating(false);
  };

  const getRowClass = (row) => {
    if (animationStep === 0) return "";
    if (animationStep === 1) {
      return "animate-pulse bg-amber-900/20";
    }
    if (animationStep >= 2) {
      const passes = currentQuery.filter(row);
      if (passes) {
        return "bg-emerald-900/30 border-emerald-500/50";
      } else {
        return "opacity-30 line-through";
      }
    }
    return "";
  };

  const getColumnClass = (col) => {
    if (animationStep < 3) return "";
    const isSelected = currentQuery.columns.includes(col);
    if (isSelected) {
      return "bg-sky-900/30 text-sky-300";
    }
    return "opacity-30";
  };

  const filteredData =
    animationStep >= 2 ? sampleData.filter(currentQuery.filter) : sampleData;

  const allColumns = ["id", "title", "year", "genre", "rating"];
  const displayColumns = animationStep >= 3 ? currentQuery.columns : allColumns;

  const stepLabels = ["Start", "Scan", "Filter", "Select", "Done"];

  return (
    <div className="font-sans min-h-screen">
      <main className="container py-10 sm:py-20 px-4">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors mb-6 text-sm"
        >
          <IconArrowNarrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>

        {/* Header */}
        <h1 className="text-xl sm:text-2xl font-semibold text-white mb-1">
          How SELECT Works
        </h1>
        <p className="text-neutral-400 text-sm mb-6">
          Watch SQL retrieve data step-by-step
        </p>

        {/* Query Selector - Horizontal Scroll on Mobile */}
        <div className="mb-5">
          <h2 className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-2">
            Choose Query
          </h2>
          <div className="flex gap-1.5 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
            {queries.map((query) => (
              <button
                type="button"
                key={query.name}
                onClick={() => {
                  setSelectedQuery(queries.indexOf(query));
                  reset();
                }}
                className={`px-4 py-4 rounded-lg text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                  selectedQuery === queries.indexOf(query)
                    ? "bg-amber-500 text-neutral-900"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 active:bg-neutral-600"
                }`}
              >
                {query.name}
              </button>
            ))}
          </div>
        </div>

        {/* SQL Query Display */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 sm:p-4 mb-5">
          <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">
            SQL Query
          </span>
          <div className="overflow-x-auto mt-2">
            <code className="text-xs sm:text-sm font-mono whitespace-nowrap">
              <span className="text-fuchsia-400">SELECT</span>{" "}
              <span className="text-sky-400">
                {currentQuery.columns.length === 5
                  ? "*"
                  : currentQuery.columns.join(", ")}
              </span>{" "}
              <span className="text-fuchsia-400">FROM</span>{" "}
              <span className="text-amber-400">movies</span>
              {currentQuery.sql.includes("WHERE") && (
                <>
                  {" "}
                  <span className="text-fuchsia-400">WHERE</span>{" "}
                  <span className="text-emerald-400">
                    {currentQuery.sql.split("WHERE ")[1]}
                  </span>
                </>
              )}
            </code>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              type="button"
              onClick={reset}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-neutral-800 text-neutral-300 hover:bg-neutral-700 active:bg-neutral-600 text-sm transition-colors"
            >
              <IconRefresh className="w-4 h-4" />
              Reset
            </button>
            <button
              type="button"
              onClick={runAnimation}
              disabled={isAnimating}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 active:bg-emerald-400 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <IconPlayerPlay className="w-4 h-4" />
              Run Query
            </button>
          </div>
        </div>

        {/* Animation Steps - Compact Progress */}
        <div className="mb-5">
          <div className="flex items-center gap-1">
            {stepLabels.map((step, stepIndex) => (
              <div key={step} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-medium transition-all duration-300 ${
                    animationStep >= stepIndex
                      ? "bg-emerald-500 text-white"
                      : "bg-neutral-800 text-neutral-500"
                  }`}
                >
                  {stepIndex}
                </div>
                <span
                  className={`text-[9px] sm:text-[10px] mt-1 transition-colors ${
                    animationStep >= stepIndex
                      ? "text-white"
                      : "text-neutral-600"
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
          {/* Progress bar */}
          <div className="mt-2 h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-500 ease-out"
              style={{ width: `${(animationStep / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Visual Tables */}
        <div className="space-y-3 mb-5">
          {/* Source Table */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-3">
            <h3 className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-2">
              📦 Source: <span className="text-amber-400">movies</span>
            </h3>
            <div className="overflow-x-auto -mx-3 px-3">
              <table className="min-w-full text-[10px] sm:text-xs">
                <thead>
                  <tr>
                    {allColumns.map((col) => (
                      <th
                        key={col}
                        className={`border border-neutral-700 px-1.5 sm:px-2 py-1 text-left font-medium text-white bg-neutral-800 transition-all duration-300 whitespace-nowrap ${getColumnClass(col)}`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sampleData.map((row, index) => (
                    <tr
                      key={row.id}
                      className={`transition-all duration-500 ${getRowClass(row)}`}
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      {allColumns.map((col) => (
                        <td
                          key={col}
                          className={`border border-neutral-700 px-1.5 sm:px-2 py-1 text-neutral-300 transition-all duration-300 whitespace-nowrap ${getColumnClass(col)}`}
                        >
                          {col === "title" && row[col].length > 12 ? (
                            <span className="sm:hidden">
                              {row[col].slice(0, 10)}...
                            </span>
                          ) : null}
                          {col === "title" && row[col].length > 12 ? (
                            <span className="hidden sm:inline">{row[col]}</span>
                          ) : (
                            row[col]
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Result Table */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-3">
            <h3 className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-2">
              ✨ Result
            </h3>
            <div className="overflow-x-auto -mx-3 px-3">
              {animationStep >= 4 ? (
                <>
                  <table className="min-w-full text-[10px] sm:text-xs">
                    <thead>
                      <tr>
                        {displayColumns.map((col) => (
                          <th
                            key={col}
                            className="border border-emerald-800/50 bg-emerald-900/30 px-1.5 sm:px-2 py-1 text-left font-medium text-emerald-300 whitespace-nowrap"
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((row, index) => (
                        <tr
                          key={row.id}
                          className="animate-fade-in"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {displayColumns.map((col) => (
                            <td
                              key={col}
                              className="border border-emerald-800/30 px-1.5 sm:px-2 py-1 text-neutral-200 whitespace-nowrap"
                            >
                              {row[col]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-2 text-[10px] text-neutral-500">
                    {filteredData.length} row
                    {filteredData.length !== 1 ? "s" : ""} returned
                  </p>
                </>
              ) : (
                <div className="h-20 sm:h-24 flex items-center justify-center text-neutral-600 text-xs">
                  <p>Tap "Run" to see result</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="bg-linear-to-r from-amber-900/20 to-emerald-900/20 border border-amber-800/30 rounded-lg p-3">
          <h3 className="text-white font-medium text-xs mb-1.5">
            💡 What's happening?
          </h3>
          <p className="text-neutral-300 text-xs leading-relaxed">
            {currentQuery.description}
          </p>

          {animationStep > 0 && (
            <div className="mt-2 pt-2 border-t border-neutral-700/50">
              <p className="text-[10px] text-neutral-400">
                {animationStep === 1 && "Step 1: Scanning all rows..."}
                {animationStep === 2 && "Step 2: Applying filter..."}
                {animationStep === 3 && "Step 3: Selecting columns..."}
                {animationStep === 4 && "✅ Done!"}
              </p>
            </div>
          )}
        </div>

        {/* Quick Reference */}
        <div className="mt-5 p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg">
          <h3 className="text-white font-medium text-xs mb-2">
            📚 SELECT Anatomy
          </h3>
          <div className="font-mono text-[10px] sm:text-xs space-y-1.5">
            <div className="flex items-start gap-2">
              <span className="text-fuchsia-400 w-14 shrink-0">SELECT</span>
              <span className="text-neutral-400">
                → Which columns? (* = all)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-fuchsia-400 w-14 shrink-0">FROM</span>
              <span className="text-neutral-400">→ Which table?</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-fuchsia-400 w-14 shrink-0">WHERE</span>
              <span className="text-neutral-400">→ Filter rows (optional)</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-neutral-800">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors text-sm"
          >
            <IconArrowNarrowLeft className="w-4 h-4" />
            Back to chapters
          </Link>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
          opacity: 0;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
