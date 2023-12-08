import Image from "next/image";
import Link from "next/link";
import Partners from "../partners/partners";

const SectionAboutUs = () => {
  return (
    <>
      <div className=" w-full flex relative bg-[#e8e8e8]">
        <div className="w-[1200px]  mx-auto py-24  flex justify-between gap-7  items-center">
          <div className="right flex w-2/3 flex-col">
            <div className="heading">
              <h1 className="text-2xl font-bold text-[#f04c23] uppercase">
                Welcome
              </h1>
              <p className="my-5 text-[#777] text-[16px]">
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
            </div>

            <ul className="my-5">
              <li>
                <Link
                  href=""
                  className="w-fit btn-dark custom-btn p-3 relative bg-[#f04c23]"
                >
                  <span className="relative z-10">Learn More</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="left flex w-1/2 gap-3"></div>
        </div>
      </div>
      {/* <Partners /> */}
    </>
  );
};

export default SectionAboutUs;
