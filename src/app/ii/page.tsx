import Head from "../components/header"
import Footer from "../components/footer"
export default function Home() {
    return (
        <>  
        <Head></Head>
        <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-center">Intellect Interpreters</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Bridging Language & Community
          </h2>
          <p className="text-xl text-gray-700">
            Enhancing communication for refugees through student-led interpreting services while fostering cultural sensitivity, trust, and community integration.
          </p>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-4">A Little Bit About Me</h3>
          <p className="mb-6 text-lg leading-relaxed">
            My name is Shahrzad, a final-year medical student at the University of Sheffield.
            I began my interpreting journey at the age of 10 by helping my parents with letters,
            appointments, and paperwork. My early experiences have shaped me into a reliable and versatile interpreter,
            with expertise in social services, immigration, and psychological assessments.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            My background not only enables me to offer professional and confidential interpreting services but also
            to understand the diverse needs of the people I serve – from refugees overcoming language barriers to students
            looking to gain practical experience.
          </p>
        </div>
      </section> */}

      {/* Value Proposition Section */}
      <section className="bg-gray-50 py-16">
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
                Professional handling of sensitive settings such as psychological assessments while ensuring confidentiality.
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

      {/* Implementation Plan Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-10">Plan for Implementing the Service</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-3">July</h4>
              <p>
                <strong>Community Service Meetings:</strong> Establish partnerships with community organisations like the City of Sanctuary.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-3">August & September</h4>
              <p>
                <strong>Recruit & Train:</strong> Form a volunteer team of student interpreters and conduct essential training on safeguarding, confidentiality, and communication.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-3">October Onwards</h4>
              <p>
                <strong>Service Implementation:</strong> Launch the service, begin scheduling interpreting sessions, and gather feedback for continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Plan Section */}
      <section className="bg-gray-50 py-16">
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
              <strong>Food and Refreshments:</strong> Provide refreshments during training sessions and events to support volunteers.
            </li>
            <li>
              <strong>Contingency Fund:</strong> Reserved funds to address any unexpected expenses.
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-extrabold mb-6">Make a Difference Today</h3>
          <p className="text-lg text-gray-700 mb-8">
            Join us in bridging language barriers and empowering communities. Whether you&#39;re a student looking for practical experience or a community leader seeking support for those in need, our service is here to help.
          </p>
          <a
            href="mailto:Sabbasi4@Sheffield.ac.uk"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300"
          >
            Get in Touch
          </a>
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
