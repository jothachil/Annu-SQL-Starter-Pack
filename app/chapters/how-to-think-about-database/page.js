import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function HowToThinkAboutDatabase() {
  return (
    <div className="font-sans">
      <main className="container py-20 px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8"
        >
          <IconArrowNarrowLeft className="w-4 h-4" />
          Back to chapters
        </Link>

        <h1 className="text-3xl font-semibold text-white mb-6">
          How to Think About Database
        </h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              You Already Know This
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              A database is basically{" "}
              <strong className="text-white">Excel on steroids</strong>.
              Seriously! Think about any Excel spreadsheet you've used that's
              exactly how a database stores information, just with some extra
              superpowers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Excel → Database Dictionary
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Here's the translation guide:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-neutral-700 text-sm">
                <thead>
                  <tr className="bg-neutral-800">
                    <th className="border border-neutral-700 px-4 py-3 text-emerald-400 text-left">
                      In Excel
                    </th>
                    <th className="border border-neutral-700 px-4 py-3 text-amber-400 text-left">
                      In Database
                    </th>
                    <th className="border border-neutral-700 px-4 py-3 text-white text-left">
                      Same thing!
                    </th>
                  </tr>
                </thead>
                <tbody className="text-neutral-400">
                  <tr>
                    <td className="border border-neutral-700 px-4 py-3">
                      Folder with Excel sheets
                    </td>
                    <td className="border border-neutral-700 px-4 py-3">
                      Database
                    </td>
                    <td className="border border-neutral-700 px-4 py-3">
                      Collection of related data
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-3">
                      One Excel sheet (.xlsx)
                    </td>
                    <td className="border border-neutral-700 px-4 py-3">
                      Table
                    </td>
                    <td className="border border-neutral-700 px-4 py-3">
                      One grid of data
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-3">
                      Column (A, B, C...)
                    </td>
                    <td className="border border-neutral-700 px-4 py-3">
                      Column
                    </td>
                    <td className="border border-neutral-700 px-4 py-3">
                      Type of info (title, year)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-3">
                      Row (1, 2, 3...)
                    </td>
                    <td className="border border-neutral-700 px-4 py-3">
                      Row / Record
                    </td>
                    <td className="border border-neutral-700 px-4 py-3">
                      One entry (one movie)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-3">
                      Cell (A1, B2)
                    </td>
                    <td className="border border-neutral-700 px-4 py-3">
                      Field
                    </td>
                    <td className="border border-neutral-700 px-4 py-3">
                      Single piece of data
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Picture It
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Imagine you have an Excel sheet tracking your favorite movies:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-emerald-900/30">
                    <th className="border border-emerald-800/50 px-4 py-2 text-emerald-400 text-left text-xs">
                      A
                    </th>
                    <th className="border border-emerald-800/50 px-4 py-2 text-emerald-400 text-left text-xs">
                      B
                    </th>
                    <th className="border border-emerald-800/50 px-4 py-2 text-emerald-400 text-left text-xs">
                      C
                    </th>
                    <th className="border border-emerald-800/50 px-4 py-2 text-emerald-400 text-left text-xs">
                      D
                    </th>
                  </tr>
                  <tr className="bg-neutral-800">
                    <th className="border border-neutral-700 px-4 py-2 text-white text-left">
                      id
                    </th>
                    <th className="border border-neutral-700 px-4 py-2 text-white text-left">
                      title
                    </th>
                    <th className="border border-neutral-700 px-4 py-2 text-white text-left">
                      year
                    </th>
                    <th className="border border-neutral-700 px-4 py-2 text-white text-left">
                      genre
                    </th>
                  </tr>
                </thead>
                <tbody className="text-neutral-400">
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">1</td>
                    <td className="border border-neutral-700 px-4 py-2">
                      Inception
                    </td>
                    <td className="border border-neutral-700 px-4 py-2">
                      2010
                    </td>
                    <td className="border border-neutral-700 px-4 py-2">
                      Sci-Fi
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">2</td>
                    <td className="border border-neutral-700 px-4 py-2">
                      The Dark Knight
                    </td>
                    <td className="border border-neutral-700 px-4 py-2">
                      2008
                    </td>
                    <td className="border border-neutral-700 px-4 py-2">
                      Action
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-700 px-4 py-2">3</td>
                    <td className="border border-neutral-700 px-4 py-2">
                      Interstellar
                    </td>
                    <td className="border border-neutral-700 px-4 py-2">
                      2014
                    </td>
                    <td className="border border-neutral-700 px-4 py-2">
                      Sci-Fi
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              This is <strong className="text-white">exactly</strong> what a
              database table looks like! The sheet name would be the table name:{" "}
              <code className="bg-neutral-800 px-2 py-1 rounded text-amber-400">
                movies
              </code>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              What About SQL?
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              In Excel, you click around, use filters, and write formulas to
              find and change data.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-4">
              In a database, you type commands instead. These commands are
              written in <strong className="text-white">SQL</strong> (Structured
              Query Language).
            </p>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <p className="text-neutral-500 text-sm mb-2">
                Instead of clicking filter → genre → "Sci-Fi", you'd type:
              </p>
              <code className="text-amber-400 font-mono">
                SELECT * FROM movies WHERE genre = 'Sci-Fi'
              </code>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
          >
            <IconArrowNarrowLeft className="w-4 h-4" />
            Back to all chapters
          </Link>
        </div>
      </main>
    </div>
  );
}
