import React, { useState, useEffect } from "react";
import sanityClient from "../client.js"

// 2 ways to query Sanity Studio... GROQ (created inhouse w/ Sanity), and GraphQL... WE ARE USING GROQ

export default function Post(){
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      // NEXT FETCH QUERIES ALL POST TYPES AND RETURNS TITLE, SLUG, IMAGE, and ALT
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
      .then((data) = setPost(data))
      .catch(console.error);
  }, []);
  
  return (
    <main>
      <section>
          <h1></h1>
          <h2></h2>
          <div>
            <article>
              <Link>
                <span>
                  <img />
                    <span>
                      <h3></h3>
                    </span>
                </span>
              </Link>
            </article>
          </div>
      </section>
    </main>
  );
}