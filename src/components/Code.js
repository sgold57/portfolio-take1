import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

// import { Link } from "react-router-dom";

// 2 ways to query Sanity Studio... GROQ (created inhouse w/ Sanity), and GraphQL... WE ARE USING GROQ

export default function Code(){
  const [codeData, setCodeData] = useState(null);

  useEffect(() => {
    // NEXT FETCH QUERIES ALL POST TYPES AND RETURNS TITLE, SLUG, IMAGE, and ALT
    sanityClient.fetch(`*[_type == "code"]{
        language,
        description,
        image
      }`)
      .then((data) => setCodeData(data))
      .catch(console.error);
  }, []);
  
  return(
    <main className="bg-blue-700 opacity-90 pt-12 overflow-y-auto">
      {/* mt-24 lg:mt-28  FOR LINE 24??? */}
      <section className="container flex flex-col content-center mb-8 sm:mb-24 mr-4">
        <h1 className="projHeader offWhite opacity-90 font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl bodyFont text-center mb-24 md:mb-28 mx-16 lg:mx-56 xl:ml-80 xl:pl-1 py-3 md:pt-3 border-double border-4 border-red-500 shadow-xl">
          CODE SNIPPETS
        </h1>
        <section className="projSection grid cols-span-2 gap-8 sm:gap-32 ml-16 mr-8 xl:mr-4 xl:ml-20 xl:pb-12">
          {codeData && codeData.map((code, index) => ( 
          <article className="border-2 border-black border-solid projArticle relative rounded-lg shadow-xl bodyFont bg-yellow-100 py-8 px-10 shadow-xl transform sm:hover:scale-110">
            <h3 className="techHeader text-red-500 text-center text-xl sm:text-3xl lg:text-5xl xl:text-4xl font-bold mb-2">
              LANGUAGE: {code.language}
            </h3>
            <div className="attributesDiv flex flex-col justify-center sm:block text-md space-x-0.5 sm:space-x-4">  {/* where all the information (title, type, date) will live */}
              <div className="flex flex-col content-start py-1 text-sm sm:text-lg lg:text-xl">
                <p className="descriptionP my-6 text-center text-base sm:text-lg md:text-2xl text-gray-700 leading-relax">
                  {code.description}
                </p>
                <div className="imageDiv mt-8 sm:mt-20 mb-6 px-4">
                  {code.image.map(pic => 
                    <img className="mb-3 shadow-xl" src={urlFor(pic)} alt="screenshot" />
                  )}
                </div>
              </div>
            </div>
          </article>
          ))}
        </section>
      </section>
    </main>
  )
}

      

// //   <main className="bg-blue-700 opacity-90 bg-auto overflow-y-auto">
//   //     <section className="container">
//   //         <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl bodyFont flex content-evenly justify-center pt-32 mb-16">
//   //           <span className="text-red-500 mx-2 lg:mx-3">THIS PAGE IS</span>
//   //           <span className="text-yellow-200 mx-3 lg:mx-4">A WORK IN PROGRESS</span>
//   //           <span className="text-red-500 mx-2 lg:mx-3">LIKE KANBAN</span>
//   //         </div>
//   //         </section>
//   //   </main>
//   // );
//               {/* <span className="text-red-500 sm:mr-2 sm:mt-4">
//                   <strong className="techSpan font-bold text-blue-700 mr-2">Technologies Used:</strong>{"  "}
//                 </span>
//                 {project.technologiesUsed.map(techUrl => 
//                   <img className="techIcon w-10 h-10 pr-1 sm:w-11 sm:h-11 lg:h-15 lg:w-15 sm:pr-2 sm:mb-3 sm:mt-1" src={techUrl} alt="UNKNOWN" />
//                   )}                  
//               </div>
//               <span className="fiSpan text-red-500 text-base lg:text-xl sm:pl-20 md:pl-32 lg:pl-56 xl:pl-16 py-2 self-center">
//                 <strong className="sm:font-bold text-blue-700 tracking-normal">Institution:</strong>{"  "}
//                 {project.institution}
//               </span>
//               <span className="apiSpan text-base lg:text-xl text-red-500 py-2 self-center">
//                 <a 
//                   href={project.api}
//                   alt={project.api}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <strong className="font-bold text-blue-700 hover:underline hover:text-red-400">
//                     API Used
//                   </strong>
//                 </a>  
//               </span> */}

//           {/* <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
//               {postData && postData.map((post, index) => (
//             <article>
//               <Link to={"/post/" + post.slug.current} key={post.slug.current}>
//                 <span 
//                   className="block h-64 relative rounded shadow leading-snug bg-gray-600 border-l-8 border-red-700" 
//                   key={index}
//                 >
//                   <img 
//                     src={post.mainImage.asset.url}
//                     alt={post.mainImage.alt}
//                     className="w-full h-full rounded-r object-cover absolute"
//                   />
//                     <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
//                       <h3 className="text-yellow-100 font-bold text-lg bodyFont px-3 py-4 px-4 bg-red-700 bg-opacity-80 rounded"
//                       >
//                         {post.title}
//                       </h3>
//                     </span>
//                 </span>
//               </Link>
//             </article>
//             ))}
//               </div> */}
