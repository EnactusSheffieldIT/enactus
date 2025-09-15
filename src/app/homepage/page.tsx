"use client"
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useRef } from "react"; // <-- added useRef and useEffect
import gsap from "gsap";                // <-- import gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; // <-- import ScrollTrigger
import Typewriter from 'typewriter-effect';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Create refs for the left and right containers in the #project section
  const leftProjectRef = useRef<HTMLDivElement>(null);
  const rightProjectRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  // Initialize GSAP and scroll trigger on mount
  useEffect(() => {
    // Initial animation for the logo
    gsap.set(".theprojectcardlogo", {
      position: "fixed",
      top: "30%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      scale: 2,
      zIndex: 100
    });

    // Create a timeline for the logo animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ourprojectcontainer",
        start: "bottom 100%",
        end: "bottom -20%",
        scrub: 1,
        markers: false,
        onUpdate: (self) => {
          // Calculate scale based on scroll progress
          const scale = gsap.utils.interpolate(2, 1, self.progress);
          const yPercent = gsap.utils.interpolate(-50, 0, self.progress);
          // Modified xPercent interpolation to move towards left
          const xPercent = gsap.utils.interpolate(-50, 0, self.progress);
          const position = self.progress === 1 ? "relative" : "fixed";
          const left = gsap.utils.interpolate(50, 0, self.progress);

          gsap.set(".theprojectcardlogo", {
            scale: scale,
            yPercent: yPercent,
            xPercent: xPercent,
            position: position,
            top: position === "relative" ? "auto" : "30%",
            left: position === "relative" ? "auto" : `${left}%`
          });
        }
      }
    });
    // Original project scroll animation
    if (leftProjectRef.current && rightProjectRef.current && rightContentRef.current ) {
      const numProjects = window.innerWidth > 768 ? 7.5 : 6;
      const distance = window.innerHeight * (numProjects - 1);

      gsap.timeline({
        scrollTrigger: {
          trigger: ".ourprojectcontainer",
          start: "top top",
          end: () => `+=${distance}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          markers: false,
        }
      }).to(rightContentRef.current, {
        y: -distance,
        ease: "none"
      });
    }

    // Timeline animations
    gsap.from(".timeline-item", {
      scrollTrigger: {
        trigger: ".ourachievementcontainer",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1
    });

    gsap.from(".timeline-dot", {
      scrollTrigger: {
        trigger: ".ourachievementcontainer",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      },
      scale: 0,
      stagger: 0.3,
      duration: 0.5
    });

  }, []);
  return (
    <main className="text-black overflow-hidden">
      {/* bg-yellow-50  */}
      <div className="containcontainerhero bg-[url('/main/hero-award.jpg')] w-full bg-no-repeat bg-cover min-h-[100vh] md:h-[700px] relative flex justify-center items-center">
        <div className="containerhero w-full bg-black/70 min-h-[100vh] md:h-[700px] h-full flex flex-col items-center p-5 md:p-0 relative justify-start ">
          <h1 className="text-5xl md:text-6xl text-white font-extrabold md:leading-[80px] w-[80%] mt-12 lg:mt-64 hero-introduction uppercase">
            Enactus Sheffield:{" "}
            <br />
            <div className="inline">
              <Typewriter
                options={{
                  strings: ['IMPROVING LIVES AND TRANSFORMING COMMUNITIES', 'Where passion meets purpose, and dedication ignites change!'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('IMPROVING LIVES AND TRANSFORMING COMMUNITIES')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Where passion meets purpose, and dedication ignites change!')
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
              />
            </div>
          </h1>


        </div>

        {/* Add the wave divider and partner section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[60px]"
            style={{ transform: 'rotate(180deg)' }}
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-yellow-400"
            ></path>
          </svg>
        </div>
      </div>

      <div className="" id="about"></div>
      <div className="aboutEnactus w-[80%] mx-auto my-32 text-xl">
        <h1 className="w-full text-center text-5xl font-semibold my-14">What is Enactus?</h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* <Image src="/main/logo.png" alt="Vercel Logo" width={300} height={300} className="mb-6"></Image> */}
          <iframe
// srcDoc can lazyload youtube video making website load faster
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/2MTsFX2pw6M?autoplay=1><img src=https://img.youtube.com/vi/2MTsFX2pw6M/hqdefault.jpg alt='What is Enactus? – Enactus'><span>▶</span></a>"
          width="560" height="315" src="https://www.youtube.com/embed/2MTsFX2pw6M?si=LK0KqW9yp-w0cSBw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <div className="flex flex-col md:w-[50%] md:ml-10">
            <p className="bg-white p-2 rounded-2xl border-b-2 border-black border-l-4 "><b className="text-5xl text-yellow-500">EN</b> trepreneurial - having the perspective to see an opportunity and the talent to create value from that opportunity; </p>
            <p className="bg-white p-2 rounded-2xl border-b-2 border-black border-l-4  mt-4">        <b className="text-5xl text-yellow-500">ACT</b>ion - the willingness to do something and the commitment to see it through even when the outcome is not guaranteed; </p>
            <p className="bg-white p-2 rounded-2xl border-b-2 border-black border-l-4  mt-4"> <b className="text-5xl text-yellow-500">US</b>- a group of people who see themselves connected in some important way; individuals that are part of a greater whole..</p>

          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-flow-row mb-10 mt-10 text-center gap-16 font-">

          <div className="bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black ">
            <Image
              src="/files/Site Files/Enactus+Team+Clipart.png" width={400} height={200} alt="Vercel Logo" className="block w-[200px] md:w-[400px]"></Image>
            <p>Our members innovate, research and manage social impact projects which provide sustainable solutions to local issues. Being part of Enactus is a unique and valuable experience as it facilitates student development in a broad range of areas, such as commercial and social entrepreneurship, technical experience and confidence building.</p>
          </div>
          <div className="bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black ">
            <Image
              src="/files/Site Files/Enactus+Trophy+Clipart.png" width={400} height={200} alt="Vercel Logo" className="block w-[200px] md:w-[400px]"></Image>
            <p>We believe that Enactus is a great stepping stone to future employment, and a unique opportunity to learn a variety of skills in different fields.
              Every year, we will complete in National Expo in honour to our hard work over the year.</p>
          </div>
        </div>
      </div>
      <div
        className="ourprojectcontainer h-screen bg-yellow-400/90"
      >
        <div className="h-screen flex flex-col justify-center items-center">

          <div className="flex flex-row w-full h-full">
            <div ref={leftProjectRef} className="w-1/2 items-center justify-center hidden md:flex">
              <div className="theprojectcardlogo">
                <h1 className="text-center text-2xl font-semibold pb-10">Our projects</h1>
                {/* mb-14 */}
                {/* <Image
                  src="/main/logo.png"
                  alt="Enactus Logo"
                  width={400}
                  height={400}
                  className=""
                /> */}
                <div className="flex flex-col items-center">
                  <div className="flex flex-row">
                    <Image width={100} height={100} className="block mix-blend-multiply" src={"/files/all logos/Code Creators.png"} alt="project logo"></Image>
                    <Image width={100} height={100} className="block mix-blend-multiply" src={"/main/EMARKETING.png"} alt="project logo"></Image>
                  </div>
                  <div className="flex flex-row">
                    <Image width={150} height={100} className="block mix-blend-multiply" src={"/files/intell.jpg"} alt="project logo"></Image>
                    <Image width={100} height={100} className="block mix-blend-multiply" src={"/files/carte/carte logo capitals transparent background.png"} alt="project logo"></Image>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={rightProjectRef}
              className="w-screen md:w-1/2 overflow-hidden relative"
              id="project-scroll"
            >
              <div
                ref={rightContentRef}
                className="w-full"
              >
                <p className="flex-col items-center  justify-center pb-64 project-card h-screen p-8  hidden md:flex"></p>

                <p className="flex-col items-center  justify-center pb-64 project-card h-[50vh] p-8  hidden md:flex"></p>
                <ProjectCard color="bg-blue-50" link="/codecreators" image="/files/all logos/Code Creators.png" title="CodeCreators" content="Introduces students to programming in Python, supplementing their education in analytics, computer science and digital infrastructure.This year, we want to expand Code Creators and develop a fun course that we can offer to school students. " />
                <ProjectCard color="bg-yellow-100" link="/emarketing" image="/main/EMARKETING.png" title="E-marketing" content="(Formerly Be Social Flamingo) EMarketing is Enactus Sheffield's talented internal PR team. They provide digital marketing for Enactus Sheffield projects and work to promote digital literacy and social media skills across Enactus and the university. " />
                <ProjectCard color="bg-red-50" link="/carte" image="/files/carte/carte logo capitals transparent background.png" title="OnTarget" content="Still in its initial stages, this project works together with Sheffield Voices, to bring students and people with learning disability together to create and sell cards. The profit will is fed back into supporting the Art Programme at Sheffield Voices. " />
                <ProjectCard color="bg-blue-50" link="/ii" image="/files/intell.jpg" title="Intellect interpreters" content="Intellect interpreters is a university interpreting service that helps the community with translation services they may require. Our team will be made of students who can speak another language fluently and they will be trained to help people e.g. refugees with filling out forms and making appointments." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourachievementcontainer my-32">
        <h1 className="w-full text-center text-5xl font-semibold mb-14">Our Achievements</h1>
        <div className="grid md:grid-cols-2 justify-items-center gap-3 md:gap-12 md:w-[90%] mx-auto text-center md:text-start max-w-[1000px]">
          <div className="col-span-2 p-5 !text-center">
            <h1 className=" text-4xl font-semibold">National Expo</h1>
            <p className="text-xl">For the last decade we have been participating in the UK National Expo, where teams from across the country share their fantastic accomplishments.</p>
          </div>
        </div>






        <div className="relative flex justify-center">
          {/* Timeline line */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-500"></div>

          {/* Timeline content */}
          <div className="w-[80%] max-w-[1000px] translate-x-[42px]">
            <div className="timeline-item flex items-center mb-20">
              <div className="w-[45%] text-right pr-8">
                <div className="text-3xl font-bold">2024</div>
                <p>Can Sheffield be the winner of Enactus World Cup? Stay tuned to our National Expo in 25th April, 2025</p>
              </div>   <div className="timeline-dot w-4 h-4 bg-yellow-500 rounded-full z-10"></div>
              <div className="w-[45%] pl-8">
                <Image
                  src="/main/hero-award.jpg"
                  width={400}
                  height={300}
                  alt="2022 Award"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="timeline-item flex items-center mb-20">
              <div className="w-[45%] pl-8">
                <Image
                  src="/main/hero-award.jpg"
                  width={400}
                  height={300}
                  alt="2022 Award"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="timeline-dot w-4 h-4 bg-yellow-500 rounded-full z-10"></div>
              <div className="w-[45%] pl-8">
                <div className="text-3xl font-bold">2023</div>
                <p>This year we got into regional finals and compete in top 15 national</p>
              </div>

            </div>

            <div className="timeline-item flex items-center">
              <div className="w-[45%] text-right pr-8">
                <div className="text-3xl font-bold">2022</div>
                <p className="mb-4">National Runner up!</p>
                <p>This year we came second in the National Competitions out of 60 other Enactus teams!</p>
              </div>
              <div className="timeline-dot w-4 h-4 bg-yellow-500 rounded-full z-10"></div>
              <div className="w-[45%] pl-8">
                <Image
                  src="/main/hero-award.jpg"
                  width={400}
                  height={300}
                  alt="2022 Award"
                  className="rounded-lg shadow-lg"
                />
              </div> </div> </div> </div>
        

          {/* <div className="flex col-span-2 p-10 text-4xl">
            <h1>Customer Reviews</h1>
          </div>
          <div className="col-span-2 ">
            <div className="grid md:grid-cols-3 justify-items-center gap-12 md:w-[90%] mx-auto">
              <Review stars={4} name="Ben Simpson" comment="I would definitely recommend this service. I am happy to work with Enactus Sheffield again"></Review>
              <Review stars={3} name="Ben Simpson" comment="I would definitely recommend this service. I am happy to work with Enactus Sheffield again"></Review>
              <Review stars={5} name="Ben Simpson" comment="I would definitely recommend this service. I am happy to work with Enactus Sheffield again"></Review>
              <Review stars={4} name="Ben Simpson" comment="I would definitely recommend this service. I am happy to work with Enactus Sheffield again"></Review>
              <Review stars={3} name="Ben Simpson" comment="I would definitely recommend this service. I am happy to work with Enactus Sheffield again"></Review>
              <Review stars={5} name="Ben Simpson" comment="I would definitely recommend this service. I am happy to work with Enactus Sheffield again"></Review>
            </div>
          </div> */}
        </div>
      <div id="contact"></div>
    </main >
  )
}