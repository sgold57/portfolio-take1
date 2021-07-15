import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
  return (
    <header className="bgImageOffWhite bg-cover sticky top-0 w-screen h-12 sm:h-20 lg:h-24 xl:h-28">
        <nav className="flex flex-row">
          <NavLink 
            to="/" 
            exact 
            //OLD CSS className="inflex-flex px-3 mx-4 my-7 sm:my-5 sm:px-0  text-red-700 hover:text-yellow-300 text-5xl headerFont font-bold tracking-wider sm:text-lg"
            
            className="nameTab bodyFont imageRed text-opacity-80 font-bold tracking-normal sm:items-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl mx-1 mt-4 lg:mt-4 xl:mt-6 md:ml-6 lg:ml-8 md:mr-4 pr-2 md:pr-0"
          >
            SAM GOLD
          </NavLink>
          <div className="tabsDiv flex ml-1"> 
            <NavLink 
              to="/project"
              exact 
              // OLD CSS className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
              // className="inline-flex tabFont items-center text-blue-700 text-opacity-90 tracking-tight text-sm sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-semibold mx-2 md:px-1 mt-5 lg:mt-6 xl:mt-7 xl:mb-4 lg:px-2 xl:ml-10 hover:text-red-600"
              className="inactiveTab tabFont items-center text-blue-700 text-opacity-90 tracking-tight text-md md:text-2xl lg:text-3xl xl:text-5xl font-semibold tracking:wide mr-3 mt-3 sm:mx-2 sm:mt-5 md:px-1 lg:mt-7 xl:mt-8 xl:mb-4 xl:ml-10 hover:text-red-600"
              
              
              activeClassName="activeNav focus:text-red-600 bg-blue-700 text-opacity-90 bg-opacity-40 px-1 rounded-lg"
              // inline-flex items-center text-lg text-green-600 px-4 md:mx-3
            >
              PROJECTS
            </NavLink>
            <NavLink 
              to="/post" 
              exact
              //OLD CSS className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
              className="inactiveTabtabFont items-center text-blue-700 text-opacity-90 tracking-tight text-md md:text-2xl lg:text-3xl xl:text-5xl font-semibold tracking:wide mr-3 mt-3 sm:mx-2 sm:mt-5 md:px-1 lg:mt-7 xl:mt-8 xl:mb-4 xl:ml-10 hover:text-red-600"
              activeClassName="activeNav focus:text-red-600 bg-blue-700 text-opacity-90 px-1 bg-opacity-40 rounded-lg"
            >
              CODE
            </NavLink>
            <NavLink 
              to="/about" 
              // OLD CSS className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 sm:my-5 sm:px-0 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
              // className="inline-flex tabFont items-center text-sm sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-semibold text-blue-700 text-opacity-90 tracking-tight mx-2 md:px-1 xl:mr-5 mt-5 lg:mt-6 xl:mt-7 xl:mb-4 lg:px-2 xl:ml-10 hover:text-red-600"
              
              // className="inline-flex tabFont items-center text-blue-700 text-opacity-90 tracking-tight text-sm sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-semibold mx-2 md:px-1 mt-5 lg:mt-6 xl:mt-7 xl:mb-4 lg:px-2 xl:ml-10 hover:text-red-600"
              className="tabFont items-center text-blue-700 text-opacity-90 tracking-tight text-md md:text-2xl lg:text-3xl xl:text-5xl font-semibold tracking:wide mr-3 mt-3 sm:mx-2 sm:mt-5 md:px-1 lg:mt-7 xl:mt-8 xl:mb-4 xl:ml-10 hover:text-red-600"
              activeClassName="activeNav focus:text-red-600 bg-blue-700 text-opacity-90 px-1 bg-opacity-40 rounded-lg"
            >
              ABOUT
            </NavLink>
          </div>
        <div className="hidden sm:inline-flex ml-2 mr-4">
          <SocialIcon 
            url="https://www.linkedin.com/in/samgold57/" 
            className="linkedInLogo ml-2 lg:ml-5 mr-3 sm:mr-2 mt-5 lg:mt-7" 
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
      </nav>
    </header>
  )
}
