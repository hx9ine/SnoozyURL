import React from "react";
import Iphone from "./Iphone";

function Hero() {
    return (
        <>
        <h1 className="fixed w-full left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] text-8xl text-center font-bold dark:text-white">A one-stop place for you.<br></br>Just click it & open it.</h1>
        <Iphone></Iphone>
        <a href="http://" className="px-3 py-2 fixed mx-auto bottom-[25%] left-2/4 translate-x-[-50%] w-fit flex items-center justify-center text-xs text-white font-medium text-center bg-indigo-500 rounded-lg z-0 cursor-pointer">
        Get Started
        <svg  xmlns="http://www.w3.org/2000/svg" className="w-[14px] ml-1"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
        </a>
        </>
    );
}

export default Hero;