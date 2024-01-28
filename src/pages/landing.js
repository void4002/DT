// LandingPage.js
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/navbar';

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-6 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold mb-4">VJ Projects</h1>
        <p className="text-gray-600 mb-6">
          Explore a collection of senior projects, categorized by domains. Connect with project teams and access project reports and presentations.
        </p>
        <div className="flex space-x-4">
          <Link to='/domain'><button className="bg-blue-500 text-white px-4 py-2 rounded-md">Get Started</button></Link>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Learn More</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
