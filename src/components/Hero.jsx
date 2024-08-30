import React, { useEffect, useRef } from "react";
import Iphone from "./Iphone";

function Hero() {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const progressCircularRef = useRef(null);

    useEffect(() => {
        const h1TagOpacityOnScroll = () => {
            const heroHeight = heroRef.current.getBoundingClientRect().height;
            const scrollPosition = window.scrollY;
            const scrollPercentage = Math.min(scrollPosition / heroHeight, 0.85);
            const opacity = 0.15 + scrollPercentage * (1 - 0.15);

            if (titleRef.current) {
                titleRef.current.style.opacity = opacity;
            }
        };

        const scrollCircularProgress = () => {
            if (heroRef.current && progressCircularRef.current) {
                const sectionHeight = heroRef.current.offsetHeight;
                const winScroll = window.scrollY || document.documentElement.scrollTop;
                const scrolled = (winScroll / (sectionHeight - window.innerHeight)) * 100; // Calculate percentage

                progressCircularRef.current.style.background = 
                    `conic-gradient(rgb(249 115 22) ${scrolled}%, rgba(255, 255, 255, 0.15) ${scrolled}% 100%)`;
            }
        };

        window.addEventListener("scroll", h1TagOpacityOnScroll);
        window.addEventListener("scroll", scrollCircularProgress);

        // Clean up the event listeners on component unmount
        return () => {
            window.removeEventListener("scroll", h1TagOpacityOnScroll);
            window.removeEventListener("scroll", scrollCircularProgress);
        };
    }, []);

    return (
        <div ref={heroRef} className="relative h-[500vh]">
            <h1
                ref={titleRef}
                className="fixed w-full left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] text-8xl text-center font-bold dark:text-white opacity-15"
            >
                A one-stop place for you.<br />Just click it & open it.
            </h1>
            <Iphone />
            <a
                href="http://"
                className="px-3 py-2 fixed mx-auto bottom-[25%] left-2/4 translate-x-[-50%] w-fit flex items-center justify-center text-xs text-white font-medium text-center bg-indigo-500 rounded-lg cursor-pointer"
                aria-label="Get Started"
            >
                Get Started
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[14px] ml-1"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                </svg>
            </a>
            <div 
                ref={progressCircularRef}
                className="progress-circular fixed bottom-[32px] right-[32px] w-6 h-6 rounded-full bg-[rgba(255,255,255,0.15)] flex items-center justify-center transition-colors duration-100 ease-out overflow-hidden"
            >
                <div className="progress-circular-fill w-4 h-4 rounded-full bg-white dark:bg-black"></div>
            </div>
        </div>
    );
}

export default Hero;
