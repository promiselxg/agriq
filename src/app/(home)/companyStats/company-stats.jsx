const CompanyStats = () => {
  return (
    <>
      <div className="w-full relative h-fit bg-[black] text-white stats">
        <div className="w-full mx-auto p-20">
          <div className="flex justify-center text-center items-center flex-col">
            <h1 className="text-[20px] opacity-70 font-semibold">
              Company stats
            </h1>
            <h1 className="text-white text-3xl font-extrabold my-3">
              Learn More About Us In Numbers
            </h1>
            <div className="grid grid-cols-3 gap-3 my-4">
              <div className="p-10">
                <h1 className="text-white text-5xl font-extrabold">2000+</h1>
                <h1 className="text-[20px] opacity-70 font-semibold">
                  Farmers Trained
                </h1>
              </div>
              <div className="p-10">
                <h1 className="text-white text-5xl font-extrabold">50+</h1>
                <h1 className="text-[20px] opacity-70 font-semibold">
                  Years of Field Experience
                </h1>
              </div>
              <div className="p-10">
                <h1 className="text-white text-5xl font-extrabold">20+</h1>
                <h1 className="text-[20px] opacity-70 font-semibold">
                  Years of Industry Experience
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyStats;
