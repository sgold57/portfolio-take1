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
    <main className="bg-blue-700 opacity-90 h-screen w-screen pt-12 overflow-y-auto">
      {/* mt-24 lg:mt-28  FOR LINE 24??? */}
      <section className="container flex flex-col content-center mb-8 sm:mb-24 mr-4">
        <h1 className="projHeader imageRed opacity-90 font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl bodyFont text-center sm:mb-8 mx-16 lg:mx-56 py-3 md:pt-3 border-double border-4 border-yellow-200 shadow-xl">
          WORK EXAMPLES
        </h1>
        <section className="projSection grid cols-span-2 xl:grid-cols-2 gap-8 ml-12 mr-8">
          {projectData && projectData.map((project, index) => ( 
          <article className="border-2 border-black border-solid projArticle relative rounded-lg shadow-xl bodyFont bg-yellow-100 py-8 px-10 shadow-xl">
            <h3 className="techHeader text-red-500 text-center text-xl sm:text-3xl lg:text-5xl xl:text-4xl font-bold mb-2 hover:text-red-700">
              {/* clickable a tag */}
              <a
                href={project.link}
                alt={project.name}
                target="_blank"
                rel="noopener noreferrer"
                key={project}
                ><u>{project.name}</u>
              </a>
            </h3>
            <div className="attributesDiv flex flex-col sm:block text-md space-x-0.5 sm:space-x-4">  {/* where all the information (title, type, date) will live */}
              <div className="flex sm:content-evenly lg:content-center py-1 sm:pl-28 md:pl-36 lg:pl-64 xl:pl-24 text-sm sm:text-lg lg:text-xl">
                <span className="text-red-500 sm:mr-2 sm:mt-4">
                  <strong className="techSpan font-bold text-blue-700 mr-2">Technologies Used:</strong>{"  "}
                </span>
                {project.technologiesUsed.map(techUrl => 
                  <img className="techIcon w-10 h-10 pr-1 sm:w-11 sm:h-11 lg:h-15 lg:w-15 sm:pr-2 sm:mb-3 sm:mt-1" src={techUrl} alt="UNKNOWN" />
                  )}                  
              </div>
              <span className="fiSpan text-red-500 text-base lg:text-xl sm:pl-20 md:pl-32 lg:pl-56 xl:pl-16 py-2 self-center">
                <strong className="sm:font-bold text-blue-700 tracking-normal">Institution:</strong>{"  "}
                {project.institution}
              </span>
              <span className="apiSpan text-base lg:text-xl text-red-500 py-2 self-center">
                <a 
                  href={project.api}
                  alt={project.api}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong className="font-bold text-blue-700 hover:underline hover:text-red-400">
                    API Used
                  </strong>
                </a>  
              </span>
              <p className="descriptionP text-center my-6 text-base sm:text-lg md:text-2xl text-gray-700 leading-relax">
                {project.description}
              </p>
              <a 
                href={project.link} 
                rel="noopener noreferrer" 
                target="_blank" 
                key={project}
                className="text-blue-500 lg:ml-64 font-bold hover:underline hover:text-red-400 lg:text-2xl"
              > 
                Github{" "}
                <span role="img" aria-label="left pointer"> {/* aria-label is like the alt tag for emojis */}
                👈
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
