import React from "react";

const Emergency = () => {
  return (
    <div>
      <div className="w-4/4 bg-[#E3FFFD] mt-24 flex">
        <div className="w-2/4 h-96  flex flex-col pt-10">
          <p className=" text-em-green text-5xl pb-3 text-center text-right pr-10">
            "Guardians of the Streets,{" "}
          </p>
          <p className=" text-em-green text-5xl text-center text-right pl-20">
            {" "}
            Saving Lives, Siren by Siren."
          </p>
          <div className="pt-4 flex flex-col justify-end items-center">
            <div className="text-center">
              <p className="emergency text-blue-900 pl-28 text-2xl pb-0">
                FOR EMERGENCY
              </p>
              <img
                className="h-60"
                src="./Emergency/emergency-1.png"
                alt="emergnecy"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end ">
          <img
            className="ambualance h-96"
            src="./Emergency/emergency-2.png"
            alt="ambulance"
          />
        </div>
      </div>
      <div className="bg-[#000000] h-24 border border-black"></div>
    </div>
  );
};

export default Emergency;
