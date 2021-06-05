import React from "react";
import HomePagePhoto from "../images/denver_hp_with_lines_bigger.png"

export default function Home(){
  return (
    <main className="relative bg-blue-700 min-h-screen min-w-screen mt-20 lg:mt-24 xl:mt-28">
      <section className="relative flex max-w-screen top-12 py-24">
        <img className=" self-center w-full" src={HomePagePhoto}></img>
        <div className="absolute flex-col content-evenly inset-y-24 lg:inset-y-1/2 lg:mt-8 left-1/2 w-1/2 text-2xl md:text-4xl lg:text-4xl xl:text-5xl">
          <div className="flex-col">
            <div className="flex justify-center md:justify-start bodyFont font-extrabold mt-12 xl:mt-4">
              <span className="text-red-500">SOFTWARE</span>
              <span className="text-yellow-200 ml-3">ENGINEER</span>
            </div>
            <div className="flex justify-center md:justify-start bodyFont font-extrabold mt-3 md:mt-6">
              <span className="text-yellow-200">PROBLEM</span>
              <span className="text-red-500 ml-4">SOLVER</span>
            </div> 
          </div>
          <div className="flex-col mt-12 sm:mt-16 md:mt-28 lg:mt-6 xl:mt-10 bodyFont font-extrabold">
            <div className="flex justify-center md:justify-start md:tracking-tight bodyFont font-extrabold">
              <span className="text-red-500">90'S RAP</span>
              <span className="text-yellow-200 ml-2">ENTHUSIAST</span> 
            </div> 
            <div className="flex justify-center md:justify-start bodyFont font-extrabold mt-3 md:mt-6">
              <span className="text-yellow-200">BASKETBALL</span>
              <span className="text-red-500 ml-2 sm:ml-3">JUNKIE</span> 
            </div> 
          </div>          
        </div>

      </section>
    </main>
  )

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