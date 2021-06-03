import React from "react";
import HomePagePhoto from "../images/denver_hp_with_lines_bigger.png"

export default function Home(){
  return (
    <main className="flex bg-blue-700 min-h-screen min-w-screen">
      <section className="flex max-w-screen justify-start space-between ml-4 mt-32 border-8 border-red-600">
        <div className="border-solid border-5 border-pink-300 self-center">
          <img className="w-full" src={HomePagePhoto}></img>
        </div>
        <div className="inline my-48 px-24 border-solid border-8 border-yellow-600">
        </div> 
          {/* <div className="flex absolute flex-col bodyFontfont-extrabold space-even text-left  text-5xl md:text-6xl lg:text-7xl xl:text-8xl border-solid border-4 border-yellow-500">
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
      <div className= "-mx-96 mt-52 mb-80 px-8 border-solid border-8 border-yellow-600">
      
      </div>
    </main>
  )

}