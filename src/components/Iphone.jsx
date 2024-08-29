import React, { useEffect } from "react";
import Catalog from "./Catalog";

function Iphone() {
  useEffect(() => {
    const iphoneScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scaleValue = 1 + (scrollY / maxScroll) * 2;

      const iphone = document.getElementById("iphone");
      if (iphone) {
        iphone.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;

        const fadeStart = 0.6 * maxScroll; // 60% of the scroll
        const fadeEnd = 0.9 * maxScroll; // 90% of the scroll

        if (scrollY > fadeStart) {
          const opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
          iphone.style.opacity = opacity;
        } else {
          iphone.style.opacity = 1;
        }
      }
    };

    document.addEventListener("scroll", iphoneScroll);

    return () => {
      document.removeEventListener("scroll", iphoneScroll);
    };
  }, []);

  return (
    <div
      id="iphone"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-100 w-[300px] h-[600px] border-[5px] border-[#e4d6ff] rounded-[45px] flex items-center justify-center transition-all duration-100 ease z-[1]"
    >
      <div
        id="screen"
        className="w-full h-full light:bg-white dark:bg-black rounded-[40px] border-[11px] border-black overflow-hidden relative"
      >
        <div
          id="dynamic-island"
          className="absolute top-[9px] left-1/2 transform -translate-x-1/2 w-[64px] h-[20px] bg-black rounded-[30px] z-[1]"
        ></div>
        <div
          id="screen-content"
          className="w-full h-full flex items-center justify-center"
        >
          <Catalog />
        </div>
      </div>
      <span
        id="action"
        className="absolute w-[4px] h-[24px] bg-[#c6b8e3] top-[16%] left-[-5px] transform -translate-x-full rounded-l-[3px]"
      ></span>
      <span
        id="volume-up"
        className="absolute w-[4px] h-[45px] bg-[#c6b8e3] top-[calc(20%+24px)] left-[-5px] transform -translate-x-full rounded-l-[3px]"
      ></span>
      <span
        id="volume-down"
        className="absolute w-[4px] h-[45px] bg-[#c6b8e3] top-[calc(23%+60px)] left-[-5px] transform -translate-x-full rounded-l-[3px]"
      ></span>
      <span
        id="lock-unlock"
        className="absolute w-[4px] h-[75px] bg-[#c6b8e3] top-[25%] right-[-5px] transform translate-x-full rounded-r-[3px]"
      ></span>
    </div>
  );
}

export default Iphone;
