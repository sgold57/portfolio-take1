import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
  return (
    <header className="bg-black position:fixed h-24">
      <div className="container mx-auto flex">
        <nav className="flex justify-around">
          <NavLink 
            to="/" 
            exact 
            activeClassName="text-white"
            className="inflex-flex px-3 mx-4 my-8 text-red-700 hover:text-yellow-300 text-5xl headerFont font-bold tracking-wider"
          >
            SAM GOLD
          </NavLink>
          <NavLink 
            to="/post" 
            className="inline-flex items-center px-4 mt-7 mb-8 rounded text-2xl headerFont text-green-600 hover:text-red-800"
            activeClassName="text-red-800 bg-green-600 bg-opacity-40"
          >
              Blog Posts
          </NavLink>
          <NavLink 
            to="/project" 
            className="inline-flex items-center py-3 px-5 my-6 rounded text-2xl text-green-600 headerFont hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about" 
            className="inline-flex items-center py-3 px-5 my-6 headerFont rounded text-2xl text-green-600 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
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
