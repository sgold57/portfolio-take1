import React from "react";
import HomePagePhoto from "../images/denver_hp_with_lines_bigger.png"



export default function Home({ getBballLink, bballLinks }){

  
  return (
    // mt-20 lg:mt-24 xl:mt-28
    // mob-s:bg-green-500 mob-m:bg-yellow-700 mob-l:bg-pink-200
    <main className="h-screen w-screen bg-blue-700 bg-cover bg-opacity-90 overflow-auto">
    
    {/* <main className="absolute top-16 sm:top-20 lg:top-24 xl:top-28 mb-36 max-h-screen w-screen bg-blue-700 bg-cover bg-opacity-90 border-4 border-solid border-red-500"> */}
      <div className="contentDiv max-h-screen pt-12 md:pt-24 pb-96 z-10 border-4 border-solid border-red-500">

        <section className="flex h-5/6 border-4 border-solid border-green-300">
          <img className="mt-10 opacity-90 border-4 border-solid border-red-500" src={HomePagePhoto} alt="Denver Graphic"></img>
          {/* lg:inset-y-72 */}
          <div className="border-4 border-solid border-yellow-400 absolute max-h-screen textDiv flex-col content-evenly lg:inset-y-36 md:mt-4 lg:mt-12 xl:mt-64 left-1/2 w-1/2 text-2xl md:text-4xl lg:text-4xl xl:text-5xl">
            <div className="flex-col lg:mr-5">
              <div className="flex justify-center md:justify-start lg:justify-end md:tracking-tighter bodyFont font-extrabold mt-20 lg:mt-1 xl:mt-4">
                <span className="imageRed text-opacity-80">SOFTWARE</span>
                <span className="rightText text-yellow-200 ml-3">ENGINEER</span>
              </div>
              <div className="secondTextDiv flex justify-center md:justify-start lg:justify-end bodyFont font-extrabold mt-1 md:mt-6 lg:mt-4">
                <span className="text-yellow-200">PROBLEM</span>
                <span className="rightText imageRed text-opacity-80 ml-3">SOLVER</span>
              </div> 
            </div>
            <div className="innerTextDiv flex-col tracking-tighter mt-7 sm:mt-16 md:mt-20 lg:mt-8 lg:mr-5 xl:mt-10 bodyFont font-extrabold">
              <div className="flex justify-center md:justify-start lg:justify-end md:tracking-tighter lg:tracking-normal bodyFont font-extrabold">
                <a href="https://open.spotify.com/playlist/6J6kPoch1Rg1ptd1IkxKD4?si=d958ea527d5a4130" target="_blank" rel="noreferrer">
                  <span className="imageRed hover:text-yellow-200 text-opacity-80">90'S RAP</span>
                  <span className="rightText text-yellow-200 ml-3">ENTHUSIAST</span> 
                </a>
              </div> 
              
              <div className="secondTextDiv flex justify-center md:justify-start lg:justify-end md:tracking-tighter lg:tracking-normal bodyFont font-extrabold mt-1 md:mt-6 lg:mt-4">
                <a href={getBballLink(bballLinks)}>
                  <span className="text-yellow-200">BASKETBALL</span>
                  <span className="rightText imageRed hover:text-yellow-200 text-opacity-80 ml-3">JUNKIE</span> 
                </a>
              </div> 
            </div>          
          </div>

        </section>
      </div>
    </main>
  )
 //lg:mr-5 ADD TO LINE 10
 //inset-y-8 lg:inset-y-1/2 lg:mt-10 left-1/2 w-1/2  ADD TO LINE 9
}







//OLD CSS WITH TWO DIV IDEA JUST COMING TO FRUITION
// export default function Home(){
//   return (
//     <main className="relative bg-blue-700 min-h-screen w-screen mt-20 lg:mt-24 xl:mt-28">
//       <section className="relative flex max-w-screen top-12 py-24">
//         <img className=" self-center w-full" src={HomePagePhoto}></img>
//         <div className="absolute flex-col content-evenly inset-y-0 left-1/2 w-1/2 homeLabelChildPadding text-lg sm:text-2xl lg:text-5xl">
//           <div className="border-4 border-solid border-red-700">
//             <div className="mt-2 sm:mt-10 lg:mt-16 pt-12 pb-4 px-5 sm:pl-5 border-gray-600 bodyFont font-extrabold ">
//               <span className="text-yellow-200">SOFTWARE</span>
//               <span className="text-red-500 m-2 lg:m-6">ENGINEER</span>
//             </div>
//             <div className="lg:mt-16 py-6 px-5 sm:pl-5 border-yellow-600 bodyFont font-extrabold">
//               <span className="text-red-500">PROBLEM</span>
//               <span className="text-yellow-200 m-3 lg:m-6">SOLVER</span>
//             </div> 
//           </div>
//           <div className="border-4 border-solid border-green-600">
//             <div className="lg:mt-28 pt-20 pb-7 sm:pl-5 bodyFont font-extrabold">
//               <span className="text-yellow-200 lg:text-4xl">90'S RAP</span>
//               <span className="text-red-500 ml-2">ENTHUSIAST</span> 
//             </div> 
//             <div className="lg:mt-16 pt-5 sm:pl-5 bodyFont font-extrabold border-solid border-2">
//               <span className="text-red-500">BASKETBALL</span>
//               <span className="text-yellow-200 pl-2 lg:m-6">JUNKIE</span> 
//             </div> 
//           </div>          
//         </div>

//       </section>
//     </main>
//   )

// }