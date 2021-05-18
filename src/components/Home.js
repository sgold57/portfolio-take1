import React from "react";
import HomePagePhoto from "../images/denver_hp.jpg"

export default function Home(){
  return (
    <main className="bg-blue-700">
      <section className="relative flex justify-center min-h-screen pt-12 px-8">
        <div>
          <img src={HomePagePhoto}></img>
        </div>
      </section>
    </main>
  )

}