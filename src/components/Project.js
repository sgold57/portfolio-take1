import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

export default function Project(){
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type =="project"]{
      title,
      date, 
      place, 
      description, 
      projectType, 
      link, 
      tags
    }`)
    .then((data) => setProjectData(data))
    .catch(console.error);
  }, []);

  return (
    <main className="bg-blue-700 min-h-screen p-8">
      <section className="container mx-auto mt-40">
        <h1 className="text-red-600 opacity-80 text-2xl sm:text-4xl md:text-5xl xl:text-6xl bodyFont flex justify-center mb-8 mx-28 sm:mx-32 md:mx-34 pb-3 pt-2 md:pt-3 border-double border-4 border-yellow-200 shadow-lg">
          WORK EXAMPLES
        </h1>
        <section className="grid xl:grid-cols-2 gap-8">
          {projectData && projectData.map((project, index) => ( 
          <article className="relative rounded-lg shadow-xl bodyFont bg-yellow-100 p-16">
            <h3 className="text-red-500 text-3xl font-bold mb-2 hover:text-red-700">
              {/* clickable a tag */}
              <a
                href={project.link}
                alt={project.title}
                target="_blank"
                rel="noopener noreferrer"
                >{project.title}
              </a>
            </h3>
            <div className="text-md space-x-4">  {/* where all the information (title, type, date) will live */}
              <span className="text-red-500">
                <strong className="font-bold text-blue-700">Finished on:</strong>{" "}
                {new Date(project.date).toLocaleDateString()}
              </span>
              <span className="text-red-500">
                <strong className="font-bold text-blue-700">Company:</strong>{" "}
                {project.place}
              </span>
              <span className="text-red-500">
                <strong className="font-bold text-blue-700">Type:</strong>{" "}
                {project.projectType}
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
                View The Project{" "}
                <span role="img" aria-label="right pointer"> {/* aria-label is like the alt tag for emojis */}
                👉
                </span>
              </a>
            </div>
          </article>
          ))}
        </section>
      </section>
    </main>
  )

}
