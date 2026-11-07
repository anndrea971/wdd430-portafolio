interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
