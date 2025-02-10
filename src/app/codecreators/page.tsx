import Head from "../components/header"
import Footer from "../components/footer"
import Image from "next/image";
import "./codecreators.css"
export default function Home() {
    return (
        <>  
        <Head></Head>
        <br></br>
        <div className = "text-center">
            <h1 className="text-6xl ">Welcome to CodeCreators</h1>
            <br></br><br></br>
            <h2 className="text-3xl">Teaching Vital Skills</h2>
            <br></br>
            <p>CodeCreators is a project designed to teach vital programming skills to its students.</p>
            <p>Whether you have experience in python and want a refresher on the basics, or you&apos;re a complete beginner, this course is for you.</p>
        </div>
        <br></br><br></br><br></br>
        <div className = "text-center">
            <h2 className="text-3xl">Course Layout</h2>
            <br></br>
            <p>The CodeCreators course is a weekly programme with each week following specific core functionality of python.</p>
            <p>It will begin on the 26th of February, running on Wednesday from 2pm-3:30pm and is an 8 week course.</p>
            <p>Each week is listed as follows:</p>
            <br></br>
            <div id="bold">
                <p>Week 1: Introduction - Variables, Data Types, Inputs, Basic Statements and Arithmetic</p>
                <p>Week 2: Conditional Programming - If Statements, Switch Case</p>
                <p>Week 3: Loops - For, While and Do loops</p>
                <p>Week 4: Arrays, Lists and Tuples - Basics and Methods</p>
                <p>Week 5: Functions and Procedures</p>
                <p>Week 6: Libraries and Modules - Built into python</p>
                <p>Week 7: NumPy, the basics and uses</p>
                <p>Week 8: MatPlotLib, the basics and uses</p>
            </div>
        </div>
        <br></br><br></br><br></br>
        <div className = "text-center">
            <h2 className="text-3xl">What&apos;s in it for you?</h2>
            <br></br>
            <p>At the end of the 8 weeks, you&apos;ll recieve a certificate from us for completing this course.</p>
            <p>You can use this certificate to show off your learnt skills on your CV/Resume.</p>
            <p>And of course, you&apos;ll also learn key programming skills that can be applied to any modern job role.</p>
            <p>An added benefit of learning python is that its concepts are very fundamental, so you&apos;ll have a huge advantage in learning other programming languages such as Java or C++.</p>
        </div>
        <br></br><br></br><br></br>
        <div className = "text-center">
            <h2 className="text-3xl">Interested in Applying?</h2>
            <br></br>
            <p>If you&apos;re interested in applying for the 2025 programme, we look forward to teaching you. The total cost for this course is £25pp.</p>
            <div id="bold">
                <p>SPECIAL OFFER: If you apply to CodeCreators with a friend, you each get £5 off, making the entire course £20 each!</p>
            </div>
            <p>Please fill in the google form below to register your interest</p>
            <p>We&apos;ll get back to you with information on how to pay:</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSffIk6xtrt2l3PDNPSQiJdqi-qFzU6hU5s74HXdBty4vqnBzQ/viewform?usp=sf_link"><b>Click here for the student application form</b></a>
        </div>
        <br></br><br></br><br></br>
        <div className = "text-center">
            <h2 className="text-3xl">Meet the Team</h2>
            <div id = "teamImage" className=" gap-x-5 flex flex-row">
                <div className="flex flex-col">
                    <Image src="/files/codecreators/niall.jpg" width={150} height={175} alt="Niall" className="h-[180px]"></Image>
                    <p>Niall<br></br>(Project Leader)</p>
                </div>
                <div className="flex flex-col">
                    <Image src="/files/codecreators/oli.jpg" width={150} height={175} alt="Niall" className="h-[180px]"></Image>
                    <p>Oli<br></br>(Mentor)</p>
                </div>
                <div className="flex flex-col">
                    <Image src="/files/codecreators/ian.jpg" width={150} height={175} alt="Niall" className="h-[180px]"></Image>
                    <p>Ian<br></br>(Mentor)</p>
                </div>
            </div>
            <br></br>
        </div>
        <div className = "text-center">
            <h2 className="text-3xl">Interested in Joining the Team?</h2>
            <br></br>
            <p>If you&apos;re interested in joining the CodeCreators team, you&apos;d be more than welcome.</p>
            <p>CodeCreators is a project taught by students for students.</p>
            <p>The only thing we ask from you is that you have skills in python that are sharp enough to teach others. It doesn&apos;t matter what year of study you&apos;re in.</p>
            <p>If you&apos;re interested, please fill in the google form below:</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSemATAJYLAYbaPfRcX6AbJecSEwqRwyvpvQCZ0fm6VWUa0XbQ/viewform?usp=sf_link"><b>Click here for the mentor application form</b></a>
        </div>
        <Footer></Footer>
        </>
    )
}
