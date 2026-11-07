import ProjectList, { type Project } from "@/components/ProjectList";

// TODO: Replace these with projects you have actually built.
// Each entry needs an accurate title, description, technologies, and a working link.
const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio site built with the Next.js App Router, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/your-username/wdd430-portfolio",
  },
  {
    title: "Replace With Your Second Project",
    description: "Describe a project you have built and what it does.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/your-username/your-second-project",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here are
          some of my recent projects.
        </p>
      </section>
      <section aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="mb-6 text-2xl font-bold text-gray-900"
        >
          Projects
        </h2>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
