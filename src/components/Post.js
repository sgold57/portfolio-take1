import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

// 2 ways to query Sanity Studio... GROQ (created inhouse w/ Sanity), and GraphQL... WE ARE USING GROQ

export default function Post(){
  const [postData, setPost] = useState(null);

  useEffect(() => {
    // NEXT FETCH QUERIES ALL POST TYPES AND RETURNS TITLE, SLUG, IMAGE, and ALT
    sanityClient
      .fetch(`*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) => setPost(data))
      .catch(console.error)
  }, []);
  
  return(
    <main className="bg-pink-200 min-h-screen p-12">
      <section className="container mx-auto">
          <h1 className="text-4xl flex justify-center">
            BLOGS
          </h1>
          <h2 className="text-lg text-gray-600 flext justify-center mb-12">
            Look at some of the stuff that I've written during my coding journey.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postData && postData.map((post, index) => (
            <article>
              <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                <span 
                  className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" 
                  key={index}
                >
                  <img 
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    className="w-full h-full rounded-r object-cover absolute"
                  />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-blog-px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded"
                      >
                        {post.title}
                      </h3>
                    </span>
                </span>
              </Link>
            </article>
            ))}
          </div>
      </section>
    </main>
  );
}