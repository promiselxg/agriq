import Image from "next/image";

const Partners = () => {
  return (
    <>
      <div className="w-full h-[100px] mb-20 flex items-center">
        <div className="w-[1200px] mx-auto flex items-center gap-8 justify-center">
          <a href="https://www.theyoungagro.com/index.html">
            <Image
              src="/partners/the_young_agro.png"
              width={100}
              height={100}
              alt="the young agro"
            />
          </a>
          <a href="https://www.worldbank.org/en/home">
            <Image
              src="/partners/worldbank.svg"
              width={100}
              height={100}
              alt="the young agro"
              className="h-[80px] object-contain"
            />
          </a>
          <a href="https://www.ifad.org/en/">
            <Image
              src="/partners/ifad.svg"
              width={100}
              height={100}
              alt="the young agro"
              className="h-[80px]"
            />
          </a>
          <a href="https://ogunstate.gov.ng/">
            <Image
              src="/partners/ogsglogo.png"
              width={100}
              height={100}
              alt="Ogun State Government Logo"
              className="h-[80px]"
            />
          </a>
          <a href="https://www.syngentafoundation.org/">
            <Image
              src="/partners/SFSA.jpg"
              width={100}
              height={100}
              alt="Syngenta Foundation"
              className="h-[50px]"
            />
          </a>
          <a href="https://www.undp.org/">
            <Image
              src="/partners/undp-logo-blue.svg"
              width={100}
              height={100}
              alt="UNDP"
              className="h-[100px]"
            />
          </a>
          <a href="https://fadama.org.ng/">
            <Image
              src="/partners/fadama.png"
              width={100}
              height={100}
              alt="Fadama"
              className="h-[50px]"
            />
          </a>
          <a href="https://www.linkedin.com/company/dula-agro-services/about//">
            <Image
              src="/partners/dula_agro_services_logo.jpeg"
              width={100}
              height={100}
              alt="Dula"
              className="h-[50px]"
            />
          </a>
          <a href="https://www.iita.org/">
            <Image
              src="/partners/IITA-TAA-smallnew.png"
              width={100}
              height={100}
              alt="IITA"
              className="h-[50px]"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Partners;
