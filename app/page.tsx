import ProjectList, { type Project } from "@/components/ProjectList";

const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio site built with the Next.js App Router, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://anndrea971.github.io/wdd430-portafolio/",
  },
  {
    title: "SLP Toolkit",
    description: "SLP Toolkit is a web application that provides tools and resources for speech-language pathologists (SLPs) to help them in their daily work.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://anndrea971.github.io/SLP-Toolkit/",
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
