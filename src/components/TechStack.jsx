const techStack = [
  {
    title: "Frontend",
    color: "cyan",
    tools: ["HTML", "CSS", "JavaScript", "React JS", "Next JS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    color: "emerald",
    tools: ["Laravel", "Node JS"],
  },
  {
    title: "Mobile Development",
    color: "purple",
    tools: ["Flutter"],
  },
  {
    title: "Database & Services",
    color: "sky",
    tools: ["MySQL", "Firebase"],
  },
  {
    title: "Design & UI/UX",
    color: "pink",
    tools: ["Figma", "Canva"],
  },
  {
    title: "Tools & Workflow",
    color: "amber",
    tools: ["Git", "GitHub", "VS Code"],
  },
];

const glowColor = {
  cyan: "hover:shadow-cyan-400/40 border-cyan-400/30 text-cyan-300",
  emerald: "hover:shadow-emerald-400/40 border-emerald-400/30 text-emerald-300",
  purple: "hover:shadow-purple-400/40 border-purple-400/30 text-purple-300",
  sky: "hover:shadow-sky-400/40 border-sky-400/30 text-sky-300",
  pink: "hover:shadow-pink-400/40 border-pink-400/30 text-pink-300",
  amber: "hover:shadow-amber-400/40 border-amber-400/30 text-amber-300",
};

export default function TechStack() {
  return (
    <section className="mt-32" id="techstack">
      <h2 className="text-4xl font-bold mb-4 text-white">
        Tech <span className="text-emerald-400">Stack</span>
      </h2>

      <p className="max-w-2xl text-zinc-400 mb-14">
        Teknologi dan tools yang saya gunakan selama perkuliahan dan pengalaman magang
        dalam pengembangan aplikasi, website, serta desain antarmuka.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {techStack.map((stack, index) => (
          <div
            key={index}
            className={`group bg-white/5 backdrop-blur-lg border rounded-xl p-6 transition-all duration-300 
            hover:-translate-y-1 hover:shadow-xl ${glowColor[stack.color]}`}
          >
            <h3 className="text-xl font-semibold mb-4 tracking-wide">
              {stack.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {stack.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-black/30 border border-white/10 
                  text-zinc-200 hover:text-white hover:border-white/30 transition"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
