// import HeroImage from "/assets/hero-img.webp";
import HeroImage from "/assets/hero.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/laravel.png";
import Tools5 from "/assets/tools/vue.png";
import Tools6 from "/assets/tools/tailwind.png";
import Tools7 from "/assets/tools/bootstrap.png";
import Tools8 from "/assets/tools/js.png";
import Tools9 from "/assets/tools/nodejs.png";
import Tools10 from "/assets/tools/github.png";
import Tools11 from "/assets/tools/canva.png";
import Tools12 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Laravel",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Vue JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Company Profile",
    desk: "Website company profile yang dibangun untuk menampilkan informasi perusahaan secara profesional, dinamis, dan terkelola dengan baik.",
    tools: ["HTML", "CSS", "Javascript", "PHP", "Mysql"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "HW App",
    desk: "HW App adalah aplikasi pembelajaran Pramuka berbasis Flutter dengan Firebase Firestore yang menyediakan materi, latihan, dan informasi kepramukaan secara interaktif dan real-time.",
    tools: ["Flutter", "Firebase Firestore"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Travel",
    desk: "Desain web travel dibuat menggunakan Figma dengan tampilan modern, responsif, dan user-friendly untuk menampilkan informasi perjalanan secara menarik dan profesional.",
    tools: ["Figma"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Konten Instagram Devcom",
    desk: "Desain Instagram feed dan story dibuat menggunakan Figma dan Canva dengan visual konsisten, menarik, dan sesuai branding untuk meningkatkan engagement.",
    tools: ["Canva", "Figma"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "MindStudy App",
    desk: "MindStudy adalah aplikasi pembelajaran yang membantu pengguna belajar secara terstruktur, interaktif, dan tersinkronisasi secara real-time.",
    tools: ["Flutter", "Firebase Firestore"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Desain Acara Kaliber",
    desk: "Desain banner, ID card, sertifikat, dan konten Instagram untuk organisasi Kaliber dibuat dengan visual konsisten, profesional, dan mencerminkan identitas serta nilai organisasi.",
    tools: ["Canva", "Figma"],
    dad: "700",
  },
];

import Projects1 from "/assets/proyek/proyek1.webp";
import Projects2 from "/assets/proyek/proyek2.webp";
import Projects3 from "/assets/proyek/proyek3.webp";
import Projects4 from "/assets/proyek/proyek4.webp";
import Projects5 from "/assets/proyek/proyek5.webp";
import Projects6 from "/assets/proyek/proyek6.webp";

export const projects = [
  {
    id: 1,
    gambar: Projects1,
    title: "Company Profile",
    category: "web",
    description: "Website untuk menampilkan informasi perusahaan secara profesional, dinamis, dan terkelola dengan baik.",
    tech: ["HTML", "CSS", "Javascript", "PHP", "Mysql"],
    mediumUrl: "https://medium.com/@username/pramuka-app",
    projectUrl: "https://play.google.com/store/apps/details?id=app.pramuka",
  },
  {
    id: 2,
    gambar: Projects2,
    title: "HW App",
    category: "mobile",
    description: "Aplikasi pembelajaran Pramuka yang menyediakan materi, latihan, dan informasi kepramukaan secara interaktif",
    tech: ["Flutter", "Firebase Firestore"],
    mediumUrl: "https://medium.com/@username/pramuka-app",
    projectUrl: "https://play.google.com/store/apps/details?id=app.pramuka",
  },
  {
    id: 3,
    gambar: Projects3,
    title: "UI/UX Web Travel",
    category: "uiux",
    description: "Perancangan UI/UX Website travel dengan tampilan modern, responsif, dan user-friendly untuk menampilkan informasi perjalanan secara menarik dan profesional.",
    tech: ["Figma"],
    mediumUrl: "https://medium.com/@username/pramuka-app",
    projectUrl: "https://play.google.com/store/apps/details?id=app.pramuka",
  },
  {
    id: 4,
    gambar: Projects4,
    title: "Desain Konten Instagram",
    category: "design",
    description: "Desain konten Instagram untuk branding dan promosi organisasi Devcom",
    tech: ["Figma", "Canva"],
    mediumUrl: "https://medium.com/@username/pramuka-app",
    projectUrl: "https://play.google.com/store/apps/details?id=app.pramuka",
  },
  {
    id: 5,
    gambar: Projects5,
    title: "MindStudy App",
    category: "mobile",
    description: "Aplikasi pembelajaran yang membantu pengguna belajar secara terstruktur, interaktif, dan tersinkronisasi secara real-time.",
    tech: ["Flutter", "Firebase Firestore"],
    mediumUrl: "https://medium.com/@username/pramuka-app",
    projectUrl: "https://play.google.com/store/apps/details?id=app.pramuka",
  },
  {
    id: 6,
    gambar: Projects6,
    title: "Desain Konten Instagram",
    category: "design",
    description: "Desain konten Instagram untuk branding dan promosi organisasi Kaliber",
    tech: ["Figma", "Canva"],
    mediumUrl: "https://medium.com/@username/pramuka-app",
    projectUrl: "https://play.google.com/store/apps/details?id=app.pramuka",
  },
];


