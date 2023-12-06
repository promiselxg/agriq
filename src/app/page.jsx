import SectionAboutUs from "./(home)/aboutUs/section-about";
import CompanyStats from "./(home)/companyStats/company-stats";
import SectionBlog from "./(home)/news/news";
import SectionServices from "./(home)/ourServices/section-services";
import Hero from "./_components/Hero/Hero";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Hero />
        <SectionAboutUs />
        <SectionServices />
        <CompanyStats />
        <SectionBlog />
      </main>
    </>
  );
}
