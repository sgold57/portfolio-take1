import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function Project(){
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type =="project"]{
      name,
      technologiesUsed, 
      institution, 
      description, 
      api, 
      link,
      images, 
      tags
    }`)
    .then((data) => setProjectData(data))
    .catch(console.error);
  }, []);

  return (
    <main className="bg-blue-700 h-screen w-screen pt-12 overflow-y-auto">
      {/* mt-24 lg:mt-28  FOR LINE 24??? */}
      <section className="container flex flex-col content-center mb-24 mr-4">
        <h1 className="imageRed opacity-90 font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl bodyFont text-center mb-8 mx-32 lg:mx-56 py-3 md:pt-3 border-double border-4 border-yellow-200 shadow-xl">
          WORK EXAMPLES
        </h1>
        <section className="grid cols-span-2 xl:grid-cols-2 gap-8 ml-12 mr-8">
          {projectData && projectData.map((project, index) => ( 
          <article className="relative rounded-lg shadow-xl bodyFont bg-yellow-100 py-8 px-10">
            <h3 className="text-red-500 text-3xl font-bold mb-2 hover:text-red-700">
              {/* clickable a tag */}
              <a
                href={project.link}
                alt={project.name}
                target="_blank"
                rel="noopener noreferrer"
                key={project}
                >{project.name}
              </a>
            </h3>
            <div className="text-md space-x-4">  {/* where all the information (title, type, date) will live */}
              <div className="flex content-evenly pl-2">
                <span className="text-red-500 mr-2 mt-4">
                  <strong className="font-bold text-blue-700">Technologies Used:</strong>{"  "}
                </span>
                {project.technologiesUsed.map(techUrl => 
                  <img className="w-11 h-11 pr-2 mb-3 mt-1" src={techUrl} alt="UNKNOWN" />
                  )}                  
              </div>
              <span className="text-red-500">
                <strong className="font-bold text-blue-700">Institution:</strong>{"  "}
                {project.institution}
              </span>
              <span className="text-red-500">
                <a 
                  href={project.api}
                  alt={project.api}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong className="font-bold text-blue-700">
                    <u>API Used</u>
                  </strong>
                </a>  
              </span>
              <p className="my-6 text-lg text-gray-700 leading-relax">
                {project.description}
              </p>
              <a 
                href={project.link} 
                rel="noopener noreferrer" 
                target="_blank" 
                className="text-blue-500 font-bold hover:underline hover:text-red-400"
              > 
                Github{" "}
                <span role="img" aria-label="right pointer"> {/* aria-label is like the alt tag for emojis */}
                👉
                </span>
              </a>
            </div>
              <div className="imageDiv my-6">
                {project.images.map(image => 
                  <img className="mb-3" src={urlFor(image)} alt="screenshot" />
                )}
              </div>
          </article>
          ))}
        </section>
      </section>
    </main>
  )

}
