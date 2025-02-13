import Head from "../components/header"
import Footer from "../components/footer"
import Image from "next/image";
export default function Home() {
    return (
        <>  
        <Head></Head>
        <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">VapeDrop: Sustainable Vape Recycling Initiative</h1>
          <p className="text-lg">Driving innovation, education, and environmental impact in Sheffield</p>
        </div>
      </header>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why VapeDrop?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              VapeDrop is a local project designed to address the growing issue of vape littering and waste in 
              Sheffield. By combining entrepreneurial leadership, sustainability, and innovation, we aim to create 
              a positive impact on the environment and public health.
            </p>
          </div>
          <Image
            width={500}
            height={500}
            src="https://via.placeholder.com/500" // Replace with actual image URL
            alt="VapeDrop Initiative"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Premium Details Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Dynamic Partnerships</h3>
              <p className="text-gray-600">
                VapeDrop has collaborated with key partners to drive sustainable growth and expand the initiative.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">40-Second Disassembly</h3>
              <p className="text-gray-600">
                Our streamlined process ensures efficient waste management and recycling of disposable vapes.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Workshops & Education</h3>
              <p className="text-gray-600">
                Engaging workshops educate young people about the health and environmental impacts of vaping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Problem at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">1,200</p>
              <p className="text-gray-600">Electric cars worth of disposable vapes end up in landfill annually.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">83%</p>
              <p className="text-gray-600">Of vapers do not actively recycle their vapes.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">40.5%</p>
              <p className="text-gray-600">Of university students in Sheffield have vaped.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-lg mb-8">
            Be part of the solution. Help us reduce waste, spread awareness, and create a cleaner Sheffield.
          </p>
          <button className="px-6 py-3 bg-white text-green-600 font-bold rounded-lg shadow hover:bg-gray-100">
            Get Involved
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2025 VapeDrop Initiative. All rights reserved.</p>
        </div>
      </footer>
    </div>
        <Footer></Footer>
        </>
    )
}
