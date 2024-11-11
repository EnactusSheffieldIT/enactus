import Head from "../components/header"
import Footer from "../components/footer"
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
            <p>It will begin on the (DATE), running on (DAY) at (TIME) for (HOW LONG) and is an 8 week course.</p>
            <p>Each week is listed as follows:</p>
            <br></br>
            <div id="weeks">
                <p>Week 1:</p>
                <p>Week 2:</p>
                <p>Week 3:</p>
                <p>Week 4:</p>
                <p>Week 5:</p>
                <p>Week 6:</p>
                <p>Week 7: NumPy, the basics and uses</p>
                <p>Week 8: MatPlotLib, The basics and uses</p>
            </div>
        </div>
        <br></br><br></br><br></br>
        <div className = "text-center">
            <h2 className="text-3xl">Whats in it for you?</h2>
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
            <p>If you&apos;re interested in applying for the 2025 programme, thats great!</p>
            <p>Please fill in the form below to register your interest</p>
            <p>We&apos;ll get back to you with information on how to pay:</p>
            <h1 className="text-9xl">FORM PLACEHOLDER</h1>
        </div>
        <br></br><br></br><br></br>
        <div className = "text-center">
            <h2 className="text-3xl">Meet the Team</h2>
            <div id = "team">
                <p>Niall<br></br>(Project Leader)</p>
                <p>Oli<br></br>(Mentor)</p>
                <p>Ian<br></br>(Mentor)</p>
            </div>
            <br></br>
        </div>
        <div className = "text-center">
            <h2 className="text-3xl">Interested in Joining the Team?</h2>
            <br></br>
            <p>If you&apos;re interested in joining the CodeCreators team, you&apos;d be more than welcome.</p>
            <p>CodeCreators is a project taught by students for students.</p>
            <p>The only thing we ask from you is that you have skills in python that are sharp enough to teach others. It doesn&apos;t matter what year of study you&apos;re in.</p>
            <p>If you&apos;re interested, please (TBD what to do, idk yet)</p>
        </div>
        <Footer></Footer>
        </>
    )
}
