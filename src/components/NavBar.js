import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
  return (
    <header className="bg-black position:fixed h-24">
      <div className="container mx-auto flex">
        <nav className="flex content-around">
          <NavLink 
            to="/" 
            exact 
            activeClassName="text-white"
            className="inflex-flex sm:flex-nowrap items-center px-3 mx-4 my-7 sm:my-5 sm:px-0  text-red-700 hover:text-yellow-300 text-5xl headerFont font-bold tracking-wider sm:text-lg"
          >
            SAM GOLD
          </NavLink>
          <NavLink 
            to="/post" 
            className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
            activeClassName="text-yellow-300 bg-red-400 bg-opacity-40 hover:text-yellow-300"
          >
              Blog Posts
          </NavLink>
          <NavLink 
            to="/project" 
            className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
            activeClassName="text-yellow-300 bg-red-400 bg-opacity-40 hover:text-yellow-300"
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about" 
            className="inline-flex items-center px-4 mt-7 mb-8 sm:mx-2 sm:my-5 sm:px-0 rounded text-3xl headerFont text-green-600 hover:text-red-800 sm:text-sm"
            activeClassName="text-yellow-300 bg-red-400 bg-opacity-40 hover:text-yellow-300"
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-8 my-4">
          <SocialIcon 
            url="https://www.linkedin.com/in/samgold57/" 
            className="mr-4" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon 
            url="https://github.com/sgold57" 
            className="mr-4" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 45, width: 45 }}
          />
        </div>
      </div>
    </header>
  )
}
