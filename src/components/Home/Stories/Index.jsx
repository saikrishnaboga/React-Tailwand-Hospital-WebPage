import React from "react";

const Stories = () => {
  return (
    <div className="flex mb-4">
      <div className="bg-[#0095DA] p-3  flex flex-col  w-4/12 h-5/6">
        <div className="flex self-center pt-10 space-x-4 pb-20">
          <img
            className="h-72 flex self-start"
            src="./stories/storie-1.png"
            alt="storie-image"
          />
        </div>
        <div className="pb-9 p-2">
          <p className="text-white text-xl">Press and Media</p>
          <p className="text-white text-2xl">
            India's No.1 Multispecialty Care Hospital And <br />
            Champion Of Nurturing Hearts
          </p>
          <button className="bg-[#FFFFFF] text-black rounded-full p-2 pl-3 pr-3">
            Browse
          </button>
        </div>
      </div>
      <div className="bg-[#00ADED]  flex flex-col  w-4/12 h-5/6">
      <div className="pl-5 pb-0 pt-9">
          <p className="text-white text-xl">People at SFZ</p>
          <p className="text-white text-2xl">
                Heartfelt: Moments And Stories From Our real <br/>
                Life Heroes
          </p>
          <button className="bg-[#FFFFFF] text-black rounded-full p-2 pl-3 pr-3">
            Browse
          </button>
        </div>
        <div className="flex self-center">
          <img
            className="doctor-image flex self-start"
            src="./stories/storie-2.png"
            alt="storie-image"
          />
        </div>

      </div>
      <div className="bg-[#00A69C] p-3  flex flex-col  w-4/12 h-5/6">
        <div className="flex self-center pt-10 space-x-4 pb-20">
          <img
            className="h-72 flex self-start"
            src="./stories/storie-3.png"
            alt="storie-image"
          />
        </div>
        <div className="pb-9 p-2">
          <p className="text-white text-xl">Articles</p>
          <p className="text-white text-2xl">
            Empowering Hearts, understanding And <br />
            Preventing Aliments
          </p>
          <button className="bg-[#FFFFFF] text-black rounded-full p-2 pl-3 pr-3">
            Browse
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Stories;
