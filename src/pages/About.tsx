import React from 'react';
import { Shield, Users, Award, Anchor, Heart, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety is our top priority. All our vessels are equipped with the latest safety equipment and our crew is trained in emergency procedures.'
    },
    {
      icon: Heart,
      title: 'Environmental Responsibility',
      description: 'We are committed to protecting Oman\'s marine environment and promote sustainable tourism practices.'
    },
    {
      icon: Users,
      title: 'Expert Crew',
      description: 'Our experienced marine guides and boat captains ensure you have the best possible experience on the water.'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'We strive to exceed your expectations with exceptional service and attention to detail.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '15,000+', label: 'Happy Customers' },
    { number: '11', label: 'Adventure Packages' },
    { number: '4.9', label: 'Average Rating' }
  ];

  const teamMembers = [
    {
      name: 'Captain Ahmed Al-Balushi',
      role: 'Senior Marine Captain',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Dr. Fatima Al-Rashid',
      role: 'Marine Biologist & Guide',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Omar Al-Hinai',
      role: 'Adventure Coordinator',
      experience: '8 years',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const certifications = [
    'Maritime Safety Authority - Oman',
    'International Safety Management Code',
    'Marine Environmental Protection',
    'First Aid & CPR Certified',
    'Tourism Authority Licensed'
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About MUSCATYACHTCLUB
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for premium marine adventures in Oman, dedicated to creating unforgettable experiences while preserving the natural beauty of our waters.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2014, MUSCATYACHTCLUB was born from a passion for Oman's stunning marine environment and a desire to share its wonders with visitors from around the world. What started as a small family business has grown into one of Muscat's most trusted marine adventure companies.
            </p>
            <p className="text-gray-600 mb-6">
              Our founder, Captain Ahmed Al-Balushi, has been navigating Oman's waters for over 15 years. His deep knowledge of the local marine life and commitment to safety and environmental conservation forms the foundation of our company's values.
            </p>
            <p className="text-gray-600">
              Today, we operate a fleet of modern, well-maintained vessels and employ a team of experienced marine professionals who share our passion for the ocean and commitment to providing exceptional service.
            </p>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="MUSCATYACHTCLUB vessel"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-900 rounded-2xl p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-cyan-600 font-medium mb-1">{member.role}</p>
                <p className="text-gray-600">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety & Certifications</h2>
            <p className="text-gray-600 mb-6">
              We maintain the highest safety standards and hold all necessary certifications to operate in Oman's waters. Our commitment to safety ensures that every guest can enjoy their marine adventure with complete peace of mind.
            </p>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Safety equipment"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-blue-100 mb-6">
              To provide exceptional marine adventures that showcase the natural beauty of Oman's waters while promoting environmental conservation and creating lasting memories for our guests.
            </p>
            <p className="text-lg text-blue-100">
              We believe that through responsible tourism, we can help preserve Oman's marine treasures for future generations while sharing their wonder with the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;