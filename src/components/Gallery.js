import React, { useEffect } from "react";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image6.webp";
import image7 from "../assets/image7.webp";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  useGSAP(() => {
    gsap.from(".animate1", {
      y: 50,
      opacity: 0,
      duration:0.6,
      stagger:0.3,
      scrollTrigger: {
        trigger: ".galleryContainer",
        start: "top 40%",
      },
    });
  });

  return (
    <div className="galleryContainer my-20 px-6 sm:px-[96px]">
      <div className="mb-12 px-5">
        <h1 className="text-5xl font-semibold text-center text-[#636363]">
          Gallery
        </h1>
        <p className="text-center py-4 text-[#636363]">
          Get a glimpse of our services with our inspiring gallery of images.
        </p>
      </div>
      <div className="mb-10 columns-2 lg:columns-4 gap-4">
        <img src={image2} alt="image2" className="animate1 mb-4 rounded-xl" />
        <img src={image3} alt="image3" className="animate1 mb-4 rounded-xl" />
        <img src={image4} alt="image4" className="animate1 mb-4 rounded-xl" />
        <img src={image5} alt="image5" className="animate1 mb-4 rounded-xl" />
        <img src={image6} alt="image6" className="animate1 mb-4 rounded-xl" />
        <img src={image7} alt="image7" className="animate1 mb-4 rounded-xl" />
      </div>
    </div>
  );
};

export default Gallery;
