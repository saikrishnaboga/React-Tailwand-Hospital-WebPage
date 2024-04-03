import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
        <div className="wcu-treatments-section flex pr-12">
          <div className="icon-text-container pt-8">
            <img className="h-8" src="./why-choose-us/noun-patient.png" />
            <p className="text-white text-center">
              Treated Patient <br /> 1{" "}
            </p>
          </div>
          <div className="icon-text-container pt-8">
            <img className="h-8" src="./why-choose-us/noun-angiography.png" />
            <p className="text-white text-center">
              Angiography <br /> 100{" "}
            </p>
          </div>
          <div className="icon-text-container pt-8">
            <img className="h-8" src="./why-choose-us/noun-heart-surgery.png" />
            <p className="text-white text-center">
              Heart Surgery <br /> 26500
            </p>
          </div>
          <div className="icon-text-container pt-8">
            <img className="h-8" src="./why-choose-us/noun-top-rating.png" />
            <p className="text-white text-center">
              {" "}
              Success Rate <br /> 99.83
            </p>
          </div>
        </div>
        <div class="flex">
          <div className="wcu-text-container flex-col p-8">
            <h1 class="text-3xl font-bold mb-4 ">Why Choose Us</h1>
            <p class="text-lg leading-relaxed mb-8">
              <span className="text-light-green text-4xl font-bold">
                In Sickness and Health, <br /> We're Here for You.{" "}
              </span>{" "}
              <br />
              To operate as a world-class heart hospital, we incorporate <br />{" "}
              the latest technological advances and ethical practices to provide
              quality heart care at a reasonable cost.
            </p>
            <ul class="list-disc space-y-2 text-lg list-none w-20 ">
              <li className="border border-light-green rounded-full border-2 font-bold w-40 text-center h-10 pt-2 mt-2.5">
                Expert Care
              </li>
              <li className="border border-light-green rounded-full border-2 font-bold w-40 text-center h-10 pt-2 mt-2.5">
                Personal Plans
              </li>
              <li className="border border-light-green rounded-full border-2 font-bold w-52 text-center h-10 pt-2 mt-2.5">
                Advanced Technology
              </li>
              <li className="border border-light-green rounded-full border-2 font-bold w-48 text-center h-10 pt-2">
                Support & Guidance
              </li>
              <li className="border border-light-green rounded-full border-2 font-bold w-44 text-center h-10 pt-2">

                Seamless Journey
              </li>
            </ul>
            <img
              className="h-20 object-right vector-image"
              src="./why-choose-us/Vector-img.png"
              alt="vector"
            />
          </div>
          <div className="flex w-7/12 doctors-images-container">
            <img
              className="h-96 mt-10"
              src="./why-choose-us/doctor.png"
              alt="doctor"
            />
            <img
              className="h-3/5 w-3/5  rounded-lg self-end"
              src="/why-choose-us/treatment.png"
            />
          </div>
        </div>
        <div className="specialists flex justify-end items-center text-center pr-36 text-3xl mt-8">
            <div className="text-white  text-xl ">
                <h1 className="text-3xl mt-2 h-6">Our Specialities</h1> <br/>
                <p className="text-2xl ">Honest opinions delivered by highly <br/> 
                experienced & dedicated Professionals.</p>
            </div>
        </div>
    </div>
  );
};

export default WhyChooseUs;
