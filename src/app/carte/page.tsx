import Head from "../../components/header"
import Footer from "../../components/footer"
import Image from 'next/image'
export default function Home() {
    return (
        <>
            <Head></Head>
            <div className="[&>*]:mx-auto text-center max-w-[700px] mx-auto">
                <Image width={400} height={400} src="/files/carte/carte-no-bg-bigger.png"
                    className="text-center" alt="carte logo capitals transparent background.png" />


                <h2 id="who-we-are" className="text-4xl">Who We Exist</h2>
                <Image width={100} height={200} src="https://static.wixstatic.com/media/8c34f9_19f4f7c9640e471db9294ef1f2e11d9b~mv2.png/v1/fill/w_262,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7_edited.png" alt="7_edited.png" />

                We are Carte, a student-run social enterprise within Enactus Sheffield. Our team brings together students from a wide range of disciplines who share a common goal: creating meaningful, lasting impact in the lives of people with learning disabilities. We combine creativity, community engagement, and social entrepreneurship to drive positive change.
                <br></br><br></br>
                <h2 id="why-we-are" className="text-4xl">Why We Exist</h2>
                <Image width={100} height={200} src="https://static.wixstatic.com/media/8c34f9_19f4f7c9640e471db9294ef1f2e11d9b~mv2.png/v1/fill/w_262,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7_edited.png" alt="7_edited.png" />

                In the UK, many people with learning disabilities face barriers to social connection, creative expression, and accessible leisure activities. These barriers often lead to loneliness, reduced wellbeing, and limited opportunities to participate in their communities.
                <br></br><br></br>
                Carte was created to help change that.
                <br></br><br></br>
                Through art-based activities and creative product design, we aim to:
                <ul className="list-disc list-inside m-0 p-0 font-bold">
                    <li>Improve wellbeing through artistic expression</li>
                    <li>Reduce social isolation</li>
                    <li>Foster pride, confidence, and creativity</li>
                    <li>Challenge stigma surrounding learning disabilities</li>
                    <li>Support charities and groups that provide inclusive spaces and activities</li>
                </ul>
                <br></br>
                Our project not only raises essential funds, but creates opportunities for individuals to express themselves, connect with others, and have their creativity celebrated.
                <br></br><br></br>
                <h2 id="our-mission" className="text-4xl">What We Do</h2>
                <Image width={100} height={200} src="https://static.wixstatic.com/media/8c34f9_19f4f7c9640e471db9294ef1f2e11d9b~mv2.png/v1/fill/w_262,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7_edited.png" alt="7_edited.png" />

                We facilitate art workshops where participants design artwork that is transformed into high-quality gift cards. These are then sold locally and through university networks. Profits are reinvested to enhance wellbeing initiatives, support creative sessions, improve resources, and fund further activities for people with learning disabilities.
                <br></br><br></br>
                Our work goes beyond fundraising — it’s about empowerment, representation, and building a more inclusive community through creativity.
                <br></br><br></br>

                <h2 className="text-4xl">Meet The Carte Team</h2>
                <Image width={100} height={200} src="https://static.wixstatic.com/media/8c34f9_19f4f7c9640e471db9294ef1f2e11d9b~mv2.png/v1/fill/w_262,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7_edited.png" alt="7_edited.png" />
                <div className="grid xl:grid-cols-2 grid-flow-row mb-10 mt-10 text-center gap-16 font-">
                    <div className="project-item bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50">
                        <Image src="/files/carte/ben.png" width={200} height={150} alt="Ben" className="block w-[200px] md:w-[400px]  rounded-xl"></Image>
                        <div className="font-extrabold text-xl">
                            <h1>Ben Simpson</h1>
                        </div>
                        <div className="text-xl">
                            <h1>Product Developer</h1>
                        </div>
                    </div>
                    <div className="project-item bg-white p-2 rounded-2xl flex flex-col items-center border-b-4 border-l-8 border-black/50">
                        <Image src="/files/carte/virthi.png" width={200} height={150} alt="Ben" className="block w-[200px] md:w-[400px]  rounded-xl"></Image>
                        <div className="font-extrabold text-xl">
                            <h1>Virthi Murali</h1>
                        </div>
                        <div className="text-xl">
                            <h1>Product Developer</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
