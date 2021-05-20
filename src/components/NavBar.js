import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
  return (
    <header className="bg-yellow-100 sticky top-0 h-20 lg:h-24">
      <div className="w-full flex mx-2">
        <nav className="flex">
          <NavLink 
            to="/" 
            exact 
            activeClassName="text-white"
            //OLD CSS className="inflex-flex px-3 mx-4 my-7 sm:my-5 sm:px-0  text-red-700 hover:text-yellow-300 text-5xl headerFont font-bold tracking-wider sm:text-lg"
            
            className="inline-flex headerFont text-red-600 font-bold tracking-wide md:tracking-wider lg:tracking-wide items-center text-3xl lg:text-6xl xl:text-7xl ml-3 mr-6 mt-6 md:ml-11 lg:ml-8 md:mr-4"
          >
            SAM GOLD
          </NavLink>
                    <NavLink 
            to="/project" 
            // OLD CSS className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
            className="inline-flex tabFont items-center text-blue-700 tracking-tight text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold mx-2 md:mx-2 mt-5 lg:mt-3 xl:ml-12"
            
            
            
            activeClassName="inline-flex items-center text-lg text-green-600 mx-2 md:mx-3"
          >
            PROJECTS
          </NavLink>
          <NavLink 
            to="/post" 
            //OLD CSS className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
            className="inline-flex tabFont items-center text-blue-700 tracking-tight text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking:wide mx-2 md:mx-2 mt-5 lg:mt-3 xl:ml-12"
            
            
            activeClassName="text-yellow-300 bg-red-400 bg-opacity-40 hover:text-yellow-300"
          >
              BLOGS
          </NavLink>
          <NavLink 
            to="/about" 
            // OLD CSS className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 sm:my-5 sm:px-0 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
            className="inline-flex tabFont items-center text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-700 tracking-tight mx-2 md:mr-1 xl:mr-5 mt-5 lg:mt-3 xl:ml-12"
            
            
            activeClassName="text-yellow-300 bg-red-400 bg-opacity-40 hover:text-yellow-300"
          >
            ABOUT
          </NavLink>
        </nav>
        <div className="inline-flex mx-4">
          <SocialIcon 
            url="https://www.linkedin.com/in/samgold57/" 
            className="mx-4 mt-5" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon 
            url="https://github.com/sgold57" 
            className="mr-4 mt-5" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 45, width: 45 }}
          />
        </div>
      </div>
    </header>
  )
}
