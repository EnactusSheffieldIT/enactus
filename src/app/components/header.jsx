"use client";
import Image from "next/image";
import "./dropdown.css";
import { useState } from "react";
export default function Home() {
  const [isClick, isSetClick] = useState(false);

  const toggleNavbar = () => {
    isSetClick(!isClick);
  };
    return (
      <>
        <header className="flex flex-row justify-evenly items-center bg-black text-white sticky top-0 z-20">
          <div className="flex flex-col my-5">
          <Image
          // layout="responsive"
            src="/main/logo.png"
            alt="Vercel Logo"
            
            height={30}
            width={108}
            // style={{width:'auto', height: "50px" }}
            className="brightness-0 invert"
          ></Image>
         
          <h2 className="ml-5 text-sm">University of Sheffield</h2>
          </div>
          <div className="flex md:hidden basis-auto">
            <button onClick={toggleNavbar}>
              {isClick ? (
                <Image src="/cross.svg" width={47} height={47} alt="menu"></Image>
              ) : (
                <Image src="/hamburger.svg" width={47} height={47} alt="menu"></Image>
              )}
            </button>
            {/* <a
              href="/contact-us"
              className="rounded-2xl m-2 py-1 !px-3 !bg-blue-800 text-white hover:!bg-blue-500 transition-all inline-block"
            >
              {t("contact")}
            </a> */}
          </div>
          <div className="menulink  mt-5 hidden md:inline">
  
            <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide">Home</a>
            <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide">About</a>
            
            <div className="dropdown">
              <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide dropbtn">Team
              <Image src="/hamburger.svg" width={25} height={25} alt="menu" className="inline ml-2"></Image></a>
              <div className="dropdown-content bg-gray-800 text-white">
                <a href="#">CodeCreators</a>
                <a href="#">OnTarget</a>
                <a href="#">VapeDrop</a>
                <a href="#">Carte</a>
                <a href="#">Intellect interpreters</a>
                <a href="#">E-marketing</a>
              </div>
            </div>
            <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide">Apply Now</a>
            <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide">Contact</a>
          </div>
          <div className="searchbox hidden md:inline">
  
            <input type="text" placeholder="search" name="searchbox" className="bg-black  border-white rounded-sm text-white"/>
            <button>search</button>
          </div>
         
        </header>
     
         <div className="md:hidden">
          {isClick && (
            <>
              <div className="block">
                 <div className="menulink  mt-5 [&>*]:block">
  
            <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide">Home</a>
            <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide">About</a>
            
              <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide dropbtn">Team</a>
                <a className="ml-5 p-2" href="#">CodeCreators</a>
                <a className="ml-5 p-2" href="#">OnTarget</a>
                <a className="ml-5 p-2" href="#">VapeDrop</a>
                <a className="ml-5 p-2" href="#">Carte</a>
                <a className="ml-5 p-2" href="#">Intellect interpreters</a>
                <a className="ml-5 p-2" href="#">E-marketing</a>
            <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide">Apply Now</a>
            <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide">Contact</a>
          </div>
                </div>
            </>
          )}
        </div></>
        )}