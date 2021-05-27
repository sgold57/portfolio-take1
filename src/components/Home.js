import React from "react";
import HomePagePhoto from "../images/denver_hp.jpeg"

export default function Home(){
  return (
    <main className="bg-blue-700 min-h-screen">
      <section className="flex space-between ml-4s pt-20 pb-20 px-8">
        <div className="w-1/2">
          <img className="shadow-xl" src={HomePagePhoto}></img>
        </div>
        <div className="inline-block w-1/2 max-w-full">
          <div className="flex flex-col bodyFontfont-extrabold space-even text-left  text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <div className="mt-3 lg:mt-9 ml-3 text-yellow-200 text-left">
              SOFTWARE
            </div>
            <div className="ml-3 text-left text-red-500">
              ENGINEER
            </div>
            <div className="mt-9 lg:mt-12 ml-2 text-left text-yellow-200">
              90'S RAP
            </div>
            <div className="ml-3 text-left text-red-500">
              CONNOISSEUR
            </div>

          </div>
        </div>
      </section>
    </main>
  )

}