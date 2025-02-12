"use client"

import { usePathname } from 'next/navigation'
import React, { useState, FormEvent, useRef, useEffect } from 'react'
import "./dropdown.css";
import './loader.js';
export default function Footer() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts


    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const token = formData.get("entry.156039453");
    const email = formData.get("entry.1074342250");
    const name = formData.get("entry.1396483511");
    const message1 = formData.get("entry.828181153");
    const subscribe = formData.get("entry.725092952");
    await fetch("/api/handler", {
      method: "POST",
      body: JSON.stringify({ token, email, name, message1, subscribe }),
    });
    console.log(JSON.stringify(Object.fromEntries(new FormData(event.target as HTMLFormElement).entries())))

  }

  const formRef = useRef<HTMLFormElement>(null);
  const pathname = usePathname()
  // 
  return (
    <footer className="overflow-hidden">
      <div className="ourcontactcontainer mt-32 w-full bg-black p-6">
        <div className="flex bg-white md:p-8 p-2 w-fit rounded-lg gap-10 mx-auto md:flex-row flex-col">
          <form method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSdv9uVdvzgAM6tgta_mNhfJdxoV2lCD_dELjtDCABY28iHyWw/formResponse" ref={formRef} onSubmit={handleSubmit} className="rounded-lg flex flex-col gap-y-1 w-[90%] md:w-[600px] mx-auto mb-12">

            <h1 className=" text-center text-3xl font-thin mb-2">Contact Us</h1>
            <label className="ml-3 -mb-2 mt-3" htmlFor="name">Name</label>
            <input className="border-b-2 border-black bg-transparent" type="text" name="entry.1396483511" placeholder=" Your Name" required />
            <label className="ml-3 -mb-2 mt-3" htmlFor="email ">Email</label>
            <input className="border-b-2 border-black bg-transparent" type="email" name="entry.1074342250" placeholder=" contact@your-email.com" required />
            <label className="ml-3" htmlFor="message">Message</label>
            <textarea name="entry.828181153" id="" className="h-[100px] border-2"></textarea>
            <input type="submit" value="Contact us" className="hover:cursor-pointer bg-blue-600 text-white mt-7 hover:bg-yellow-500 hover:border-transparent" />
            <input hidden name="entry.156039453" defaultValue={pathname} />
          </form>
          <div className="">
            {/* https://www.embedgooglemap.net/ md:my-20 md:mb-0*/}
            <div className="flex flex-col ">
              <h1 className=" text-center text-3xl font-thin mb-2">Ways to find us</h1>

              <div className="hidden md:block"
                dangerouslySetInnerHTML={{
                  __html:
                    '<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="212" id="gmap_canvas" src="https://maps.google.com/maps?q=north%20campus%20enactus&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br><style>.mapouter{position:relative;text-align:right;height:212px;width:600px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:212px;width:600px;}</style></div></div>',
                }} ></div>
              <div className="md:hidden w-[90vw]"
                dangerouslySetInnerHTML={{
                  __html:
                    '<div class="mapouter"><div class="gmap_canvas"><iframe width="600" class="w-[90vw]" height="212" id="gmap_canvas" src="https://maps.google.com/maps?q=north%20campus%20enactus&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br><style>.mapouter{position:relative;text-align:right;height:212px;width:600px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:212px;width:600px;}</style></div></div>',
                }} ></div>
            </div>
            <div className="flex flex-row [&>*]:mx-1 md:[&>*]:mx-5 my-2 mt-7">

              <div className="w-[24px] logotoyellow"
                dangerouslySetInnerHTML={{
                  __html:
                    '<a href="https://www.linkedin.com/company/enactus-sheffield-limited/"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>',
                }}></div>
              <div className="w-[24px] logotoyellow"
                dangerouslySetInnerHTML={{
                  __html:
                    '<a href="https://www.instagram.com/enactussheffield_/"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg></a>',
                }}></div>
              <div className="w-[24px] logotoyellow"
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
                }}></div>
              <div className="w-[24px] logotoyellow"
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
                }}></div>
            </div>
            <h3 className='logotoyellow'>Email:</h3>
            <a className="underline text-blue-800 hover:text-yellow-500" href="mailto:contact@enactussheffield.org">contact@enactussheffield.org</a>
            <h3>Phone:</h3>
            <a className="underline text-blue-800 hover:text-yellow-500" href="tel:+44011422244444">University of Sheffield</a>

          </div>
        </div>


        {/* <div className="bg-black text-white pb-10 pt-12">
          <h1 className="w-full text-center text-4xl font-semibold mb-10 bg-">Subscribe to our Newsletter</h1>
          <form method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSdv9uVdvzgAM6tgta_mNhfJdxoV2lCD_dELjtDCABY28iHyWw/formResponse" ref={formRef} onSubmit={handleSubmit} className="flex flex-row flex-wrap  w-[90%] md:w-[600px] mx-auto gap-x-4 justify-center items-center">
            <label htmlFor="email ">Email</label>
            <input type="text" name="entry.1074342250" placeholder="subscribe@sheffield.ac.uk  " className=" border-2" required />
            <input hidden name="entry.156039453" defaultValue={pathname} />
            <input hidden name='entry.725092952' defaultValue={"true"} />
            <input type="submit" value="Follow" className="hover:cursor-pointer p-1 rounded bg-blue-600 text-white hover:bg-yellow-500 hover:border-transparent block px-3" />
          </form>
        </div> */}

      </div>
      <div className="bg-[url('/files/Site%20Files/leaf.jpg')] flex flex-col justify-center items-center text-white ">
        <div className="flex flex-row">
          <div className="">

          </div>
          <div className="">

          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">

          {/* <div className="md:ml-12 flex flex-col max-w-[90vw]">
            <h3>Links:</h3>

         </div> */}

        </div>
        <div className="my-7">&copy; Enactus Sheffield Limited {new Date().getFullYear()}. All rights reserved.</div>

      </div>
    </footer>
  );
}
// $.ajax({
//   url: "https://docs.google.com/forms/d/e/1FAIpQLSdv9uVdvzgAM6tgta_mNhfJdxoV2lCD_dELjtDCABY28iHyWw/formResponse", // pathname, subscribe,name
//   data: JSON.stringify(Object.fromEntries(new FormData(event.target as HTMLFormElement).entries())),
//   type: "POST",
//   dataType: "xml",
//   statusCode: { 200: function() { } }
// });