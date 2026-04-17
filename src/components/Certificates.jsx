const certificates = [
  {
    id: 1,
    title: "Belajar Membuat Aplikasi Web",
    issuer: "Dicoding",
    year: "2024",
    image: "/assets/certificates/dicoding-web.webp",
    link: "https://www.dicoding.com/certificates/xxxxx",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    issuer: "Coursera",
    year: "2023",
    image: "/assets/certificates/uiux.webp",
    link: "https://coursera.org/verify/xxxxx",
  },
];

export default function Certificates() {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Certifications
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-zinc-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-emerald-500/10 transition"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="font-semibold">{cert.title}</h3>
              <p className="text-sm text-zinc-400">
                {cert.issuer} • {cert.year}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-emerald-400 hover:underline text-sm"
              >
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
