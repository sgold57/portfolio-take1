import React from "react";
// { useState, useEffect }
// import sanityClient from "../client.js";
// import { Link } from "react-router-dom";

// 2 ways to query Sanity Studio... GROQ (created inhouse w/ Sanity), and GraphQL... WE ARE USING GROQ

export default function Code(){
  // const [codeData, setCode] = useState(null);

  // useEffect(() => {
  //   // NEXT FETCH QUERIES ALL POST TYPES AND RETURNS TITLE, SLUG, IMAGE, and ALT
  //   sanityClient
  //     .fetch(`*[_type == "code"]{
  //       language
  //       description,
  //       image
  //     }`)
  //     .then((data) => setCode(data))
  //     .catch(console.error)
  // }, []);
  
  return(
    <main className="bg-blue-700 opacity-90 bg-auto overflow-y-auto">
      <section className="container">
          <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl bodyFont flex content-evenly justify-center pt-32 mb-16">
            <span className="text-red-500 mx-2 lg:mx-3">THIS PAGE IS</span>
            <span className="text-yellow-200 mx-3 lg:mx-4">A WORK IN PROGRESS</span>
            <span className="text-red-500 mx-2 lg:mx-3">LIKE KANBAN</span>
          </div>
          {/* <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {postData && postData.map((post, index) => (
            <article>
              <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                <span 
                  className="block h-64 relative rounded shadow leading-snug bg-gray-600 border-l-8 border-red-700" 
                  key={index}
                >
                  <img 
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    className="w-full h-full rounded-r object-cover absolute"
                  />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-yellow-100 font-bold text-lg bodyFont px-3 py-4 px-4 bg-red-700 bg-opacity-80 rounded"
                      >
                        {post.title}
                      </h3>
                    </span>
                </span>
              </Link>
            </article>
            ))}
          </div> */}
      </section>
    </main>
  );
}