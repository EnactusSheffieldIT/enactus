import Head from "../../components/header"
import Footer from "../../components/footer"
import Image from 'next/image'
export default function Home() {
    return (
        <>
            <Head></Head>
            <div className="bg-gray-50 text-gray-800">
                <div className="[&>*]:mx-auto text-center max-w-[700px] mx-auto">
                    <Image width={400} height={400} src="/files/carte/carte-no-bg-bigger.png"
                        className="text-center" alt="carte logo capitals transparent background.png" />


                    <h2 id="who-we-are" className="text-4xl font-semibold">Who We Are</h2>
                    <Image width={100} height={200} src="https://static.wixstatic.com/media/8c34f9_19f4f7c9640e471db9294ef1f2e11d9b~mv2.png/v1/fill/w_262,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7_edited.png" alt="7_edited.png" />

                    We are Carte, a student-run social enterprise within Enactus Sheffield. Our team brings together students from a wide range of disciplines who share a common goal: creating meaningful, lasting impact in the lives of people with learning disabilities. We combine creativity, community engagement, and social entrepreneurship to drive positive change.
                    <br></br><br></br>
                </div>

                <section className="bg-yellow-50 py-16 px-4">
                    <div className="[&>*]:mx-auto text-center max-w-[700px] mx-auto">
                        <h2 id="why-we-are" className="text-4xl font-semibold">Why We Exist</h2>
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
                    </div>
                </section>

                <section className="bg-gray-50 py-16 px-4">
                    <div className="[&>*]:mx-auto text-center max-w-[700px] mx-auto">
                    <h2 id="our-mission" className="text-4xl font-semibold">What We Do</h2>
                    <Image width={100} height={200} src="https://static.wixstatic.com/media/8c34f9_19f4f7c9640e471db9294ef1f2e11d9b~mv2.png/v1/fill/w_262,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7_edited.png" alt="7_edited.png" />

                    We facilitate art workshops where participants design artwork that is transformed into high-quality gift cards. These are then sold locally and through university networks. Profits are reinvested to enhance wellbeing initiatives, support creative sessions, improve resources, and fund further activities for people with learning disabilities.
                    <br></br><br></br>
                    Our work goes beyond fundraising — it’s about empowerment, representation, and building a more inclusive community through creativity.
                    <br></br><br></br>
                    </div>
                </section>

                <section className="bg-yellow-50 py-16 px-4">
                    <div className="[&>*]:mx-auto text-center max-w-[700px] mx-auto">
                        <h2 className="text-4xl font-semibold">Meet The Carte Team</h2>
                        <Image width={100} height={200} src="https://static.wixstatic.com/media/8c34f9_19f4f7c9640e471db9294ef1f2e11d9b~mv2.png/v1/fill/w_262,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7_edited.png" alt="7_edited.png" />
                        <div className="grid xl:grid-cols-1 grid-flow-row mb-10 mt-10 text-center font-">
                            <Image
                                    width={100}
                                    height={100}
                                    src="/files/carte/virthi.png"
                                    alt="Virthi"
                                    className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
                                />
                                <p className="mt-4 font-semibold">Virthi</p>
                                <p className="text-yellow-600">Project Leader</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}
