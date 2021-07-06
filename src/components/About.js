import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import aboutMe from "../images/aboutMeSnippets/aboutMe.png"



const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

export default function About(){
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    sanityClient.fetch(`*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`).then((data) => setAuthor(data[0]))
    .catch(console.error);
  }, []);

  if(!author) return <div>Loading...</div>;


  return (
    <main className="bg-blue-700 min-h-screen min-w-screen pt-6 lg:pt-8" >
      <div className="md:ml-6 lg:ml-8 p-6 md:pt-28 lg:pt-32 mx-auto relative">
        <img src={aboutMe} alt="About Me" />
        
        
        {/* <section className="bg-green-800 rounded-lg shadow-3xl lg:flex p-20">
          <img 
            src={urlFor(author.authorImage).url()} 
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="text-6xl text-green-300 mb-4">
              Hey there. I'm{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent 
                blocks={author.bio} 
                projectId="1mann1nu" 
                dataset="production"
              />
            </div>
          </div>
        </section> */}
      </div>
    </main>
  )
}