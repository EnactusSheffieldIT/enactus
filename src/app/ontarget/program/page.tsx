import Head from "../../components/header"
import Footer from "../../components/footer"
import OTheader from "../otheader"
export default function Home() {
    return (
        <>
            <Head></Head>
            <OTheader></OTheader>
            <div >
                <p className="text-center text-4xl">The Programme</p>
                <div className="grid md:grid-cols-3 gap-x-4 min-h-[500px]">
                    <div className="flex flex-col justify-center items-center bg-center bg-[url('https://static.wixstatic.com/media/e5fe0aecd0cf4e2abeb0a5ed946abb98.jpg/v1/fill/w_564,h_492,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e5fe0aecd0cf4e2abeb0a5ed946abb98.jpg')]">

                        <p>Personal Mentor</p>
                        <p>Each student has a personal mentor who provides them with support and advice throughout the programme.</p>

                    </div>
                    <div className="flex flex-col  justify-center items-center  bg-center bg-[url('https://static.wixstatic.com/media/11062b_348e55b6fcd74e93874155fdff161ef1~mv2.jpg/v1/fill/w_571,h_492,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_348e55b6fcd74e93874155fdff161ef1~mv2.jpg')]">

                        <p>Improving Employability Skills</p>
                        <p>The students receive workshops on key skills such as writing a CV and being able to appropriately answer interview questions.</p>

                    </div>
                    <div className="flex flex-col  justify-center items-center  bg-center bg-[url('https://static.wixstatic.com/media/87f4aa163a794af7a9a45e9e409d4fd3.jpg/v1/fill/w_571,h_492,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/87f4aa163a794af7a9a45e9e409d4fd3.jpg')]">

                        <p>Social Sport</p>
                        <p>Each session is supported with social sport, most often football. This aims to improve skills such as teamwork, communication and leadership whilst also allowing them to engage in something they enjoy.</p>

                    </div>
                </div>
                <h2 className="text-center text-4xl" id="why-the-different-components-of-our-programme-are-beneficial">Why the different components of our programme are beneficial</h2>

                <div className="grid md:grid-cols-4 gap-x-4 min-h-[200px] [&>div]:flex [&>div>p]:w-[90%] [&>div>p>a]:text-center [&>div]:flex-col [&>div]:items-center [&>div]:justify-center">
                    <div className="bg-blue-50">
                        <p>FA Imagine Your Goals Project to improve wellbeing via sport</p>
                        <p><a href="https://www.time-to-change.org.uk/sites/default/files/imagine-your-goals-improving-mental-health-through-football.pdf">Document</a></p>

                    </div>
                    <div className="bg-white">
                        <p>Sport England Towards an Active Nation Strategy focuses on how sport changes lives</p>
                        <p><a href="https://sportengland-production-files.s3.eu-west-2.amazonaws.com/s3fs-public/sport-england-towards-an-active-nation.pdf?zE6hDbFaa9dNK8tRqxP2HuVIM2Ls79HG">Document</a></p>

                    </div>
                    <div className="bg-blue-50">
                        <p>FA Heads up Campaign on simple steps to look after our mental health</p>
                        <p><a href="https://www.thefa.com/about-football-association/heads-up/take-a-minute">Document</a></p>

                    </div>
                    <div className="bg-white">
                        <p>Sport and Recreation Alliance Game of Life report on the value of sport for society overall</p>
                        <p><a href="http://sramedia.s3.amazonaws.com/media/documents/2d77274e-af6d-4420-bdfb-da83c3e64772.pdf">Document</a></p>

                    </div>
                </div>
                <h1 className="text-center text-4xl">Feedback</h1>
                <div className="grid md:grid-cols-3 gap-x-4 min-h-[300px] [&>div]:flex [&>div>p]:w-[90%] [&>div>p>a]:text-center [&>div]:flex-col [&>div]:items-center [&>div]:justify-center">
                    <div className="bg-[url('https://static.wixstatic.com/media/11062b_e1d74ebd301449d4ae31e0d5fe95ad2b~mv2.jpg/v1/fill/w_564,h_582,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_e1d74ebd301449d4ae31e0d5fe95ad2b~mv2.jpg')]">
                         <p>Following our 9 week pilot programme in April 2019:</p>
                        <ul className="
                        max-w-[90%] ">
                            <li className="list-disc"><p>The majority were extremely engaged in the programme</p>
                            </li>
                            <li className="list-disc"><p>Over 50% scored the programme a 10/10 for usefulness in week 9</p>
                            </li>
                            <li className="list-disc"><p>All the students rated their enjoyment of the mentoring above 8, with 80% scoring it 10/10</p>
                            </li>
                        </ul>

                    </div>
                    <div className="bg-[url('https://static.wixstatic.com/media/11062b_716a80caf81b4c0990af85560cb93709~mv2.jpg/v1/fill/w_571,h_582,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_716a80caf81b4c0990af85560cb93709~mv2.jpg')]">
                        <p>New skills the students felt they had learnt included:</p>
                        <ul>
                            <li className="list-disc"><p>Problem Solving</p>
                            </li>
                            <li className="list-disc"><p>Team Work</p>
                            </li>
                            <li className="list-disc"><p>Confidence</p>
                            </li>
                        </ul>

                    </div>
                    <div className="bg-[url('https://static.wixstatic.com/media/11062b_6533c0eefc234f779950722ccd8eacb3~mv2_d_4185_3348_s_4_2.jpg/v1/fill/w_571,h_582,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_6533c0eefc234f779950722ccd8eacb3~mv2_d_4185_3348_s_4_2.jpg')]">
                         <p>Overall, 100% felt the sessions met their expectations</p>
                        <p>This feedback was incredibly pleasing for the OnTarget team and shows the value in our programme. We hope to capitalise on the students’ responses to develop our programme further and maximise its benefits.</p>

                    </div>
                </div>
                <p className="border-2 rounded-xl bg-blue-200 w-fit mx-auto m-5 p-3"><a href="https://swfccp.co.uk/the-journey-of-cole-fisher/">How Our Programme and Partnership Benefited One Specific Participant</a></p>


                <p>Testimonial about OnTarget</p>

                <p>Copyright © Enactus Sheffield</p>

            </div>
            <Footer></Footer>
        </>
    )
}