import React from "react";
import aboutMe from "../images/aboutMeSnippets/aboutMe.png"
// import sanityClient from "../client.js";
// import BlockContent from "@sanity/block-content-to-react";
// import imageUrlBuilder from "@sanity/image-url";



// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source)
// }

export default function About(){
  
  
  return (
    <main className="bgImageOffWhite h-screen w-screen pt-6 lg:pt-8 overflow-auto" >
        <div className="shadow:xl md:ml-6 lg:ml-8 p-6 md:pt-32 lg:pt-36 mx-auto">
          <img className="" src={aboutMe} alt="About Me" />
        </div>
    </main>
  )
}



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
// )


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