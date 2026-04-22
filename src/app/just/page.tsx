import Head from "../../components/header"
import Footer from "../../components/footer"
import Image from 'next/image'
export default function Home() {
    return (
        <>
            <Head></Head>
            <div className="bg-gray-50 text-gray-800">
                <div className="[&>*]:mx-auto text-center max-w-[700px] mx-auto pt-4">
                    <Image width={400} height={400} src="/files/just_logo.jpg"
                        className="text-center rounded-2xl" alt="carte logo capitals transparent background.png" />
                    <p className="mt-4 text-lg md:text-xl text-gray-600 pb-5">
                        
                    </p>
                </div>

                <section className="bg-green-100 py-16 px-4">
                    <div className="[&>*]:mx-auto text-center max-w-[700px] mx-auto">
                        <h2 id="who-we-are" className="text-4xl font-semibold pb-5">What is JUST?</h2>
                        Many individuals lack access to basic legal and civic knowledge. As a result, people often miss out on important support, benefits, and rights they are entitled to. This problem disproportionately affects minority ethnic communities, where language and knowledge barriers exist, as well as individuals with disabilities who may lack the digital skills needed to access essential services.
                        <br></br><br></br>
                        JUST is still currently in its idea stage but aims to address this gap by providing accessible legal and civic education. Through interactive workshops, drop-in sessions, and an easy-to-use website, the project seeks to build awareness and confidence around key processes, rights, and available support. The long-term goal is to empower individuals to navigate these systems independently.                        
                        <br></br><br></br>
                    </div>
                </section>

                <section className="bg-gray-50 py-16 px-4">
                    <div className="[&>*]:mx-auto text-center max-w-[700px] mx-auto">
                        <h2 id="why-we-are" className="text-4xl font-semibold pb-5">What has JUST Achieved so Far?</h2>
                        <ul className="list-disc list-inside">
                            <li>JUST has already gained recognition, reaching the top 20 in the Ideas4Impact competition. <br></br><br></br></li>
                            <li>It was invited to the exclusive showcase at the NextGen Takeover 2026.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-green-100 py-16 px-4">
                    <div className="[&>*]:mx-auto text-center max-w-[700px] mx-auto">
                        <h2 className="text-4xl font-semibold pb-5">Meet The JUST Team</h2>
                        <div className="grid xl:grid-cols-1 grid-flow-row mb-10 mt-10 text-center font-">
                            <Image
                                width={100}
                                height={100}
                                src="/files/intellectinterpreters/khushi.jpg"
                                alt="Khushi"
                                className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
                            />
                            <p className="mt-4 font-semibold">Khushi</p>
                            <p className="text-gray-600">Project Leader</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}
