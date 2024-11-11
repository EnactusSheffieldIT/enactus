import Head from "../components/header"
import Footer from "../components/footer"
import Image from 'next/image'
import OTheader from "./otheader"
export default function Home() {
    return (
        <>
            <Head></Head>
            <div className="text-center">
                <OTheader></OTheader>
                <h1 className="text-6xl ">Welcome to OnTarget!</h1>
                <h2 className="text-3xl ">Shaping Young Lives in Sheffield</h2>
                <p>OnTarget is a student-led group which is part of the <a href="https://enactussheffield.wixsite.com/home">Enactus Sheffield programme</a>.</p>
                <p className="max-w-[700px] mx-auto">OnTarget works to increase employability prospects of under-represented young people in Sheffield. Improving both mental well-being and employability prospects is the driving force behind the project, bringing social sport, positive role models in the form of mentors and work placements together to do so in a 9 week programme.</p>
                <h2 className="py-12 pt-32 text-4xl" id="aboutot">What is OnTarget about?</h2>
                <div className="grid md:grid-cols-2 gap-10 w-[80%] mx-auto">
                    <div className="">
                        <h2 id="our-need" className="text-3xl ">OUR NEED</h2>
                        <div className="text-start">
                            <p>42 students are excluded every day in the UK. Those excluded are:</p>
                            <p>​</p>
                            <ul>
                                <li className="list-disc"><p>9 times more likely to be unemployed</p>                </li>
                                <li className="list-disc"><p>4.5 times more likely to be homeless</p></li>
                                <li className="list-disc"><p>More likely to turn to crime</p>     </li>
                            </ul>
                            <p>Permanent exclusion rates in Sheffield secondary schools are 65% higher than the national average.</p>
                            <p>OnTarget tackles these problems using mentoring, sports and work placements to provide a personalised approach that encourages students to engage in school, improving their employability prospects and overall mental health.</p>
                            <p><a href="https://enactussheffield.wixsite.com/home/general-4">OUR PROGRAMME</a></p>

                        </div>

                    </div>
                    <div className="">
                        <h2 id="our-aims" className="text-3xl ">OUR AIMS</h2>
                        <div className="flex-row flex border-b-4 border-orange-500">
                            <p className="text-4xl mr-3">01</p>
                            <p className="text-start"   >Build positive futures by increasing the beneficiaries&#39; employability prospects through the programme</p>

                        </div>
                        <div className="flex-row flex border-b-4 border-orange-500">
                            <p className="text-4xl mr-3">02</p>
                            <p className="text-start">Meet potential future employers and encourage each young person to aspire for a prosperous future</p>
                        </div>
                        <div className="flex-row flex border-b-4 border-orange-500">
                            <p className="text-4xl mr-3">03</p>
                            <p className="text-start">Improve the beneficiaries&#39; confidence in their ability to succeed in something they enjoy</p>
                        </div>
                        <div className="flex-row flex border-b-4 border-orange-500">
                            <p className="text-4xl mr-3">04</p>
                            <p className="text-start">Improve the overall behaviour of each individual involved in the OnTarget programme</p>
                        </div>
                    </div>
                </div>
                <p className="py-12 pt-32 text-4xl" id="getinvoloved">Get Involved</p>
                {/* <p>About OT</p>
                <p>GetInvolvedOT</p> */}
                <div className="grid md:grid-cols-3 min-h-[500px]">
                    <div className="bg-[url('https://static.wixstatic.com/media/8c34f9_c86022f204ee4da296ffa6f88d5b8749~mv2.jpg/v1/fill/w_519,h_614,al_c,q_80,enc_auto/8c34f9_c86022f204ee4da296ffa6f88d5b8749~mv2.jpg')]">
                        <p>Be a Partner</p>
                        <p>Do you have experience in coaching? Can you offer a placement for one of the young people we work with? Do you own a business who is willing to donate a raffle prize for one of our fundraising event? We are always looking for businesses and experienced coaches to help us reach the goals for our younger community and help us to expand our reach out of Sheffield. From donated raffle prizes to placement opportunities we welcome any help with open arms and would love to hear from you.</p>
                        <p>      <a href="https://enactussheffield.wixsite.com/home/ontarget">Get In Touch</a></p>

                    </div> <div className="bg-[url('https://static.wixstatic.com/media/8c34f9_37908d0418b441d4ae7255d329ad2638~mv2.jpg/v1/fill/w_571,h_667,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8c34f9_37908d0418b441d4ae7255d329ad2638~mv2.jpg')]">
                        <p>Be a Mentor</p><p>Mentoring is one of the best gifts you can give to the younger generations. We are looking for enthusiastic and empathetic University students from Sheffield to give back to our community and gain both valuable life experience and creating new relationships. You would be providing a personalised approach of mentorship that encourages students to engage in school, improving their employability prospects and overall mental health. Not to mention it is great for your CV.</p>

                        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSf4yKtl2UmK_RRq68RQF9cA56JjVZGiUMIVPlG7rIxb1TgPhw/viewform">Apply</a></p>

                    </div><div className="bg-[url('https://static.wixstatic.com/media/8c34f9_2014132fb2894619875ec362e4d51ecb~mv2.jpg/v1/fill/w_571,h_667,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8c34f9_2014132fb2894619875ec362e4d51ecb~mv2.jpg')]">

                        <p>Other Ways to Help</p>
                        <p>If you do not fall into any of these categories or you would like to support our cause in other ways, OnTarget are always looking for people who want to help. Attending our events, small donations, raffle prizes are only a few examples of how our community would benefit from your help. Please get in touch if you would like to be involved in making the future better for the younger generation.</p>

                        <p><a href="https://enactussheffield.wixsite.com/home/ontarget">Get In Touch</a></p>
                    </div>
                </div>
                <div  id="partner" className="py-32 flex flex-col justify-center items-center " >
                    <h1 className="text-4xl p-12">Our Partners</h1>
                    <div className="flex flex-row flex-wrap">
                        <div className="bg-cover w-[100px] flex justify-center items-center bg-[url('https://static.wixstatic.com/media/8c34f9_77d044b5579a4133a957ce034e48fa27~mv2.png/v1/fill/w_172,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/255_2x.png')]">
                            <a href="https://enactussheffield.org"> <Image width={80} height={200} src="https://static.wixstatic.com/media/8c34f9_80d0592d4e9540ad951fd22a40c584c8~mv2.png/v1/fill/w_139,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/267_2x.png" alt="267_2x.png" /></a>
                        </div>
                        <p><a href="https://www.sheffieldfa.com/"> <Image width={100} height={200} src="https://static.wixstatic.com/media/8c34f9_a54ac508a82246629e5b859821748632~mv2.jpg/v1/crop/x_0,y_1,w_300,h_300/fill/w_172,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/539_2x.jpg" alt="539_2x.jpg" /></a></p>
                        <p><a href="https://www.sheffieldcitytrust.org/"> <Image width={100} height={200} src="https://static.wixstatic.com/media/8c34f9_b315c86aa5fe418684a309431ae5218f~mv2.jpg/v1/crop/x_0,y_1,w_300,h_300/fill/w_172,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/543_2x.jpg" alt="543_2x.jpg" /></a></p>
                        <p><a href="https://www.sufc-community.com/"> <Image width={100} height={200} src="https://static.wixstatic.com/media/8c34f9_a485c28785c2459da750bc9cc8ee309c~mv2.jpg/v1/crop/x_0,y_2,w_298,h_298/fill/w_172,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/537_2x.jpg" alt="537_2x.jpg" /></a></p>
                        <p><a href="https://www.sheffieldmind.co.uk/"> <Image width={100} height={200} src="https://static.wixstatic.com/media/8c34f9_3334cbe32486405692c2c1a22cbb38ec~mv2.jpg/v1/crop/x_0,y_2,w_298,h_298/fill/w_172,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/545_2x.jpg" alt="545_2x.jpg" /></a></p>
                        <p><a href="https://www.oxfam.org.uk/shops/oxfam-shop-fulwood-road/"> <Image width={100} height={200} src="https://static.wixstatic.com/media/8c34f9_15fc38be6b7b466cb9e6f20dbaad6b02~mv2.jpg/v1/crop/x_0,y_2,w_298,h_298/fill/w_172,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/541_2x.jpg" alt="541_2x.jpg" /></a></p>

                    </div>
                </div>
                <p>OurPartnersOT</p>
                <h2 id="get-in-touch">Get in Touch</h2>
                <div className="flex flex-row justify-center w-[100vw] max-w-[712px] mx-auto">
                    <div className="w-full flex flex-col [&>*]:m-2">
                    
                        <input type="text" className="bg-transparent border-b-2 border-black" placeholder="First Name"></input>
                        <input type="text" className="bg-transparent border-b-2 border-black" placeholder="Last Name"></input>
                        <input type="text" className="bg-transparent border-b-2 border-black" placeholder="Email"></input>
                        <input type="text" className="bg-transparent border-b-2 border-black" placeholder="Subject"></input>
                        <input type="text" className="bg-transparent border-b-2 border-black" placeholder="Leave us a message..."></input>
                        <input type="submit" value="Submit"></input>
                        <p>Thanks for submitting!</p>
                    </div>
                    <div className="">
                        <Image className="w-[50vw] max-w-[325px] max-h-[291px]" width={100} height={200} src="https://static.wixstatic.com/media/11062b_fff864c93f594bd196674e913b84c3ba~mv2.jpg/v1/crop/x_1383,y_0,w_3124,h_3444/fill/w_481,h_530,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Celebrating%20Goal.jpg" alt="Celebrating Goal" />
                    </div>
                </div>
                <ul>
                    <li><a href="https://www.instagram.com/ontargetsheffield/">instagram</a></li>
                    <li><a href="https://www.facebook.com/ontargetsheffield/">FB</a></li>
                    <li><a href="https://twitter.com/ontargetsheff">TW</a></li>
                    <li><a href="https://www.linkedin.com/showcase/sheffield-ontarget">LINKEDIN</a></li>
                </ul>
                <p>Copyright © Enactus Sheffield</p>
                <p><a href="https://enactussheffield.wixsite.com/home/ontarget">BACK TO TOP</a></p>

            </div>
            <Footer></Footer>
        </>
    )
}