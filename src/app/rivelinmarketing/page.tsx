import Head from "../../components/header"
import Footer from "../../components/footer"
import Image from 'next/image'
export default function Home() {
    return (
        <>  
        <Head></Head>
        <div className="bg-gray-50 min-h-screen flex flex-col items-center px-6 py-12">
      {/* Header Section */}
      <header className="text-center mb-12">
        <Image width={400} height={400} src="/files/rivelinmarketing/rivelinmarketingshort.png"
          className="text-center mx-auto" alt="carte logo capitals transparent background.png" />
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Empowering small & medium-sized businesses, societies, and associations with affordable social media management services.
        </p>
      </header>

      {/* About Section */}
      <section className="bg-white shadow-lg rounded-lg max-w-5xl w-full p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who Are We?</h2>
        <p className="text-gray-600 leading-relaxed">
          We are a student-run social media management agency offering services tailored to small and medium-sized businesses, societies, and other associations at competitive prices. As a non-profit social enterprise, all revenue supports Enactus Sheffield, funding local and international volunteer projects at the University of Sheffield.
        </p>
      </section>

      {/* Service Areas Section */}
      <section className="bg-white shadow-lg rounded-lg max-w-5xl w-full p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Service Areas</h2>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed">
          <li>Original content creation</li>
          <li>Cross-posting on various platforms</li>
          <li>Replies and audience engagement</li>
          <li>Event promotion</li>
          <li>Website creation</li>
          <li>YouTube content management</li>
        </ul>
      </section>

      {/* Tagline Section */}
      <section className="bg-blue-100 shadow-lg rounded-lg max-w-4xl w-full p-8 mb-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Tagline</h2>
        <p className="text-lg text-gray-700 italic">&#34;Empowering connections, one platform at a time.&#34;</p>
      </section>

      <section className="bg-white shadow-lg rounded-lg max-w-5xl w-full p-8 mb-12 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Meet the Team</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="/files/rivelinmarketing/jiunn.jpg"
                alt="Jiunn"
                className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
              />
              <p className="mt-4 font-semibold">Jiunn</p>
              <p className="text-blue-600">Project Leader</p>
            </div>
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="/files/rivelinmarketing/maia.jpg"
                alt="Maia"
                className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
              />
              <p className="mt-4 font-semibold">Maia</p>
              <p className="text-blue-600">Project Member</p>
            </div>
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="/files/rivelinmarketing/coraline.jpg"
                alt="Coraline"
                className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
              />
              <p className="mt-4 font-semibold">Coraline</p>
              <p className="text-blue-600">Project Member</p>
            </div>
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="/files/enactus_team/su.png"
                alt="Su"
                className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
              />
              <p className="mt-4 font-semibold">Su</p>
              <p className="text-blue-600">Project Member</p>
            </div>
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="/files/rivelinmarketing/vyshnav.jpg"
                alt="Vyshnav"
                className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
              />
              <p className="mt-4 font-semibold">Vyshnav</p>
              <p className="text-blue-600">Project Member</p>
            </div>
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="/files/rivelinmarketing/becca.jpg"
                alt="Becca"
                className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
              />
              <p className="mt-4 font-semibold">Becca</p>
              <p className="text-blue-600">Project Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <div className="text-gray-600 leading-relaxed">
          <p>Email: <a href="mailto:info@enactusblades&brands.com" className="text-blue-600 underline">blades&brands@enactussheffield.org</a></p>
          <p>Website: <a href="https://www.enactusblades&brands.com" className="text-blue-600 underline">www.enactussheffield.org/blades&brands</a></p>
          <p>Instagram: <a href="https://www.instagram.com/enactusblades&brands" className="text-blue-600 underline">@enactussheffieldblades&brands</a></p>
        </div>
      </section> */}
    </div>
        <Footer></Footer>
        </>
    )
}
