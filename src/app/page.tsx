
"use client"
import Head from "../components/header";
import Image from "next/image";
import { useEffect, useRef } from "react"; // <-- added useRef and useEffect
import gsap from "gsap";                // <-- import gsap
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import Foot from "../components/footer"
export default function Home() {
  useEffect(() => {

    // Timeline animations
    gsap.from(".project-item", {
      scrollTrigger: {
        trigger: ".ourprojectscontainer",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1
    });

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
    <>
      <Head></Head>
      <main className="text-black overflow-hidden">
      {/* bg-yellow-50  */}
      <div className="containcontainerhero bg-[url('/main/hero-award.jpg')] w-full bg-no-repeat bg-cover min-h-[100vh] md:h-[700px] relative flex justify-center items-center">
        <div className="containerhero w-full bg-black/70 min-h-[100vh] md:h-[600px] h-full flex flex-col items-center p-5 md:p-0 relative justify-start ">
          <h1 className="text-3xl md:text-6xl text-white font-extrabold md:leading-[80px] w-[90%] mt-32 lg:mt-44 hero-introduction uppercase md:p-10 flex flex-col">
            Enactus Sheffield:{" "}
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
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSd6RnK9K87Fh9sst1oHiv36ZCZVoRDVQLmWcHANXpUG9Yrhpg/viewform?usp=dialog"
            className="sm:mt-8 border-2 p-3 text-center hover:bg-white hover:text-black border-white text-white text-xl sm:text-3xl font-extrabold absolute bottom-20"
            target="_blank"
          >
            We are currently looking for new members: <br></br> CLICK HERE TO REGISTER NOW!
          </Link>
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

      <div id="about" className="aboutEnactus w-[80%] mx-auto text-xl">
        <h1 className="w-full text-center text-4xl md:text-5xl font-semibold my-14">What is Enactus?</h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col md:w-[50%] md:ml-10">
            <p className="bg-white p-2 rounded-2xl border-b-2 border-black/50 border-l-4 "><b className="text-5xl text-yellow-500">EN</b> trepreneurial - having the perspective to see an opportunity and the talent to create value from that opportunity; </p>
            <p className="bg-white p-2 rounded-2xl border-b-2 border-black/50 border-l-4  mt-4">        <b className="text-5xl text-yellow-500">ACT</b>ion - the willingness to do something and the commitment to see it through even when the outcome is not guaranteed; </p>
            <p className="bg-white p-2 rounded-2xl border-b-2 border-black/50 border-l-4  mt-4"> <b className="text-5xl text-yellow-500">US</b>- a group of people who see themselves connected in some important way; individuals that are part of a greater whole..</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-flow-row mb-10 mt-10 text-center gap-16">
          <div className="items-center bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50">
            <Image
              src="/files/enactus/enactus_sheffield_logo.png" width={400} height={200} alt="Team" className="block w-[200px] md:w-[520px]"></Image>
            <p>Enactus Sheffield is a student social enterprise company, located at the University of Sheffield. Our student volunteers run local impact projects, helping local charities and individuals in need in society. Working towards the 17 UN Sustainable Development Goals, Enactus Sheffield is a part of the international network of Enactus Students.</p>
          </div>
          <div className="bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50">
            <Image
              src="/files/Site Files/Enactus+Team+Clipart.png" width={400} height={200} alt="Team" className="block w-[200px] md:w-[400px]"></Image>
            <p>Our members innovate, research and manage social impact projects which provide sustainable solutions to local issues. Being part of Enactus is a unique and valuable experience as it facilitates student development in a broad range of areas, such as commercial and social entrepreneurship, technical experience and confidence building.</p>
          </div>
          <div className="bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50">
            <Image
              src="/files/Site Files/Enactus+Trophy+Clipart.png" width={400} height={200} alt="Trophy" className="block w-[200px] md:w-[400px]"></Image>
            <p>We believe that Enactus is a great stepping stone to future employment, and a unique opportunity to learn a variety of skills in different fields.
              Every year, we will complete in National Expo in honour to our hard work over the year.</p>
          </div>
        </div>
      </div>

      <div className="ourprojectscontainer w-full bg-yellow-400">
        <div className="aboutEnactus w-[80%] mx-auto text-xl">
          <h1 className="w-full text-center text-4xl md:text-5xl font-semibold pt-10">Our Projects</h1>
          <div className="grid md:grid-cols-2 grid-flow-row mb-10 mt-10 text-center gap-16 font-">
            <div className="project-item bg-blue-50 p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50">
              <Image
                src="/files/codecreators/cc-logo-no-bg.png" width={300} height={200} alt="CodeCreators" className="block w-[200px] md:w-[400px]"></Image>
              <div className="font-extrabold text-3xl border-b-2 m-5 border-blue-500 hover:tracking-wide hover:text-blue-300">
                <h1>CODECREATORS</h1>
              </div>
              <p className="pb-5" >Our commercial project, CodeCreators, is a student run IT & Coding Class, targeting students and university staff to increase digital literacy and coding in languages such as Python and Google Sheets. Running since 2017, we have raised thousands of pounds towards Enactus initiatives, and looking to expand to directly supporting charities in the coming year.</p>
            </div>
            <div className="project-item bg-yellow-50 p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50 ">
              <Image
                src="/files/Blades&Brands-no-bg.png" width={400} height={200} alt="Blades and Brands" className="block w-[200px] md:w-[400px]"></Image>
              <div className="font-extrabold text-3xl border-b-2 m-5 border-yellow-500 hover:tracking-wide hover:text-yellow-300">
                <h1>BLADES AND BRANDS</h1>
              </div>
              <p className="pb-5" >Our in-house marketing team, currently called Blades and Brands, markets all of our projects online, such as on Instagram or LinkedIn, to raise awareness of our projects and our members achievements. </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-flow-row mb-10 mt-10 text-center gap-16 font-">
            <div className="project-item bg-red-50 p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50">
              <Image
                src="/files/carte/carte-no-bg.png" width={400} height={200} alt="Carte" className="block w-[200px] md:w-[400px]"></Image>
              <div className="font-extrabold text-3xl border-b-2 m-5 border-red-500 hover:tracking-wide hover:text-red-300">
                <h1>CARTE</h1>
              </div>
              <p className="pb-5">One of our other local impact projects, Carte, is a card manufacturing project, selling cards designed by members of local learning disability charities and community centres, raising money for those charities. Working with local charities such as Mencap, Keyring and Sheffield Voices, we seek to sell cards and tote bags in local markets and online to raise money for our local Sheffield charity partners.</p>
            </div>
            <div className="project-item bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50">
              <Image
                src="/files/intellectinterpreters/ii.png" width={400} height={200} alt="Intellect interpreters" className="block w-[200px] md:w-[400px] p-8 md:p-11"></Image>
              <div className="font-extrabold text-3xl border-b-2 m-5 border-black hover:tracking-wide hover:text-gray-400">
                <h1>INTELLECT INTERPRETERS</h1>
              </div>
              <p className="pb-5">One of our local impact projects, Intellect Interpreters, is a volunteering based project that provides free translation services for asylum seekers in the city of Sheffield. Working closely with the city of Sanctuary, a Sheffield Charity, our volunteers help with translation and interpretation at sessions during the week, as well as looking to find new ways to assist the charity though fundraising methods.</p>
            </div>
          </div>
        </div>
        <br></br>
      </div>

      <div className="ourteamcontainer w-full">
        <div className="aboutEnactus w-[80%] mx-auto text-xl">
          <h1 className="w-full text-center text-4xl md:text-5xl font-semibold pt-10">Meet The Team</h1>
          <div className="grid xl:grid-cols-3 grid-flow-row mb-10 mt-10 text-center gap-16 font-">
            <div className="project-item xl:col-start-2 bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50 ">
              <div className="font-extrabold text-2xl border-b-2 m-5 border-yellow-500">
                <h1>MANAGING DIRECTOR</h1>
              </div>
              <Image
                src="/files/enactus_team/ben.png" width={200} height={200} alt="Ben" className="block w-[200px] xl:w-[240px] rounded-xl"></Image>
              <div className="font-extrabold text-xl pb-5">
                <h1>BEN SIMPSON</h1>
              </div>
              <div className="font-extrabold text-xl">
                <h1>BA Business Management</h1>
              </div>
              <p className="pb-5" >The Managing Director ensures the smooth running of Enactus, chairs the meetings, assists all members in their day to day needs and reviews policy and governance decisions.</p>
            </div>
          </div>
          <div className="grid xl:grid-cols-4 grid-flow-row mb-10 mt-10 text-center gap-16 font-">
            <div className="project-item bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50">
              <div className="font-extrabold text-2xl border-b-2 m-5 border-yellow-500">
                <h1>PUBLIC RELATIONS DIRECTOR</h1>
              </div>
              <Image
                src="/files/enactus_team/jiunn.jpg" width={300} height={200} alt="Jiunn" className="block w-[200px] md:w-[400px] rounded-xl"></Image>
              <div className="font-extrabold text-xl pb-5">
                <h1>WEN JIUNN LOH</h1>
              </div>
              <div className="font-extrabold text-xl">
                <h1>MEng Electrical and Electronic Engineering</h1>
              </div>
              <p className="pb-5" >The PR Director role is responsible for the outreach of the team, focusing on social media engagement and promoting projects within Enactus Sheffield. The role includes organising a team of passionate individuals in marketing, creating media content and spreading the word of Enactus Sheffield together.</p>
            </div>
            <div className="project-item bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50 ">
              <div className="font-extrabold text-2xl border-b-2 m-5 border-yellow-500">
                <h1>HUMAN RESOURCES DIRECTOR</h1>
              </div>
              <Image
                src="/files/enactus_team/danica.jpg" width={400} height={200} alt="Danica" className="block w-[200px] md:w-[400px] rounded-xl"></Image>
              <div className="font-extrabold text-xl pb-5">
                <h1>DANICA BAUTISTA</h1>
              </div>
              <div className="font-extrabold text-xl">
                <h1>BA Business Management</h1>
              </div>
              <p className="pb-5" >The Human Resources Director is responsible for training members by handling inductions, facilitating handovers and, if necessary, conducting disciplinaries such as performance reviews, follow-up meetings, and/or dismissals. They are there to ensure members are well supported in order to achieve performance targets within Enactus Sheffield.</p>
            </div>
            <div className="project-item bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50">
              <div className="font-extrabold text-2xl border-b-2 m-5 border-yellow-500">
                <h1>FINANCE DIRECTOR</h1>
              </div>
              <Image
                src="/files/enactus/enactus_no_text.png" width={300} height={200} alt="Elena" className="block w-[200px] md:w-[400px] rounded-xl"></Image>
              <div className="font-extrabold text-xl pb-5">
                <h1>ELENA BOITAN</h1>
              </div>
              <div className="font-extrabold text-xl">
                <h1>BA Business Management and Economics</h1>
              </div>
              <p className="pb-5" >As Finance Director, I ensure the organisation remains financially stable and compliant, providing a solid foundation for projects to thrive and create meaningful community impact. At Enactus, I’m excited to combine my passion for numbers with my commitment to driving positive change - contributing to a community that values sustainable growth and strives to make the world a better place. I couldn’t be happier to be part of it!</p>
            </div>
            <div className="project-item bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50">
              <div className="font-extrabold text-2xl border-b-2 m-5 border-yellow-500">
                <h1>IT DIRECTOR</h1>
              </div>
              <Image
                src="/files/enactus_team/niall.png" width={300} height={200} alt="Niall" className="block w-[200px] md:w-[400px] rounded-xl"></Image>
              <div className="font-extrabold text-xl pb-5">
                <h1>NIALL DODDS</h1>
              </div>
              <div className="font-extrabold text-xl">
                <h1>MComp Computer Science</h1>
              </div>
              <p className="pb-5">The IT Director is resposible for all things IT in Enactus Sheffield. This role involes use of both software knowledge {"("}such as website management/coding{")"} as well as hardware knowledge {"("}such as ensuring IT equipment works{")"}. If any project requires IT assistance, it&apos;s the IT director&apos;s job to help.</p>
            </div>
          </div>
          <div className="grid xl:grid-cols-4 grid-flow-row mb-10 mt-10 text-center gap-16 font-">
            <div className="project-item xl:col-start-2 bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50">
              <div className="font-extrabold text-2xl border-b-2 m-5 border-yellow-500">
                <h1>INTELLECT INTERPRETERS PROJECT LEADER</h1>
              </div>
              <Image
                src="/files/enactus_team/suzy.jpg" width={300} height={200} alt="Suzy" className="block w-[200px] md:w-[400px] rounded-xl"></Image>
              <div className="font-extrabold text-xl pb-5">
                <h1>SUZY JOLLIFF</h1>
              </div>
              <div className="font-extrabold text-xl">
                <h1>BA Korean Studies with Japanese</h1>
              </div>
              <p className="pb-5" ></p>
            </div>
            <div className="project-item bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50">
              <div className="font-extrabold text-2xl border-b-2 m-5 border-yellow-500">
                <h1>CODECREATORS PROJECT LEADER</h1>
              </div>
              <Image
                src="/files/enactus_team/oli.png" width={300} height={200} alt="Oliver" className="block w-[200px] md:w-[400px] rounded-xl"></Image>
              <div className="font-extrabold text-xl pb-5">
                <h1>OLIVER GOODWIN-DAY</h1>
              </div>
              <div className="font-extrabold text-xl">
                <h1>MComp Computer Science</h1>
              </div>
              <p className="pb-5" ></p>
            </div>
          </div>
        </div>
        <br></br>
      </div>

      <div id="announcements" className="announcementcontainer w-full bg-yellow-400">
        <div className="aboutEnactus w-[80%] mx-auto text-xl">
          <h1 className="w-full text-center text-4xl md:text-5xl font-semibold pt-10">Announcements</h1>
          <div className="max-h-[500px] overflow-y-auto mt-10 mb-10 space-y-10">

            <div className="grid :grid-cols-1 grid-flow-row mb-10 mt-10 text-center gap-16 font-">
              <div className="project-item bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50 ">
                <div className="font-extrabold text-2xl border-b-2 m-5 border-yellow-500">
                  <h1>WE ARE HIRING!</h1>
                </div>
                <p className="pb-5" >We&apos;re currently hiring for all projects, if you&apos;re interested, follow the link in the navigation bar!</p>
              </div>
            </div>

          </div>
        </div>
        <br></br>
      </div>

      <div className="ourachievementcontainer my-32">
        <h1 className="w-full text-center text-4xl md:text-5xl font-semibold mb-14">Our Achievements</h1>
        <div className="grid md:grid-cols-2 justify-items-center gap-3 md:gap-12 md:w-[90%] mx-auto text-center md:text-start max-w-[1000px]">
          <div className="col-span-2 p-5 !text-center">
            <h1 className=" text-4xl font-semibold">National Expo</h1>
            <p className="text-xl">For the last decade we have been participating in the UK National Expo, where teams from across the country share their fantastic accomplishments.</p>
          </div>
        </div>

        <div className="relative flex justify-center">
          {/* Timeline line */}
          <div className=" md:flex absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-500"></div>

          {/* Timeline content */}
          <div className="w-[80%] max-w-[1000px] md:translate-x-[42px] translate-x-[8px]">
            <div className="timeline-item flex items-center mb-20">
              <div className="w-[45%] text-right pr-8">
                <div className="text-3xl font-bold">2024</div>
                <p>In 2024 we got in the top 20 in the nationals competition hosted in London, and are looking forward to next year&apos;s.</p>
              </div>   <div className="timeline-dot w-4 h-4 bg-yellow-500 rounded-full z-10"></div>
              <div className="w-[45%] pl-8">
                <Image
                  src="/files/nationals/london.jpg"
                  width={400}
                  height={300}
                  alt="2022 Award"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="timeline-item flex items-center mb-20">
              <div className="w-[45%] pr-5">
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
                <p>This year we got into regional finals and competed in the nationals competition.</p>
              </div>

            </div>

            <div className="timeline-item flex items-center">
              <div className="w-[45%] text-right pr-8">
                <div className="text-3xl font-bold">2022</div>
                <p className="mb-4">National Runner up!</p>
                <p>This year we came second in the nationals competition out of 60 other Enactus teams!</p>
              </div>
              <div className="timeline-dot w-4 h-4 bg-yellow-500 rounded-full z-10"></div>
              <div className="w-[45%] pl-8">
                <Image
                  src="/files/nationals/sheffield.jpg"
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
      <Foot></Foot>
    </>
  );
}
