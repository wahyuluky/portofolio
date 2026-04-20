import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const timeline = [
  {
    year: "2022",
    title: "Informatika - Universitas Muhammadiyah Malang",
    desc: "Memulai perjalanan akademik di bidang Informatika dengan fokus pada pemrograman dan pengembangan sistem.",
  },
  {
    year: "2023-2025",
    title: "Staff Desain — Developer Community (DevCom)",
    desc: "Berperan sebagai staff desain dengan fokus pada pembuatan konten visual, UI/UX untuk kebutuhan internal komunitas, serta desain media publikasi kegiatan pengembangan teknologi dan pemrograman.",
  },
  {
    year: "2024-2025",
    title: "Bendahara Umum — Kaliber",
    desc: "Bertanggung jawab atas pengelolaan keuangan organisasi, penyusunan laporan kas, perencanaan anggaran kegiatan, serta memastikan transparansi dan akuntabilitas keuangan. Terlibat aktif dalam pengambilan keputusan strategis organisasi.",
  },
  {
    year: "2025",
    title: "Internship - Full Stack Web Developer",
    desc: "Melaksanakan program magang di PT Esa Solusi Mandiri (ESACO) sebagai UI/UX Design dan Full Stack Web Developer. Bertanggung jawab dalam pengembangan aplikasi web, implementasi fitur frontend dan backend, integrasi database, serta perbaikan dan optimalisasi sistem sesuai kebutuhan perusahaan.",
  },
];

const certificates = [
  {
    title: "Pemrograman Web",
    issuer: "Dicoding",
    year: "2024",
    link: "https://drive.google.com/file/d/1scxcNonO9kiG5pprR73jZpcj4YdT7uIz/view?usp=sharing",
  },
  {
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    year: "2024",
    link: "https://drive.google.com/file/d/1qoj2LPQttNsT-q7dEv6exXB64dkwjABO/view?usp=sharing",
  },
  {
    title: "Java",
    issuer: "Oracle Academy",
    year: "2023",
    link: "https://drive.google.com/file/d/1jkLa8Uh_3PFk-ngN0GjDbt6UB6zvwoOP/view?usp=sharing",
  },
  {
    title: "FIGMA FOR UI/UX DESIGN",
    issuer: "Myskill",
    year: "2024",
    link: "https://drive.google.com/file/d/1rhE_twJbcvxYU9Nnkicr5epzhadd0sgf/view?usp=sharing",
  },
  {
    title: "USER INTERFACE DESIGN",
    issuer: "Myskill",
    year: "2025",
    link: "https://drive.google.com/file/d/1jp09xaqEmj6tyLmU5_oOaWAOKo3Qn7VV/view?usp=sharing",
  },
  {
    title: "UI-UX RESEARCH AND DESIGN",
    issuer: "Myskill",
    year: "2025",
    link: "https://drive.google.com/file/d/1WakjR15tDT04WUThY5RCOMwp8pKDJgtN/view?usp=sharing",
  },
  {
    title: "USER EXPERIENCE DESIGN",
    issuer: "Myskill",
    year: "2025",
    link: "https://drive.google.com/file/d/1TB5wboXzbSFbO_FZAEwgq5QqFr1YMMDc/view?usp=sharing",
  },
  {
    title: "USER EXPERIENCE RESEARCH",
    issuer: "Myskill",
    year: "2025",
    link: "https://drive.google.com/file/d/1Y2fFYHrj3pMezQ0QZeNLIk4zCrOGRilB/view?usp=sharing",
  },
  {
    title: "USER EXPERIENCE WRITING",
    issuer: "Myskill",
    year: "2025",
    link: "https://drive.google.com/file/d/1vazId273SrQtBWzaxlIlJMq2MTEy7UL_/view?usp=sharing",
  },
];

export default function About() {
  return (
    <section
      id="tentang"
      className="relative min-h-screen bg-zinc-900 from-[#050b1e] via-[#020617] to-black text-white overflow-hidden py-10"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* ABOUT ME */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Saya adalah mahasiswa Informatika semester 8 yang memiliki minat pada
            pengembangan website dan aplikasi, serta desain antarmuka
            digital. Selama perkuliahan, saya terlibat dalam berbagai
            proyek akademik, organisasi, dan pengalaman magang sebagai
            Full Stack Web Developer.
          </p>

          <p className="text-gray-400 mt-4">
            Saya fokus pada pengembangan sistem yang terstruktur,
            fungsional, dan memiliki pengalaman pengguna yang baik
            dengan pendekatan modern dan teknologi terkini.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-linear-to-b from-emerald-400 via-emerald-400 to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Glow Dot */}
                <div className="absolute left-2 top-2 w-6 h-6 rounded-full bg-emerald-400 shadow-[0_0_25px_#22d3ee] hover:scale-125 transition" />

                {/* Content */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-emerald-400/40 transition">
                  <span className="font-mono text-sm text-emerald-400">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold mt-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Abstract Shape */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 w-72 h-72 border border-emerald-500/10 rotate-45 rounded-3xl" />
      </div>

      {/* Tech Stack */}
        <div>
          <h2 className="text-3xl font-semibold mt-32 mb-10 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Tech Stack
          </h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            {[
              {
                title: "Framework",
                tech: ["React", "Tailwind CSS", "Bootstrap", "Flutter", "Laravel", "Vue", "Next"],
              },
              {
                title: "Database",
                tech: ["Oracle", "Mysql", "Firebase Firestore"],
              },
              {
                title: "Tools",
                tech: ["Git", "GitHub", "Vercel", "Jira", "ProjectLibre", "Visual Studio Code"],
              },
              {
                title: "Language",
                tech: ["HTML", "CSS", "Java", "Python", "Javascript", "C"],
              },
              {
                title: "Design",
                tech: ["Figma", "Canva"],
              },
            ].map((stack, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-emerald-400/50 transition"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {stack.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATES – FUTURISTIC */}
        <div className="max-w-6xl mx-auto pb-10 mt-32" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <h2 className="text-3xl font-semibold mb-12 text-white">
            Certificates
          </h2>

          <div className="grid sm:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="relative group rounded-2xl p-px
                bg-linear-to-br from-green-400/40 to-emerald-400/40"
              >
                <div
                  className="rounded-2xl p-6 bg-[#050b18]/80 backdrop-blur-xl
                  border border-white/10 h-full
                  transition group-hover:shadow-[0_0_40px_rgba(52,211,153,0.35)]"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-zinc-400 text-sm mb-4">
                    {cert.issuer} •{" "}
                    <span className="font-mono text-emerald-400">
                      {cert.year}
                    </span>
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400
                    hover:text-emerald-400 transition text-sm font-semibold"
                  >
                    View Certificate <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      
    </section>
  );
}
