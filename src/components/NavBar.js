import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
  return (
    <header className="bg-black sticky top-0 h-24">
      <div className="w-full flex mx-2">
        <nav className="flex">
          <NavLink 
            to="/" 
            exact 
            activeClassName="text-white"
            //OLD CSS className="inflex-flex px-3 mx-4 my-7 sm:my-5 sm:px-0  text-red-700 hover:text-yellow-300 text-5xl headerFont font-bold tracking-wider sm:text-lg"
            
            className="inline-flex headerFont font-bold tracking-wider items-center text-3xl ml-7 mr-2 mt-8"
          >
            SAM GOLD
          </NavLink>
          <NavLink 
            to="/post" 
            //OLD CSS className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
            className="inline-flex items-center text-lg text-green-600 mx-2 mt-7"
            
            
            activeClassName="text-yellow-300 bg-red-400 bg-opacity-40 hover:text-yellow-300"
          >
              Blog Posts
          </NavLink>
          <NavLink 
            to="/project" 
            // OLD CSS className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
            className="inline-flex items-center text-lg text-green-600 mx-2 mt-7"
            
            
            
            activeClassName="inline-flex items-center text-lg text-green-600 mx-2 mt-7"
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about" 
            // OLD CSS className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 sm:my-5 sm:px-0 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
            className="inline-flex items-center text-lg text-green-600 mx-2 mt-7"
            
            
            activeClassName="text-yellow-300 bg-red-400 bg-opacity-40 hover:text-yellow-300"
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex mx-3">
          <SocialIcon 
            url="https://www.linkedin.com/in/samgold57/" 
            className="mx-3 mt-7" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon 
            url="https://github.com/sgold57" 
            className="mx-3 mt-7" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 45, width: 45 }}
          />
        </div>
      </div>
    </header>
  )
}
