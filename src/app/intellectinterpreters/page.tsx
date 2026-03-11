import Head from "../../components/header"
import Footer from "../../components/footer"
import Image from 'next/image'
export default function Home() {
    return (
        <>  
        <Head></Head>
        <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image width={300} height={300} src="/files/intellectinterpreters/ii.png"
            className="text-center mx-auto" alt="carte logo capitals transparent background.png" />
          <p className="text-xl text-gray-700 pt-5">
            Enhancing communication for refugees through student-led interpreting services while fostering cultural sensitivity, trust, and community integration.
          </p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-10">Innovation & Value Proposition</h3>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Versatility & Cultural Sensitivity</h4>
              <p>
                Adaptability to different environments and subjects, ensuring accurate and culturally appropriate interpretation.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Specialised Knowledge</h4>
              <p>
                Professional handling of sensitive settings while ensuring confidentiality.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Reliability & Professional Network</h4>
              <p>
                Calm under pressure with robust connections within social services, immigration, and mental health sectors.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Student & Community Focus</h4>
              <p>
                Leveraging student language skills and volunteer spirit to support vulnerable communities, particularly refugees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Plan Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-8">Financial Plan</h3>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>
              <strong>Marketing and Outreach:</strong> Branding materials, digital ads, and flyers to promote the service.
            </li>
            <li>
              <strong>Student Travel Reimbursement:</strong> Compensate transportation costs for student interpreters.
            </li>
            <li>
              <strong>Contingency Fund:</strong> Reserved funds to address any unexpected expenses.
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-extrabold mb-6">Make a Difference Today</h3>
          <p className="text-lg text-gray-700 mb-8">
            Join us in bridging language barriers and empowering communities. Whether you&#39;re a student looking for practical experience or a community leader seeking support for those in need, our service is here to help.
          </p>
          <a
            href="mailto:sjollif1@Sheffield.ac.uk"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Meet the Team</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="text-center">
            <Image
                width={100}
                height={100}
                src="/files/enactus_team/suzy.jpg"
                alt="Oli"
                className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
              />
              <p className="mt-4 font-semibold">Suzy</p>
              <p className="text-gray-600">Project Leader</p>
            </div>
            <div className="text-center">
              <Image
                  width={100}
                  height={100}
                  src="/files/intellectinterpreters/khushi.jpg"
                  alt="Oli"
                  className="w-32 h-32 rounded-full object-cover mx-auto border border-black"
              />
              <p className="mt-4 font-semibold">Khushi</p>
              <p className="text-gray-600">Training and</p>
              <p className="text-gray-600">Safeguarding Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Intellect Interpreters. All rights reserved.</p>
        </div>
      </footer>
    </div>
        <Footer></Footer>
        </>
    )
}
