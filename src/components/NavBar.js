import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
  return (
    <header className="bg-yellow-100 fixed w-full top-0 h-20 lg:h-24 xl:h-28">
      <div className="w-full flex mx-2">
        <nav className="flex">
          <NavLink 
            to="/" 
            exact 
            activeClassName="text-white"
            //OLD CSS className="inflex-flex px-3 mx-4 my-7 sm:my-5 sm:px-0  text-red-700 hover:text-yellow-300 text-5xl headerFont font-bold tracking-wider sm:text-lg"
            
            className="inline-flex headerFont text-red-600 font-bold tracking-wide items-center text-lg sm:text-3xl md:text-3xl lg:text-5xl xl:text-7xl mx-1 px-0.75 mt-6 lg:mt-8 xl:mt-7 md:ml-6 lg:ml-8 md:mr-4 sm:pr-2 md:pr-0"
          >
            SAM GOLD
          </NavLink>
          <NavLink 
            to="/project" 
            // OLD CSS className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
            className="inline-flex tabFont items-center text-blue-700 tracking-tight text-sm sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-semibold mx-2 md:px-1 mt-5 lg:mt-6 xl:mt-7 xl:mb-4 lg:px-2 xl:ml-10 hover:text-red-600"
            
            
            
            activeClassName="focus:text-red-600 bg-blue-700 px-1 bg-opacity-40 rounded-lg"
            // inline-flex items-center text-lg text-green-600 px-4 md:mx-3
          >
            PROJECTS
          </NavLink>
          <NavLink 
            to="/post" 
            //OLD CSS className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
            className="inline-flex tabFont items-center text-blue-700 tracking-tight text-sm sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-semibold tracking:wide mx-2 mt-5 md:px-1 lg:mt-6 xl:mt-7 xl:mb-4 xl:ml-10 hover:text-red-600"
            activeClassName="focus:text-red-600 bg-blue-700 px-1 bg-opacity-40 rounded-lg"
          >
              BLOGS
          </NavLink>
          <NavLink 
            to="/about" 
            // OLD CSS className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 sm:my-5 sm:px-0 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
            className="inline-flex tabFont items-center text-sm sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-semibold text-blue-700 tracking-tight mx-2 md:px-1 xl:mr-5 mt-5 lg:mt-6 xl:mt-7 xl:mb-4 lg:px-2 xl:ml-10 hover:text-red-600"
            
            
            activeClassName="focus:text-red-600 bg-blue-700 px-1 bg-opacity-40 rounded-lg"
          >
            ABOUT
          </NavLink>
        </nav>
        <div className="inline-flex ml-2 mr-4">
          <SocialIcon 
            url="https://www.linkedin.com/in/samgold57/" 
            className="ml-2 mr-3 sm:mr-2 mt-5 lg:mt-7" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon 
            url="https://github.com/sgold57" 
            className="mr-3 sm:mr-2  mt-5 lg:mt-7" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon 
            url="https://sgold5757.medium.com/" 
            className="mr-3 sm:mr-2  mt-5 lg:mt-7" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 45, width: 45 }}
          />
        </div>
      </div>
    </header>
  )
}
