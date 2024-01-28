// AboutUs.js

import React from 'react';
import Navbar from '../components/navbar';

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="py-12 bg-blue-500 text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Our Team</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sapien
              euismod, malesuada arcu quis, condimentum quam. Sed eget justo at mauris tincidunt
              convallis ac eu augue.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://imgs.search.brave.com/0HMMEJh5mJAQDprLtEpDHY--WFe_fuTto9U3k8xhnRs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2EyYy90ZWFt/LTE0OTM5MjMuanBn/P2ZtdA"
              alt="Team at Work"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member Card Example */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Vineeth</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Nikhitha</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pradhyumna</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Arun</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Siddarth</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Likhitha</h3>
              </div>
            </div>
            {/* Add more team member cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Have questions or want to collaborate? Feel free to reach out!
          </p>
          <a
            href="mailto:vjprojects@gmail.com"
            className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
