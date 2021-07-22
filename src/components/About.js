import React from "react";
import aboutMe from "../images/aboutMeSnippets/aboutMe.png"
import { SocialIcon } from "react-social-icons";


export default function About(){
  
  
  return (
    <main className="bgImageOffWhite h-screen w-screen pt-6 overflow-auto" >
      <div className="flex justify-center sm:hidden ml-2 mr-4">
          <SocialIcon 
            url="https://www.linkedin.com/in/samgold57/" 
            className="linkedInLogo ml-2 mr-3 sm:mr-2 mt-5 lg:mt-7" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon 
            url="https://github.com/sgold57" 
            className="githubLogo mr-3 sm:mr-2  mt-5 lg:mt-7" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon 
            url="https://sgold5757.medium.com/" 
            className="mediumLogo mr-3 sm:mr-2  mt-5 lg:mt-7" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 45, width: 45 }}
          />
        </div>
        <div className="shadow:xl pb-36 md:ml-6 p-6 md:pt-24 pl-6 md:px-12 lg:px-28 mx-auto">
          <img className="" src={aboutMe} alt="About Me" />
        </div>
    </main>
  )
}





//   const [author, setAuthor] = useState(null);
//   useEffect(() => {
//     sanityClient.fetch(`*[_type == "author"]{
//       name,
//       bio,
//       "authorImage": image.asset->url
//     }`).then((data) => setAuthor(data[0]))
//     .catch(console.error);
//   }, []);

//   if(!author) return <div>Loading...</div>;


//FOR TOP OF PAGE
// import sanityClient from "../client.js";
// import BlockContent from "@sanity/block-content-to-react";
// import imageUrlBuilder from "@sanity/image-url";



// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source)
// }