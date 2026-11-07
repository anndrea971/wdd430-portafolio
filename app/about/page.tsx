import type { Metadata } from "next";
import SkillCard from "@/components/SkillCard";

export const metadata: Metadata = {
  title: "About | Your Name",
  description: "Background and technical skills.",
};

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">About Me</h1>
      <p className="mb-10 text-lg text-gray-700">
        This about page shares more information about my background and work.
      </p>

      <h2 className="mb-4 text-2xl font-semibold text-gray-900">
        Technical Skills
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        <SkillCard
          title="Front-End"
          skills={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]}
        />
        <SkillCard
          title="Full-Stack"
          skills={["Next.js", "TypeScript", "Node.js", "REST APIs"]}
        />
        <SkillCard
          title="Tools"
          skills={["Git", "GitHub", "VS Code", "Vercel"]}
        />
      </div>
    </main>
  );
}
