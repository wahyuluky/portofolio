import { useState } from "react";
import { projects } from "../data";

const mainCategories = [
  { label: "All", value: "all" },
  { label: "Mobile", value: "mobile" },
  { label: "Web", value: "web" },
  { label: "UI/UX Design", value: "uiux" },
  { label: "Design", value: "design" },
  { label: "Portofolio", value: "pt"},
];

const moreCategories = [
  { label: "Data Science", value: "ds" },
  { label: "Data Analyst", value: "da" },
  { label: "Software Quality Assurance", value: "qa" },
  { label: "Machine Learning", value: "ml" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showMore, setShowMore] = useState(false);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-10 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3">Projects</h2>
          <p className="text-gray-400">
            Hasil proyek yang saya kerjakan selama perkuliahan
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 relative">

          {/* Main Categories */}
          {mainCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                setShowMore(false);
              }}
              className={`px-7 py-3 rounded-full text-sm transition
              ${
                activeCategory === cat.value
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}

          {/* More Button */}
          <div className="relative">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-7 py-3 rounded-full text-sm bg-gray-800 text-gray-300 hover:bg-gray-700"
            >
              More
            </button>

            {/* Dropdown */}
            {showMore && (
              <div className="absolute top-14 right-0 w-44 bg-gray-800 rounded-lg shadow-lg p-2 z-10">
                {moreCategories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => {
                      setActiveCategory(cat.value);
                      setShowMore(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700 text-sm"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Project Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-indigo-500/10 transition"
            >

              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={project.gambar}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 flex gap-3">

                  {/* Medium */}
                  <a
                    href={project.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-2 rounded-lg border text-sm font-semibold transition
                    ${
                      project.mediumUrl
                        ? "border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white"
                        : "border-zinc-600 text-zinc-500 cursor-not-allowed"
                    }`}
                  >
                    Medium
                  </a>

                  {/* Live Demo */}
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-2 rounded-lg text-sm font-semibold transition
                    ${
                      project.projectUrl
                        ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                        : "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                    }`}
                  >
                    Live Demo
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            Tidak ada proyek pada kategori ini.
          </p>
        )}

      </div>
    </section>
  );
}