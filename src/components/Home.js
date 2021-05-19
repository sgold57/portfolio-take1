import React from "react";
import HomePagePhoto from "../images/denver_hp.jpeg"

export default function Home(){
  return (
    <main className="bg-blue-700 min-h-screen">
      <section className="flex space-between ml-4s pt-20 pb-20 px-8">
        <div className="w-3/4">
          <img className="shadow-2xl" src={HomePagePhoto}></img>
        </div>
        <div className="inline-block max-w-full">
          <div className="flex flex-col bodyFont font-extrabold space-even text-5xl">
            <div className="mt-3 ml-3 text-red-700">
              SOFTWARE
            </div>
            <div className="ml-7 text-yellow-300">
              ENGINEER
            </div>
            <div className="mt-9 ml-4 text-red-700">
              PROBLEM
            </div>
            <div className="ml-7 text-yellow-300">
              SOLVER
            </div>
          </div>
        </div>
      </section>
    </main>
  )

}