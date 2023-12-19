import Hero from "@/components/Hero/Hero";
import SectionAboutUs from "./aboutUs/section-about";
import SectionServices from "./ourServices/section-services";
import CompanyStats from "./companyStats/company-stats";
import SectionBlog from "./news/news";
import Projects from "./projects/projects";
import Team from "./team/team";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Hero />
        <SectionAboutUs />
        <SectionServices />
        <CompanyStats />
        <SectionBlog />
        <Projects />
        <Team />
      </main>
    </>
  );
}
