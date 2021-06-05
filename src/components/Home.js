import React from "react";
import HomePagePhoto from "../images/denver_hp_with_lines_bigger.png"

export default function Home(){
  return (
    <main className="relative bg-blue-700 min-h-screen w-screen mt-20 lg:mt-24 xl:mt-28">
      <section className="relative flex max-w-screen top-12 py-24">
        <img className=" self-center w-full" src={HomePagePhoto}></img>
        <div className="absolute flex-col content-evenly inset-y-0 left-1/2 w-1/2 homeLabelChildPadding text-lg sm:text-2xl lg:text-5xl">
          <div className="mt-2 sm:mt-10 lg:mt-16 pt-12 pb-4 px-5 sm:pl-5 border-gray-600 bodyFont font-extrabold ">
            <span className="text-yellow-200">SOFTWARE</span>
            <span className="text-red-500 m-2 lg:m-6">ENGINEER</span>
          </div>
          <div className="lg:mt-16 py-7 px-5 sm:pl-5 border-yellow-600 bodyFont font-extrabold">
            <span className="text-red-500">PROBLEM</span>
            <span className="text-yellow-200 m-3 lg:m-6">SOLVER</span>
          </div> 
          <div className="lg:mt-28 pt-16 pb-7 sm:pl-5 bodyFont font-extrabold">
            <span className="text-yellow-200 lg:text-4xl">90'S RAP</span>
            <span className="text-red-500 sm:ml-2">ENTHUSIAST</span> 
          </div> 
          <div className="lg:mt-16 pt-6 sm:pl-5 bodyFont font-extrabold border-solid border-2">
            <span className="text-red-500">BASKETBALL</span>
            <span className="text-yellow-200 pl-2 lg:m-6">JUNKIE</span> 
          </div> 
          
        </div>
          {/* <div className="flex absolute flex-col bodyFont font-extrabold space-even text-left  text-5xl md:text-6xl lg:text-7xl xl:text-8xl border-solid border-4 border-yellow-500">
            <div className="mt-2 lg:mt-9 ml-1 text-yellow-200 text-left">
              SOFTWARE
            </div>
            <div className="ml-1 text-left text-red-500">
              ENGINEER
            </div>
            <div className="my-8 lg:mt-12 ml-2 text-left text-yellow-200">
              90'S RAP
            </div>
            <div className="ml-1 text-left text-red-500">
              CONNOISSEUR
            </div>

          </div> */} 
      </section>
    </main>
  )

}