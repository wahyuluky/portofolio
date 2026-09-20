import { useMemo, useState } from "react";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const courses = [
    {
      name: "Algoritma dan Pemrograman",
      category: "Programming",
      semester: 1,
      description: "Dasar algoritma, logika pemrograman, dan pemecahan masalah menggunakan bahasa pemrograman.",
      skills: ["Programming", "Algorithm", "Problem Solving"],
    },
    {
      name: "Pemrograman Berorientasi Objek",
      category: "Programming",
      semester: 3,
      description: "Konsep dan penerapan pemrograman berorientasi objek dalam pengembangan perangkat lunak.",
      skills: ["OOP", "Programming"],
    },
    {
      name: "Basis Data",
      category: "Database",
      semester: 3,
      description: "Perancangan dan pengelolaan basis data untuk mendukung kebutuhan aplikasi.",
      skills: ["SQL", "MySQL", "ERD", "Database Design"],
    },
    {
      name: "Pemrograman Web",
      category: "Web Development",
      semester: 3,
      description: "Pengembangan aplikasi berbasis web menggunakan teknologi frontend dan backend.",
      skills: ["HTML", "CSS", "JavaScript", "Web Development"],
    },
    {
      name: "Rekayasa Perangkat Lunak",
      category: "Software Engineering",
      semester: 4,
      description: "Konsep, proses, dan metode dalam pengembangan perangkat lunak secara sistematis.",
      skills: ["SDLC", "Software Engineering"],
    },
    {
      name: "Organisasi dan Arsitektur Komputer",
      category: "Computer Architecture",
      semester: 1,
      description: "Dasar-dasar organisasi dan arsitektur komputer, termasuk komponen dan cara kerja sistem komputer.",
      skills: ["Computer Architecture", "Hardware"],
    },
    {
      name: "Interaksi Manusia dan Komputer",
      category: "UI/UX",
      semester: 4,
      description: "Prinsip perancangan interaksi dan antarmuka yang berorientasi pada kebutuhan pengguna.",
      skills: ["UI/UX", "User Flow", "Usability"],
    },
    {
      name: "Pemrograman Mobile",
      category: "Mobile Development",
      semester: 5,
      description: "Konsep dan pengembangan aplikasi untuk perangkat mobile.",
      skills: ["Mobile Development", "Flutter", "Dart"],
    },
    {
      name: "Pengantar Teknologi Informasi",
      category: "Information Technology",
      semester: 1,
      description: "Pengenalan konsep dasar teknologi informasi, termasuk perangkat keras, perangkat lunak, dan jaringan.",
      skills: ["IT Fundamentals", "Networking"],
    },
    {
      name: "Kecerdasan Buatan",
      category: "Artificial Intelligence",
      semester: 6,
      description: "Konsep dasar kecerdasan buatan dan penerapannya dalam penyelesaian masalah.",
      skills: ["AI", "Machine Learning"],
    },
    {
      name: "Pemrosesan Bahasa Alami",
      category: "Artificial Intelligence",
      semester: 6,
      description: "Konsep dasar pemrosesan bahasa manusia menggunakan pendekatan komputasional.",
      skills: ["NLP", "Text Processing"],
    },
    {
        name: "Kalkulus",
        category: "Mathematics",
        semester: 1,
        description: "Dasar-dasar kalkulus, termasuk limit, turunan, dan integral.",
        skills: ["Calculus", "Mathematics"],
    },
    {
        name: "Pemrograman Dasar",
        category: "Programming",
        semester: 1,
        description: "Pengenalan dasar-dasar pemrograman, termasuk konsep variabel, kontrol alur, dan fungsi.",
        skills: ["Programming", "Problem Solving", "Basic Programming", "Java"],
    },
    {
        name: "Struktur Data",
        category: "Programming",
        semester: 3,
        description: "Konsep dasar struktur data, termasuk array, linked list, stack, queue, dan tree.",
        skills: ["Data Structures", "Programming"],
    }
  ];

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const keyword = search.toLowerCase();

      const matchesSearch =
        course.name.toLowerCase().includes(keyword) ||
        course.category.toLowerCase().includes(keyword) ||
        course.skills.some((skill) =>
          skill.toLowerCase().includes(keyword)
        );

      const matchesCategory =
        category === "All" || course.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section
      id="courses"
      className="min-h-screen bg-gray-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-600">
            Academic Background
          </p>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Mata Kuliah
          </h1>

          <p className="leading-7 text-gray-400">
            Mata kuliah yang telah saya pelajari selama menempuh
            pendidikan S1 Informatika, mencakup pemrograman,
            pengembangan aplikasi, basis data, analisis sistem,
            UI/UX, dan teknologi lainnya.
          </p>
        </div>

        {/* Summary */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
            <p className="text-sm text-gray-500">
              Total Mata Kuliah
            </p>
            <p className="mt-2 text-3xl font-bold">
              {courses.length}
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
            <p className="text-sm text-gray-500">
              Bidang Pembelajaran
            </p>
            <p className="mt-2 text-3xl font-bold">
              {categories.length - 1}
            </p>
          </div>

          <div className="hidden rounded-xl border border-gray-800 bg-gray-900 p-5 md:block">
            <p className="text-sm text-gray-500">
              Program Studi
            </p>
            <p className="mt-2 text-xl font-semibold">
              S1 Informatika
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Cari mata kuliah atau skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-800 bg-gray-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-emerald-500"
          />
        </div>

        {/* Filter */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm transition ${
                category === item
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Courses */}
        <div className="grid gap-5 md:grid-cols-2">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-800 bg-gray-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/50"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                    {course.category}
                  </span>

                  <h2 className="text-lg font-semibold">
                    {course.name}
                  </h2>
                </div>

                <span className="whitespace-nowrap text-xs text-gray-500">
                  Semester {course.semester}
                </span>
              </div>

              <p className="mb-5 text-sm leading-6 text-gray-400">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-gray-800 px-2.5 py-1 text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-10 text-center">
            <p className="text-gray-400">
              Mata kuliah tidak ditemukan.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Courses;