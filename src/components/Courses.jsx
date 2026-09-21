import { useMemo, useState } from "react";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const courses = [
    {
      name: "Bahasa Indonesia",
      category: "Other",
      semester: 1,
      description: "Mata kuliah yang membahas tata bahasa, penulisan, dan komunikasi dalam bahasa Indonesia.",
      skills: ["Writing", "Communication"],
    },
    {
      name: "Olahraga",
      category: "Other",
      semester: 1,
      description: "Mata kuliah yang membahas pentingnya olahraga dan kesehatan fisik.",
      skills: ["Physical Fitness", "Health"],
    },
    {
      name: "Organisasi dan Arsitektur Komputer",
      category: "Computer Architecture",
      semester: 1,
      description: "Dasar-dasar organisasi dan arsitektur komputer, termasuk komponen dan cara kerja sistem komputer.",
      skills: ["Computer Architecture", "Hardware"],
    },
    {
      name: "Pancasila",
      category: "Other",
      semester: 1,
      description: "Mata kuliah yang membahas nilai-nilai Pancasila sebagai dasar negara Indonesia.",
      skills: ["Civics", "Ethics"],
    },
    {
      name: "Pengantar Teknologi Informasi",
      category: "Information Technology",
      semester: 1,
      description: "Pengenalan konsep dasar teknologi informasi, termasuk perangkat keras, perangkat lunak, dan jaringan.",
      skills: ["IT Fundamentals", "Networking"],
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
      name: "Productive Skills of Foreign Language for Spesific Purpose",
      category: "Other",
      semester: 1,
      description: "Mata kuliah yang membahas keterampilan berbahasa Inggris untuk tujuan tertentu.",
      skills: ["Foreign Language", "Communication"],
    },
    {
      name: "Keimanan dan Kemanusiaan",
      category: "Other",
      semester: 1,
      description: "Mata kuliah yang membahas nilai-nilai keimanan dan kemanusiaan dalam kehidupan sehari-hari.",
      skills: ["Ethics", "Humanity"],
    },
    {
      name: "Aljabar Linear dan Matriks",
      category: "Mathematics",
      semester: 2,
      description: "Dasar-dasar aljabar linear, termasuk vektor, matriks, dan sistem persamaan linear.",
      skills: ["Linear Algebra", "Matrices", "Mathematics"],
    },
    {
      name: "Kewarganegaraan",
      category: "Other",
      semester: 2,
      description: "Mata kuliah yang membahas hak dan kewajiban sebagai warga negara Indonesia.",
      skills: ["Civics", "Citizenship"],
    },
    {
      name: "Matematika Diskrit",
      category: "Mathematics",
      semester: 2,
      description: "Dasar-dasar matematika diskrit, termasuk logika, himpunan, relasi, dan graf.",
      skills: ["Discrete Mathematics", "Logic", "Sets", "Graphs"],
    },
    {
      name: "Sistem Informasi",
      category: "Information Systems",
      semester: 2,
      description: "Konsep dasar sistem informasi, termasuk analisis, perancangan, dan implementasi sistem informasi.",
      skills: ["Information Systems", "System Analysis", "System Design"],
    },
    {
      name: "Penulisan Ilmiah",
      category: "Other",
      semester: 2,
      description: "Konsep dasar penulisan ilmiah, termasuk struktur laporan, referensi, dan etika akademik.",
      skills: ["Academic Writing", "Research Methods"],
    },
    {
      name: "Logika dan Komputasi",
      category: "Programming",
      semester: 2,
      description: "Dasar-dasar logika dan komputasi, termasuk logika proposisi, logika predikat, dan teori komputasi.",
      skills: ["Logic", "Computation", "Problem Solving"],
    },
    {
      name: "Pemrograman Berorientasi Objek",
      category: "Programming",
      semester: 2,
      description: "Konsep dan penerapan pemrograman berorientasi objek dalam pengembangan perangkat lunak.",
      skills: ["OOP", "Programming", "Java"],
    },
    {
      name: "English Profiency Test Preparation Course",
      category: "Other",
      semester: 2,
      description: "Mata kuliah yang membahas persiapan menghadapi tes kemampuan bahasa Inggris.",
      skills: ["English Proficiency", "Test Preparation"],
    },
    {
      name: "Ibadah dan Mu'amalah",
      category: "Other",
      semester: 2,
      description: "Mata kuliah yang membahas aspek ibadah dan mu'amalah dalam kehidupan sehari-hari.",
      skills: ["Ethics", "Religion"],
    },
    {
      name: "Algoritma Pemrograman",
      category: "Programming",
      semester: 3,
      description: "Dasar algoritma, logika pemrograman, dan pemecahan masalah menggunakan bahasa pemrograman.",
      skills: ["Programming", "Algorithm", "Problem Solving"],
    },
    {
      name: "Kemuhammadiyahan",
      category: "Other",
      semester: 3,
      description: "Mata kuliah yang membahas nilai-nilai dan sejarah organisasi Muhammadiyah.",
      skills: ["Ethics", "Religion"],
    },
    {
      name: "Metode Numerik",
      category: "Mathematics",
      semester: 3,
      description: "Metode numerik untuk menyelesaikan masalah matematika secara komputasional.",
      skills: ["Numerical Methods", "Mathematics"],
    },
    {
      name: "Pengantar Game",
      category: "Game Development",
      semester: 3,
      description: "Pengenalan konsep dasar pengembangan game, termasuk desain, mekanika, dan pemrograman game.",
      skills: ["Game Development", "Game Design", "Programming"],
    },
    {
      name: "Interaksi Manusia dan Komputer",
      category: "UI/UX",
      semester: 3,
      description: "Prinsip perancangan interaksi dan antarmuka yang berorientasi pada kebutuhan pengguna.",
      skills: ["UI/UX", "User Flow", "Usability"],
    },
    {
      name: "Statistik dan Probabilitas",
      category: "Data Analysis",
      semester: 3,
      description: "Dasar-dasar statistik dan probabilitas untuk analisis data dan pengambilan keputusan.",
      skills: ["Statistics", "Probability", "Data Analysis"],
    },
    {
      name: "Pemrograman Lanjut",
      category: "Programming",
      semester: 3,
      description: "Penerapan konsep pemrograman lanjutan, termasuk struktur data, algoritma, dan pemrograman berorientasi objek.",
      skills: ["Advanced Programming", "Data Structures", "OOP", "Java"],
    },
    {
      name: "Teori Bahasa dan Otomata",
      category: "Programming",
      semester: 3,
      description: "Konsep dasar teori bahasa formal, automata, dan penerapannya dalam pemrograman.",
      skills: ["Formal Languages", "Automata Theory", "Programming"],
    },
    {
      name: "Komunikasi Data",
      category: "Networking",
      semester: 3,
      description: "Dasar-dasar komunikasi data, termasuk protokol, jaringan, dan transmisi data.",
      skills: ["Data Communication", "Networking", "Protocols"],
    },
    {
      name: "Jaringan Komputer",
      category: "Networking",
      semester: 3,
      description: "Konsep dan implementasi jaringan komputer, termasuk topologi, protokol, dan keamanan jaringan.",
      skills: ["Computer Networks", "Networking", "Network Security"],
    },
    {
      name: "Islam dan IPTEKS",
      category: "Other",
      semester: 4,
      description: "Mata kuliah yang membahas hubungan antara Islam dan ilmu pengetahuan serta teknologi.",
      skills: ["Ethics", "Religion", "Science and Technology"],
    },
    {
      name: "Keamanan dan Keselamatan Kerja",
      category: "Other",
      semester: 4,
      description: "Mata kuliah yang membahas prinsip-prinsip keselamatan dan keamanan kerja di lingkungan profesional.",
      skills: ["Work Safety", "Occupational Health"],
    },
    {
      name: "Basis Data",
      category: "Database",
      semester: 4,
      description: "Perancangan dan pengelolaan basis data untuk mendukung kebutuhan aplikasi.",
      skills: ["SQL", "MySQL", "ERD", "Database Design", "Oracle"],
    },
    {
      name: "Sistem Operasi",
      category: "Operating Systems",
      semester: 4,
      description: "Konsep dasar sistem operasi, termasuk manajemen proses, memori, dan file.",
      skills: ["Operating Systems", "Process Management", "Memory Management"],
    },
    {
      name: "Grafika Komputer",
      category: "Computer Graphics",
      semester: 4,
      description: "Dasar-dasar grafika komputer, termasuk representasi gambar danrendering",
      skills: ["Computer Graphics", "Rendering"],
    },
    {
      name: "Kecerdasan Buatan",
      category: "Artificial Intelligence",
      semester: 4,
      description: "Konsep dasar kecerdasan buatan dan penerapannya dalam penyelesaian masalah.",
      skills: ["AI", "Machine Learning"],
    },
    {
      name: "Struktur Data",
      category: "Programming",
      semester: 4,
      description: "Konsep dasar struktur data, termasuk array, linked list, stack, queue, dan tree.",
      skills: ["Data Structures", "Programming"],
    },
    {
      name: "Rekayasa Perangkat Lunak",
      category: "Software Engineering",
      semester: 4,
      description: "Konsep, proses, dan metode dalam pengembangan perangkat lunak secara sistematis.",
      skills: ["SDLC", "Software Engineering"],
    },
    {
      name: "Kewirausahaan Berbasis Teknologi",
      category: "Other",
      semester: 4,
      description: "Mata kuliah yang membahas konsep dan praktik kewirausahaan dalam bidang teknologi.",
      skills: ["Entrepreneurship", "Business Development"],
    },
    {
      name: "Pemrograman Web",
      category: "Web Development",
      semester: 5,
      description: "Pengembangan aplikasi berbasis web menggunakan teknologi frontend dan backend.",
      skills: ["HTML", "CSS", "JavaScript", "Web Development", "Laravel", "PHP", "Vue.js"],
    },
    {
      name: "Pemrograman Mobile",
      category: "Mobile Development",
      semester: 5,
      description: "Konsep dan pengembangan aplikasi untuk perangkat mobile.",
      skills: ["Mobile Development", "Flutter", "Dart"],
    },
    {
      name: "Pemrograman Fungsional",
      category: "Programming",
      semester: 5,
      description: "Konsep dan penerapan pemrograman fungsional dalam pengembangan perangkat lunak.",
      skills: ["Functional Programming", "Python"],
    },
    {
      name: "Internet of Things",
      category: "Software Engineering",
      semester: 5,
      description: "Mempelajari konsep dasar, arsitektur, dan implementasi jaringan perangkat keras serta sensor yang terhubung ke internet untuk pengumpulan dan pertukaran data secara real-time.",
      skills: ["Arduino", "Sensor & Actuators", "IoT Protocols"],
    },
    {
      name: "Metode Penelitian",
      category: "Other",
      semester: 5,
      description: "Membahas kaidah ilmiah, perumusan masalah, penyusunan hipotesis, teknik pengumpulan data, serta metode analisis statistik untuk keperluan penyusunan tugas akhir/skripsi.",
      skills: ["Academic Writing", "Research Methodology", "Literature Review"],
    },
    {
      name: "Rekayasa Kebutuhan",
      category: "UI/UX",
      semester: 6,
      description: "Mempelajari teknik elisitasi, analisis, spesifikasi, validasi, dan manajemen kebutuhan pengguna serta sistem untuk memandu pengembangan perangkat lunak.",
      skills: ["Requirements Elicitation", "User Stories", "SRS Documentation", "Use Case Modeling", "UML"],
    },
    {
      name: "Manajemen Proyek Perangkat Lunak",
      category: "Software Engineering",
      semester: 6,
      description: "Membahas perencanaan, pengorganisasian, estimasi biaya, pengelolaan risiko, serta metodologi pengembangan seperti Agile dan Waterfall dalam proyek TI.",
      skills: ["Agile/Scrum", "Project Planning", "Risk Management", "Cost Estimation", "Jira", "Project Libre"],
    },
    {
      name: "Desain Perangkat Lunak",
      category: "UI/UX",
      semester: 6,
      description: "Mempelajari prinsip-prinsip perancangan antarmuka (UI) dan pengalaman pengguna (UX), pembuatan wireframe, prototipe, serta arsitektur perangkat lunak.",
      skills: ["Use Case", "Software Requirement System (SRS)"],
    },
    {
      name: "Penalaran Komputer",
      category: "Artificial Intelligence",
      semester: 6,
      description: "Mempelajari dasar logika, sistem berbasis pengetahuan, inferensi, serta teknik penalaran otomatis yang digunakan dalam kecerdasan buatan.",
      skills: ["Knowledge Representation", "Automated Reasoning", "First-Order Logic", "Prolog/Rule-based Systems"],
    },
    {
      name: "Pemrosesan Bahasa Alami",
      category: "Artificial Intelligence",
      semester: 6,
      description: "Konsep dasar pemrosesan bahasa manusia menggunakan pendekatan komputasional.",
      skills: ["NLP", "Text Processing"],
    },
    {
      name: "Etika dan Profesi",
      category: "Other",
      semester: 7,
      description: "Mempelajari aspek etika, hukum TI, hak kekayaan intelektual (HKI), lisensi perangkat lunak, serta standar profesionalisme dan tanggung jawab sosial dalam bidang teknologi informasi.",
      skills: ["IT Law & Compliance", "Professional Ethics", "Intellectual Property", "Cyber Law"],
    },
    {
      name: "Penjaminan Kualitas Perangkat Lunak",
      category: "Software Engineering",
      semester: 7,
      description: "Membahas konsep, standar, metodologi pengujian, serta kriteria mutu untuk memastikan sistem perangkat lunak bebas cacat dan memenuhi spesifikasi kualitas yang ditentukan.",
      skills: ["Software Testing", "Quality Assurance (QA)", "Test Automation", "Bug Tracking", "Continuous Integration"],
    },
    {
      name: "Rekayasa Ulang Sistem",
      category: "Software Engineering",
      semester: 7,
      description: "Mempelajari teknik analisis, modifikasi, dan restrukturisasi sistem legasi (legacy system) untuk meningkatkan kinerja, pemeliharaan, serta keamanan tanpa mengubah fungsi utamanya.",
      skills: ["Reverse Engineering", "Legacy System Migration", "System Architecture"],
    },
    {
      name: "Rekayasa Interaksi",
      category: "UI/UX",
      semester: 7,
      description: "Fokus pada perancangan interaksi antara manusia dan komputer yang berpusat pada pengguna (human-centered design), evaluasi kebolehpakaian (usability), dan pembuatan prototipe interaktif.",
      skills: ["Human-Computer Interaction (HCI)", "Interactive Prototyping", "Usability Evaluation", "Information Architecture", "User Testing"],
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