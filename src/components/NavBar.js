import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
  return (
    <header className="bg-black position:fixed h-24">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink 
            to="/" 
            exact 
            activeClassName="text-white"
            className="inflex-flex pb-7 px-3 mr-4 text-red-700 hover:text-yellow-300 text-5xl headerFont font-bold tracking-wider"
          >
            SAM GOLD
          </NavLink>
          <NavLink 
            to="/post" 
            className="inline-flex items-center pt-7 pb-3 px-3 my-6 rounded text-xl text-yellow-300 headerFont hover:text-red-800"
            activeClassName="text-yellow-300 bg-red-800"
          >
              Blog Posts
          </NavLink>
          <NavLink 
            to="/project" 
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 headerFont hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about" 
            className="inline-flex items-center py-3 px-3 my-6 headerFont rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon 
            url="https://www.linkedin.com/in/samgold57/" 
            className="mr-4" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon 
            url="https://github.com/sgold57" 
            className="mr-4" 
            target="_blank" //opens new tab
            fgColor="#fff" 
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  )
}
