import Image from "next/image";
import "./dropdown.css";
export default function Home() {
    return (
      
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
          <div className="menulink inline mt-5">
  
            <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide">Home</a>
            <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide">About</a>
            
            <div className="dropdown"><a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide dropbtn">Team</a>
    {/* <button class="dropbtn">Dropdown</button> */}
    <div className="dropdown-content">
      <a href="#">CodeCreators</a>
      <a href="#">OnTarget</a>
      <a href="#">VapeDrop</a>
    </div>
  </div>
            <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide">Apply Now</a>
            <a href="" className="p-2 border-t-2 m-2 border-teal-300 hover:tracking-wide">Contact</a>
          </div>
          <div className="searchbox">
  
            <input type="text" placeholder="search" name="searchbox" className="bg-black  border-white rounded-sm text-white"/>
            <button>search</button>
          </div>
        </header>
        )}