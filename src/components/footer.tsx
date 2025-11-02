"use client"
import Image from "next/image";

import { usePathname } from 'next/navigation'
import React, { useState, FormEvent, useRef, useEffect } from 'react'
import "./dropdown.css";
import './loader.js';
export default function Footer() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [random1, setRandom1] = useState<number>(5)
  const [random2, setRandom2] = useState<number>(4)

  useEffect(() => {
    setRandom1(Math.floor(Math.random() * 10) + 1)
    setRandom2(Math.floor(Math.random() * 10) + 1)
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget as HTMLFormElement)

    const antibot = Number(formData.get("antibot"))
    if (antibot !== random1 + random2) {
      setIsLoading(false)
      setError("Wrong answer")
      return
    }

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdv9uVdvzgAM6tgta_mNhfJdxoV2lCD_dELjtDCABY28iHyWw/formResponse",
        {
        method: "POST",
        body: formData,
        mode: "no-cors",
        }
      )

      setIsSubmitted(true);
    } catch (err) {
      setError("Error submitting form")
    } finally {
      setIsLoading(false)
    }
  }


  const formRef = useRef<HTMLFormElement>(null);
  const pathname = usePathname()
  // 
  return (
    <footer className="overflow-hidden">
      <div className="ourcontactcontainer w-full bg-black p-6">
        <div className="flex bg-white md:p-8 p-2 w-fit rounded-lg gap-10 mx-auto md:flex-row flex-col">
          <form ref={formRef} onSubmit={handleSubmit} className="rounded-lg flex flex-col gap-y-1 w-[90%] md:w-[600px] mx-auto mb-12">
            {!isSubmitted && 
              <>
                <h1 className=" text-center text-3xl font-thin mb-2">Contact Us</h1>
                <label className="ml-3 -mb-2 mt-3" htmlFor="name">Name</label>
                <input className="border-b-2 border-black bg-transparent" type="text" name="entry.1396483511" placeholder=" Your Name" required />
                <label className="ml-3 -mb-2 mt-3" htmlFor="email ">Email</label>
                <input className="border-b-2 border-black bg-transparent" type="email" name="entry.1074342250" placeholder=" contact@your-email.com" required />
                <label className="ml-3" htmlFor="message">Message</label>
                <textarea name="entry.828181153" id="" className="h-[100px] border-2"></textarea>
                <label className="ml-3" htmlFor="antibot">What is {random1} + {random2}?</label>
                <input type="number" name="antibot" required className="border-b-2 border-black bg-transparent" />
                <button type="submit" disabled={isLoading} className={`hover:cursor-pointer  text-white mt-7 hover:bg-yellow-500 hover:border-transparent ${isLoading ? 'bg-gray-500' : 'bg-blue-600'}`}>{isLoading ? 'Loading' : 'Submit'}</button>
                <input hidden name="entry.156039453" defaultValue={pathname} />
                <p className="text-red-500">{error}</p>
              </>
            }
            {isSubmitted &&
              <h4 className="text-4xl text-center mt-auto mb-auto">Thanks for Submitting!</h4>
            }
          </form>
          <div className="">
            <div className="flex flex-col ">
              <h1 className=" text-center text-3xl font-thin mb-2">Ways to find us</h1>

              <div className="mapouter">
                <div className="gmap_canvas">
                  <div className="relative w-full md:w-[600px] h-[270px] mx-auto">
                    <iframe id="gmap_canvas" className= "w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.84857658308!2d-1.4857545235266423!3d53.38175877229961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879827f5fa2c59b%3A0xbb0e179582dae894!2sElla%20Armitage%20Building!5e0!3m2!1sen!2suk!4v1757966129168!5m2!1sen!2suk"></iframe>
                    <br />
                    <a href="https://www.embedgooglemap.net"></a>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mt-6">
                <div className="flex-1">
                  <h1 className="text-2xl font-thin">Alternative Contact</h1>
                  <p className="">
                    Email: <a href="mailto:enactussheffieldit@gmail.com" className="underline hover:text-yellow-500">enactussheffieldit@gmail.com</a>
                  </p>
                  <p className="mb-2">
                    DM: <a href="https://www.instagram.com/enactussheffield_/" className="underline hover:text-yellow-500">Instagram</a>
                  </p>
                </div>

                <div className="flex-1">
                  <h1 className="text-2xl font-thin">Additional Links</h1>
                  <div className="flex flex-col">
                    <a className="underline hover:text-yellow-500 duration-150" href="https://docs.google.com/forms/d/e/1FAIpQLSe1KD4HgrdXK8z7YKPpV2awUdCjBS5FCgKbIpwMqok9l3OGhQ/viewform?usp=header" target="_blank">Complaints Google Form Link</a>
                    <a className="underline hover:text-yellow-500 duration-150" href="files/Enactus Sheffield Complaints Policy.pdf" target="_blank">Complaints Policy Download</a>
                  </div>
                </div>

              </div>
              </div>
            </div>
            {/* <h3 className='logotoyellow'>Email:</h3>
            <a className="underline text-blue-800 hover:text-yellow-500" href="mailto:contact@enactussheffield.org">contact@enactussheffield.org</a> */}
          </div>
        </div>


        {/* <div className="bg-black text-white pb-10 pt-12">
          <h1 className="w-full text-center text-4xl font-semibold mb-10 bg-">Subscribe to our Newsletter</h1>
          <form method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSdv9uVdvzgAM6tgta_mNhfJdxoV2lCD_dELjtDCABY28iHyWw/formResponse" ref={formRef} onSubmit={handleSubmit} className="flex flex-row flex-wrap  w-[90%] md:w-[600px] mx-auto gap-x-4 justify-center items-center">
            <label htmlFor="email ">Email</label>
            <input type="text" name="entry.1074342250" placeholder="subscribe@sheffield.ac.uk  " className=" border-2" required />
            <input hidden name="entry.156039453" defaultValue={pathname} />
      </div>
      </div>
      <div className="bg-[url('/files/Site%20Files/leaf.jpg')] flex flex-col justify-center items-center text-white ">
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
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0 justify-center">

          <Image
            src="/files/footer/Black_Badge_PolicyBee.png"
            width={60}
            height={60}
            alt="idk"
          />

          <Image
            src="/files/footer/emerge.png"
            width={60}
            height={60}
            alt="Emerge"
          />

          <Image
            src="/files/footer/university-of-sheffield-seeklogo.png"
            width={198}
            height={60}
            alt="University of Sheffield"
          />

          <Image
            src="/files/footer/enactus.png"
            width={100}
            height={60}
            alt="Enactus UK"
          />
        </div>
        <br></br>
      </div>
    </footer>
  );
}