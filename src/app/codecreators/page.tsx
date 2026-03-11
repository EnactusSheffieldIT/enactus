import Head from "../../components/header"
import Footer from "../../components/footer"
import Image from "next/image";
import "./codecreators.css"
export default function Home() {
    return (
      <>  
      <Head></Head>
      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <header className="text-center py-16 bg-white shadow-sm">
          <Image width={500} height={400} src="/files/codecreators/cc-logo-short.png"
            className="text-center mx-auto" alt="carte logo capitals transparent background.png" />
          <div className="max-w-5xl mx-auto">
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Teaching Vital Programming Skills to Empower Your Future
            </p>
          </div>
        </header>

        {/* About Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">What is CodeCreators?</h2>
            <p className="text-lg text-gray-700">
              CodeCreators is a project designed to teach vital programming skills to students of all levels—whether
              you&#39;re a beginner or seeking a refresher.
            </p>
            <p className="text-lg text-gray-700">
              Our 8-week Python course will equip you with the fundamentals of programming, helping you gain confidence
              and skills that are applicable to any modern tech role.
            </p>
          </div>
        </section>

        {/* Course Layout Section */}
        <section className="bg-blue-50 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">Course Layout</h2>
            <p className="text-center text-lg text-gray-700 mt-4">
              The course runs weekly starting the 4th of March 2025, every Wednesday from 2 PM to 3:30 PM.
            </p>
            <ul className="mt-8 space-y-4 text-gray-700 text-lg">
              <li>
                <b>Week 1:</b> Introduction - Variables, Data Types, Inputs, Basic Statements, and Arithmetic
              </li>
              <li>
                <b>Week 2:</b> Conditional Programming - If Statements, Switch Case
              </li>
              <li>
                <b>Week 3:</b> Loops - For, While, and Do loops
              </li>
              <li>
                <b>Week 4:</b> Arrays, Lists, and Tuples - Basics and Methods
              </li>
              <li>
                <b>Week 5:</b> Functions and Procedures
              </li>
              <li>
                <b>Week 6:</b> Libraries and Modules - Built into Python
              </li>
              <li>
                <b>Week 7:</b> NumPy + MatPlotLib - Basics and Uses
              </li>
            </ul>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">What&apos;s in it for you?</h2>
            <p className="text-lg text-gray-700">
              Upon completion of the course, you&apos;ll receive a certificate of achievement that you can showcase on
              your CV/Resume. Learn key programming skills that can be applied to any job role, and gain the foundations
              to learn other programming languages such as Java or C++.
            </p>
          </div>
        </section>

        {/* Pricing and Registration Section */}
        <section className="bg-blue-100 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">Interested in Joining?</h2>
            <p className="text-lg text-gray-700">
              The total cost is <b>£25 per person</b>. Apply with a friend and get £5 off each, making it <b>£20 per
              person</b>!
            </p>
            <p className="text-lg text-gray-700">
              Fill out the form below to register your interest, and we&apos;ll get back to you with more information:
            </p>
            <a
              href="https://forms.gle/Smv7LzegU2sJsMNm8"
              className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              target="_blank"
            >
              Apply Now
            </a>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">Meet the Team</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="text-center">
              <Image
                  width={100}
                  height={100}
                  src="/files/codecreators/oli.jpg"
                  alt="Oli"
                  className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
                />
                <p className="mt-4 font-semibold">Oli</p>
                <p className="text-gray-600">Project Leader</p>
              </div>
              <div className="text-center">
              <Image
                  width={100}
                  height={100}
                  src="/files/codecreators/cc-logo.png"
                  alt="Ajitha"
                  className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
                />
                <p className="mt-4 font-semibold">Ajitha</p>
                <p className="text-gray-600">Mentor</p>
              </div>
              <div className="text-center">
              <Image
                  width={100}
                  height={100}
                  src="/files/codecreators/vivan.png"
                  alt="Vivan"
                  className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
                />
                <p className="mt-4 font-semibold">Vivan</p>
                <p className="text-gray-600">Mentor</p>
              </div>
              <div className="text-center">
              <Image
                  width={100}
                  height={100}
                  src="/files/codecreators/cc-logo.png"
                  alt="Ayush"
                  className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
                />
                <p className="mt-4 font-semibold">Ayush</p>
                <p className="text-gray-600">Mentor</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Team Section */}
        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">Interested in Joining the Team?</h2>
            <p className="text-lg text-gray-700">
              CodeCreators is a project taught by students, for students. If you&apos;re skilled in Python and passionate
              about teaching, we&apos;d love to have you on board!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSemATAJYLAYbaPfRcX6AbJecSEwqRwyvpvQCZ0fm6VWUa0XbQ/viewform?usp=sf_link"
              className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              target="_blank"
            >
              Join the Team
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-4xl mx-auto text-center">
            <p>&copy; 2025 CodeCreators Sheffield. All rights reserved.</p>
          </div>
        </footer>
    </div>
    <Footer></Footer>
    </>
  )
}
