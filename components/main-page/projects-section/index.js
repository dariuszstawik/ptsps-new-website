import ProjectCard from "../../global-components/project-card";
import SectionTitle from "../../global-components/section-title";

export default function ProjectsSection() {
  return (
    <section className="pb-28">
      <SectionTitle>Ostatnie projekty</SectionTitle>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
