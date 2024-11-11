import Image from 'next/image'
export default function Home() {
    return (
                <div className="flex flex-col justify-center items-center m-5">


                    <a href="https://enactussheffield.wixsite.com/home/ontarget"> <Image className="m-5" width={200} height={200} src="https://static.wixstatic.com/media/8c34f9_1a30255414054562936cc5962270968f~mv2.png/v1/fill/w_313,h_173,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/OnTarget%20Logo.png" alt="OnTarget Logo.png" /></a>
                    <p className="flex-row flex gap-x-10">
                        <a href="/ontarget#aboutot">ABOUT</a>
                        <a href="/ontarget#getinvoloved">GET INVOLVED</a>
                        <a href="/ontarget/program">OUR PROGRAMME</a>
                        <a href="/ontarget">EVENTS</a>
                        <a href="/ontarget#partner">PARTNERS</a>
                        <a href="/ontarget/resources">RESOURCES</a>
                    </p>
                </div>
    )}