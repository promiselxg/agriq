import Link from "next/link";

const SectionAboutUs = () => {
  return (
    <>
      <div className="w-full flex relative bg-[#e8e8e8]">
        <div className="md:w-[1200px]  mx-auto md:py-24 py-10 flex justify-between gap-7  items-center">
          <div className="flex w-[90%] md:w-full flex-col mx-auto md:mx-0">
            <div className="heading">
              <h1 className="text-2xl font-bold text-[#f04c23] uppercase">
                Welcome
              </h1>
              <p className="my-5 text-[#000] md:text-[16px] font-medium">
                AgriQ is at the forefront of the agricultural consulting
                industry. We offer advanced consulting services tailored to meet
                the needs of farmers, agribusinesses, and agricultural
                communities. Our wealth of experience distinguishes us as a
                consultancy firm. Our areas of expertise include tree crops,
                arable crops, livestock and fish farming. We are proud pioneers
                of Green House Tomato Production with Drip Irrigation in Ogun
                State. Additionally, we have delivered intelligence in
                agribusiness through AgriQ Learning Academy, increased rice
                yield by more than 400% using smart agriculture techniques, and
                enhanced cassava yield per hectare by more than 350% through
                smart agribusiness solutions.
              </p>
              <p className="my-5 md:text-[16px] text-[#000] font-medium">
                Our engagement with various public and private agencies, as well
                as international initiatives, has positioned AgriQ at an
                esteemed value above others. We understand the challenges faced
                by farmers and businesses, and we are here to provide
                comprehensive solutions that drive growth and prosperity. Our
                team of experienced researchers, and consultants work tirelessly
                to offer personalized advice, advanced technologies, and
                strategic planning that empower you to achieve your agricultural
                goals.
              </p>
              <p className="my-5 md:text-[16px] text-[#000] font-medium">
                As you navigate through our website, you will discover a
                treasure trove of experience, insights, and services designed to
                enhance agricultural productivity, optimize resources, and
                foster sustainable practices. At AgriQ, we pride ourselves on
                providing a holistic agricultural consulting experience.
              </p>
            </div>

            <ul className="my-5">
              <li>
                <Link
                  href="/about"
                  className="w-fit btn-dark custom-btn p-3 relative bg-[#f04c23]"
                >
                  <span className="relative z-10">Learn More</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="left flex w-1/2 gap-3"></div> */}
        </div>
      </div>
      {/* <Partners /> */}
    </>
  );
};

export default SectionAboutUs;
