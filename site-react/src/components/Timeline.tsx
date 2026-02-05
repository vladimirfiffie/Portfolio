import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-sm md:text-base lg:text-lg font-normal text-neutral-800 dark:text-neutral-200">
            Built two major projects: <strong>Pao&apos;er Ship</strong>, a
            Pygame Battleship for Raspberry Pi, and{" "}
            <strong>Lion&apos;s Den Cinema</strong>, a booking platform where I
            designed the web UI.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ProjectCard
              title="Pao'er Ship"
              color="from-blue-500/20 to-cyan-500/20"
              borderColor="border-blue-500/50"
            />
            <ProjectCard
              title="Lion's Den Cinema"
              color="from-purple-500/20 to-pink-500/20"
              borderColor="border-purple-500/50"
            />
            <ProjectCard
              title="React & TypeScript"
              color="from-emerald-500/20 to-teal-500/20"
              borderColor="border-emerald-500/50"
            />
            <ProjectCard
              title="Full Stack Dev"
              color="from-orange-500/20 to-red-500/20"
              borderColor="border-orange-500/50"
            />
          </div>
        </div>
      ),
    },

    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-sm md:text-base lg:text-lg font-normal text-neutral-800 dark:text-neutral-200">
            Graduated and focused on building skills in React, animations, and
            full-stack development.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ProjectCard
              title="Portfolio"
              color="from-blue-500/20 to-indigo-500/20"
              borderColor="border-blue-500/50"
            />
            <ProjectCard
              title="Framer Motion"
              color="from-cyan-500/20 to-sky-500/20"
              borderColor="border-cyan-500/50"
            />
            <ProjectCard
              title="Learning Projects"
              color="from-violet-500/20 to-purple-500/20"
              borderColor="border-violet-500/50"
            />
            <ProjectCard
              title="Continuous Learning"
              color="from-pink-500/20 to-rose-500/20"
              borderColor="border-pink-500/50"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div>
          <p className="mb-8 text-sm md:text-base lg:text-lg font-normal text-neutral-800 dark:text-neutral-200">
            Launched my portfolio and started working on a full-featured
            ecommerce website. Continuing to explore scalable applications,
            React patterns, and UX design.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ProjectCard
              title="Portfolio"
              color="from-blue-500/20 to-indigo-500/20"
              borderColor="border-blue-500/50"
            />
            <ProjectCard
              title="Ecommerce Website (In Progress)"
              color="from-violet-500/20 to-purple-500/20"
              borderColor="border-violet-500/50"
            />
            <ProjectCard
              title="Framer Motion"
              color="from-cyan-500/20 to-sky-500/20"
              borderColor="border-cyan-500/50"
            />
            <ProjectCard
              title="Continuous Learning"
              color="from-pink-500/20 to-rose-500/20"
              borderColor="border-pink-500/50"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Next Steps",
      content: (
        <div>
          <p className="mb-4 text-sm md:text-base lg:text-lg font-normal text-neutral-800 dark:text-neutral-200">
            Building scalable applications with modern technologies.
          </p>
          <ul className="mb-8 space-y-2">
            {[
              "Full-featured ecommerce website",
              "Landing page for SaaS",
              "Advanced React patterns",
              "Compelling UX animations",
              "Scalable deployments",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <ProjectCard
              title="Backend Dev"
              color="from-green-500/20 to-emerald-500/20"
              borderColor="border-green-500/50"
            />
            <ProjectCard
              title="Databases"
              color="from-yellow-500/20 to-amber-500/20"
              borderColor="border-yellow-500/50"
            />
            <ProjectCard
              title="API Design"
              color="from-red-500/20 to-orange-500/20"
              borderColor="border-red-500/50"
            />
            <ProjectCard
              title="Growth"
              color="from-fuchsia-500/20 to-purple-500/20"
              borderColor="border-fuchsia-500/50"
            />
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}

// Small helper component for the grid boxes
function ProjectCard({
  title,
  color,
  borderColor,
}: {
  title: string;
  color: string;
  borderColor: string;
}) {
  return (
    <div
      className={`h-20 md:h-44 lg:h-60 rounded-lg bg-gradient-to-br ${color} border ${borderColor} flex items-center justify-center`}
    >
      <span className="text-xs md:text-sm text-neutral-800 dark:text-white font-semibold text-center px-2">
        {title}
      </span>
    </div>
  );
}
