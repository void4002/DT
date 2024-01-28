// src/components/DomainPage.js
import React from 'react';
import Navbar from '../components/navbar';
import {Link} from 'react-router-dom';

const DomainPage = () => {
  // Dummy data for different domains
  const domains = [
    { id: 1, name: 'AI', description: 'Artificial Intelligence projects', path:'/ai' },
    { id: 2, name: 'ML', description: 'Machine Learning projects', path:'/ml' },
    { id: 3, name: 'IOT', description: 'Internet of Things projects', path:'/iot' },
    // Add more domains as needed
  ];

  return (
    <div>
        <Navbar/>
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Domains</h1>
      <div>
        {domains.map((domain) => (
           <Link
           key={domain.id}
           to={domain.path}
           className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mr-4 mb-4"
         >
            <h2 className="text-xl font-bold mb-2">{domain.name}</h2>
            <p className="text-gray-600">{domain.description}</p>
         </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DomainPage;
