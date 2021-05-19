import React from "react";
import HomePagePhoto from "../images/denver_hp.jpeg"

export default function Home(){
  return (
    <main className="bg-blue-700 min-h-screen">
      <section className="flex space-between mx-12 px-8 py-20 border-2 border-yellow-400">
        <div className=" w-1/2 border-2 border-pink-600">
          <img src={HomePagePhoto}></img>
        </div>
        <div className="absolute inline-block left-1/2 max-w-full">
          <div className="flex flex-col space-even text-3xl">
            <div>
              SOFTWARE ENGINEER
            </div>
            <div>
              PROBLEM SOLVER
            </div>
          </div>
        </div>
      </section>
    </main>
  )

}