import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
export default function Home() {
    return(
        <main>
        <div className="containcontainerhero bg-[url('/main/hero-award.jpg')] w-full bg-no-repeat bg-cover h-[100vh] md:h-[800px]">
          <div className="containerhero  w-full bg-black/50 h-full flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl text-white font-extrabold md:leading-[80px] w-[80%]">

              Tackling the <br className="h-[60px]" />
              problems of today, whilst creating the leaders of tomorrow.
            </h1>
          </div>
        </div>
        <div className="aboutEnactus w-[80%] mx-auto my-32">
          <h1 className="w-full text-center text-5xl font-semibold my-14">What is Enactus?</h1>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <Image src="/main/logo.png" alt="Vercel Logo" width={300} height={300} className="mb-6" ></Image>
            <div className="flex flex-col w-[50%] ml-10">
              <p><b className="text-5xl text-yellow-500">EN</b> trepreneurial - having the perspective to see an opportunity and the talent to create value from that opportunity; </p>
            <p className="mt-4">        <b className="text-5xl text-yellow-500">ACT</b>ion - the willingness to do something and the commitment to see it through even when the outcome is not guaranteed; </p>
            <p className="mt-4"> <b className="text-5xl text-yellow-500">US</b>- a group of people who see themselves connected in some important way; individuals that are part of a greater whole..</p>
        
            </div>
              </div>
          <div className="grid md:grid-cols-3 grid-flow-row mb-24 mt-10 text-center gap-16">

            <div className="flex  flex-col items-center">
              <Image src="/main/EnactusUniversityClipart.png" width={400} height={200} alt="Vercel Logo" className="block" ></Image>
              <p>Enactus Sheffield is one of over 1,700 Enactus teams around the world, all working on developing social impact projects.



                Student-led social enterprise, which sits within the University’s Partnerships and Regional Engagement department</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/files/Site Files/Enactus+Team+Clipart.png" width={400} height={200} alt="Vercel Logo" className="block"></Image>
              <p>Our members innovate, research and manage social impact projects which provide sustainable solutions to local issues. Being part of Enactus is a unique and valuable experience as it facilitates student development in a broad range of areas, such as commercial and social entrepreneurship, technical experience and confidence building.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/files/Site Files/Enactus+Trophy+Clipart.png" width={400} height={200} alt="Vercel Logo" className="block"></Image>
              <p>We believe that Enactus is a great stepping stone to future employment, and a unique opportunity to learn a variety of skills in different fields.

                Every year, we will complete in National Expo in honour to our hard work over the year.</p>
            </div>
          </div>
        </div>
        <div className="ourprojectcontainer my-32">
          <h1 className="w-full text-center text-5xl font-semibold mb-14 mt-64">Our project</h1>
          <div className="grid md:grid-cols-2 grid-flow-row w-auto gap-3 text-center justify-items-center">
            <ProjectCard image="/files/all logos/OnTarget Logo.png" title="OnTarget" content="Having established a partnership with Sheffield Wednesday -  OnTarget, aims to increase employability prospects of students in Sheffield, and promote the inclusion of at-risk young people through mentor-based activities and events." />
            <ProjectCard image="/files/all logos/Code Creators.png" title="CodeCreators" content="Introduces students to programming in Python, supplementing their education in analytics, computer science and digital infrastructure.This year, we want to expand Code Creators and develop a fun course that we can offer to school students. " />
            <ProjectCard image="/main/EMARKETING.png" title="E-marketing" content="(Formerly Be Social Flamingo) EMarketing is Enactus Sheffield's talented internal PR team. They provide digital marketing for Enactus Sheffield projects and work to promote digital literacy and social media skills across Enactus and the university. "></ProjectCard>
            <ProjectCard image="/files/vape drop/vapedrop_logo_edited.jpg" title="VapeDrop" content="A new local project, is still in its research and development stage. VD focuses on collecting disposable vapes (electronic cigarettes) by introducing our vape drop stop baskets that will be distributed throughout campus, disassembling them and recycling some of their components." />
            <ProjectCard image="/files/carte/carte logo capitals transparent background.png" title="OnTarget" content="Still in its initial stages, this project works together with Sheffield Voices, to bring students and people with learning disability together to create and sell cards. The profit will is fed back into supporting the Art Programme at Sheffield Voices. " />
            <ProjectCard image="/files/all logos/OnTarget Logo.png" title="Intellect interpreters" content="Intellect interpreters is a university interpreting service that helps the community with translation services they may require. Our team will be made of students who can speak another language fluently and they will be trained to help people e.g. refugees with filling out forms and making appointments." />
          </div>
        </div>
        <div className="ourachievementcontainer my-32">
          <h1 className="w-full text-center text-5xl font-semibold mb-14">Our Achievement</h1>
            <div className="grid md:grid-cols-2 justify-items-center">
              <div className="flex col-span-2 p-5 text-4xl">
                <h1>National Expo</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="">2023</div>
                <p>adakdj</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="">2021</div>
                <p>adakdj</p>
              </div>
              <div className="flex col-span-2 flex-col justify-center items-center">
                <div className="">2022 Runner Up!</div>
                <div className="flex flex-row md:w-[50%] ">
                  <Image src="/files/carte/IMG_6181.jpg" width={400} height={200} alt="Vercel Logo"></Image>
                  <p>For the last decade we have been participating in the UK National Expo, where teams from across the country share their fantastic accomplishments. This year we came second in the National Competitions out of 60 other Enactus teams!</p>
                </div>
              </div>
              <div className="flex col-span-2 p-5 text-4xl">
                <h1>Succssful story</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="">motion.org</div>
                <p>adakdj</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="">motion.org</div>
                <p>adakdj</p>
              </div>
              <div className="flex col-span-2 p-5 text-4xl">
                <h1>Our Customer</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="">Ben Simpsion</div>
                5-star
                <p>adakdj</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="">Ben Simpsion</div>
                5-star
                <p>adakdj</p>
              </div>
            </div>
        </div>
        <div className="ourcommitteecontainer my-32">
          <h1 className="w-full text-center text-5xl font-semibold mb-14">Meet the committee</h1>
          <Image
                src="/files/Site Files/image.png" width={1000} height="0" alt="Vercel Logo" className="block mx-auto"></Image>
          
        </div>
        <div className="ourcontactcontainer my-32">
          <h1 className="w-full text-center text-5xl font-semibold mb-14">Contact US</h1>
         <form action="post" className="flex flex-col gap-y-1 w-[90%] md:w-[600px] mx-auto">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Lucy Fox"/>
          <label htmlFor="email ">Email</label>
          <input type="text" name="email" placeholder="contact@enactussheffield.org"/>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="" className="h-[100px]"></textarea>
         </form>
          
        </div>
      </main>
    )
}