"use client";
import Image from "next/image";
import "./dropdown.css";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { SiInstagram, SiLinkedin, SiLinktree } from "react-icons/si";
export default function Home() {
  const [isClick, isSetClick] = useState(false);
  const pathname = usePathname()
  const toggleNavbar = () => {
    isSetClick(!isClick);
  };
    return (
      <>
        <header className={`flex flex-row justify-evenly items-center bg-transparent text-white top-0 z-30 whitetoyellow absolute w-[100%] ${isClick == true || pathname != "/"?"!bg-black": ""}  ${pathname != "/"?"!relative": ""}`}>
          <Link href="/" className="flex flex-col md:my-5 mt-2">
          <Image
          // layout="responsive"
            src="/main/logo.png"
            alt="Enactus"
            
            height={30}
            width={250}
            // style={{width:'auto', height: "50px" }}
            className="brightness-0 invert pb-5"
          ></Image>
         
          <h2 className="ml-5 text-sm">University of Sheffield</h2>
          </Link>
          <div className="flex md:hidden basis-auto">
            <button onClick={toggleNavbar}>
              {isClick ? (
                <Image src="/main/cross.svg" width={47} height={47} alt="menu"></Image>
              ) : (
                <Image src="/main/hamburger.svg" width={47} height={47} alt="menu"></Image>
              )}
            </button>

          </div>
          <div className="menulink  mt-5 hidden md:inline">

            <Link href="/#about" className="p-2 border-t-2 m-10 border-teal-300 hover:text-yellow-400 hover:border-yellow-300 duration-150 text-2xl ">About</Link>
            
            {/* <div className="dropdown">
              <Link href="/#project" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide dropbtn">Team
              <Image src="/main/hamburger.svg" width={25} height={25} alt="menu" className="inline ml-2"></Image></Link>
              <div className="dropdown-content bg-gray-800 text-white">
                <Link href="/bladesandbrands">Blades & Brands</Link>
                <Link href="/codecreators">CodeCreators</Link>
                <Link href="/carte">Carte</Link>
                <Link href="/intellectinterpreters">Intellect Interpreters</Link>
                <Link href="/blades&brands">Blades and Brands</Link>
              </div>
            </div> */}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd6RnK9K87Fh9sst1oHiv36ZCZVoRDVQLmWcHANXpUG9Yrhpg/viewform?usp=dialog" className="p-2 border-t-2 m-10 border-teal-300 hover:text-yellow-400 hover:border-yellow-300 duration-150 text-2xl" target="_blank">Apply Now</Link>
            <Link href="/#contact" className="p-2 border-t-2 m-10 border-teal-300 hover:text-yellow-400 hover:border-yellow-300 duration-150 text-2xl">Contact</Link>
          </div>
          <div className="">
              <div className="flex flex-row text-white">
                  <div className="md:m-5 m-2">
                    <a href="https://linktr.ee/enactus_sheffield"><SiLinktree className="h-[24px] w-[24px] text-white hover:text-yellow-300 duration-150"/></a>
                  </div>
                  <div className="w-[24px] md:m-5 m-2">
                    <a href="https://www.linkedin.com/company/enactus-sheffield-limited/"><SiLinkedin className="h-[24px] w-[24px] text-white hover:text-yellow-300 duration-150"/></a>  
                  </div>
                  <div className="w-[24px] md:m-5 m-2">
                    <a href="https://www.instagram.com/enactussheffield_/"><SiInstagram className="h-[24px] w-[24px] text-white hover:text-yellow-300 duration-150"/></a>
                  </div>
                </div>
          </div>
         
        </header>
     
        <div className={`  md:hidden  !text-white z-20 relative ${pathname != "/"?"": "!top-[60px]"}  `}> 
          {isClick && (
            <>
              <div className="block !bg-gray-950 pt-3"> {/* fixing white gap  */}
                <div className="menulink mt-10 [&>*]:block pt-8" >
                  <Link href="/#about" className="pt-2 border-t-2 m-2 border-teal-300 hover:tracking-wide pl-2 pb-2">About</Link>
                    {/* <Link href="/#project" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide dropbtn  ">Team</Link>
                      <Link className="ml-5 p-2" href="/codecreators/#">CodeCreators</Link>
                      <Link className="ml-5 p-2" href="/carte/#">Carte</Link>
                      <Link className="ml-5 p-2" href="/ii/#">Intellect interpreters</Link>
                      <Link className="ml-5 p-2" href="/blades&brands/#">E-marketing</Link> */}
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd6RnK9K87Fh9sst1oHiv36ZCZVoRDVQLmWcHANXpUG9Yrhpg/viewform?usp=dialog" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide" target="_blank">Apply Now</Link>
                  <Link href="/#contact" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide ">Contact</Link>
                </div>
              </div>
            </>
          )}
        </div></>
        )}