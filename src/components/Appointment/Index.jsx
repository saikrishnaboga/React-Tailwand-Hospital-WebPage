import React from "react";

const Appointment = () => {
  return (
    <div>
    <div className="appiontment-container flex">
      <div className="appiontment-text-container">
        <h1 class="Appiontment-title ">Heart Health Simplified</h1>
        <p className="text-xl">
          Download the Asian Heart Institute app and manage <br/> your heart health,
          anywhere, anytime.
        </p>
        <div className="mt-2">
          <button className="bg-[#E5F2EF] h-8 w-44 text-theme-blue text-base book-button rounded mr-6">
            Book An Appointment
          </button>  
          <button  class="bg-[#0057A6] h-8 w-44 text-white text-base book-button rounded">
            Emergency Help
          </button>
        </div>
      </div>
      <div className="images-big-container">
        <div className="imgs-container">
          <img className="app-images app-image-left image-bottom my-0.5" src="./AppointmentImages/mask-group.png" alt="mask-group" />
          <img className="app-images app-image-right " src="./AppointmentImages/office.png" alt="mask-group" />
        </div>
        <div className="imgs-container-2">
          <img className="app-images app-image-left-2" src="./AppointmentImages/award.png" alt="mask-group" />
          <img className="app-images app-image-right-2" src="./AppointmentImages/casual.png" alt="mask-group" />
        </div>
        <div className="imgs-container-3">
           <img className="app-images app-image-left-3" src="./AppointmentImages/akshay.png" alt="mask-group" />
           <img className="app-images app-image-right-3" src="./AppointmentImages/building.png" alt="mask-group" /> 
        </div>
      </div>
      <div className="msg-box-container" >
        <img className="h-20 ml-20 mb-20" src="./AppointmentImages/message-symbol.png" alt="message-box"/>
      </div>
    </div>
    <div className="flex location-appiontment-container">
        <button className="bg-[#0057A6] flex rounded-t p-2 mr-2 pt-4 h-8.5">
          <img className="h-5 ml-3 location-img" src="./AppointmentImages/mdi-location.png"/>
          <p className="text-white w-48 ml-0">Choose Hospital</p>
        </button>
        <button className="bg-[#0057A6] flex rounded-t p-2 h-10">
          <img className="h-5 ml-3 mt-2 location-img " src="./AppointmentImages/streamline-waiting-appointments-calendar.png"/>
          <p className="text-white w-48 ml-0 pb-2">Book an <br/> Appointment</p>
        </button>
    </div>
    </div>
  );
};

export default Appointment;
