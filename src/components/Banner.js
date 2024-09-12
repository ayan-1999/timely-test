import React from "react";
import bannerimg from "../assets/bannerimg.webp";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Banner = () => {
 useGSAP(()=>{
  gsap.from(".animate", {
    translateY:-40,
    duration:0.6,
    delay:0.6,
    opacity:0,
  })
 })
  return (
    <div className="w-full h-[calc(100vh-76px)] relative ">
      <div className="w-full h-full z-1 absolute bg-[#0008] flex flex-col justify-center items-center bg-cover">
        <h1 className="animate text-[#ecdedb] text-5xl font-bold pb-5 text-center">Bob's Beauty Bar</h1>
        <p className="animate text-[#ecdedb] text-[16px] font-thin pb-16 max-w-[480px] text-center">
          BoB's Beauty Bar offers expert Nail Technician, Makeup Services, and
          Braid Styles in the vibrant city of Arera Colony.
        </p>
        <button className="w-full sm:w-auto bg-[#cb9eb2] hover:bg-[#784d60] px-8 py-4 rounded-lg text-lg text-[#4f4949] hover:text-white border-black border-[1px] fixed bottom-3 sm:static z-10">
          Book Appointment
        </button>
      </div>
      <img src={bannerimg} alt="" className=" w-full -z-1 h-full object-cover" />
    </div>
  );
};
export default Banner;
