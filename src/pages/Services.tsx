import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, MapPin, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'semi-submarine-tour',
      title: 'Semi Submarine Tour',
      description: 'Explore the underwater world without getting wet in our comfortable semi-submarine vessel.',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '1.5 hours',
      capacity: 'Up to 20 people',
      price: 'From OMR 20',
      rating: 4.8,
      highlights: ['Underwater viewing', 'Air-conditioned comfort', 'Marine life spotting']
    },
    {
      id: 'dolphin-watching',
      title: 'Dolphin Watching',
      description: 'Experience the magic of dolphins in their natural habitat along the beautiful Muscat coastline.',
      image: 'https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2 hours',
      capacity: 'Up to 15 people',
      price: 'From OMR 15',
      rating: 4.9,
      highlights: ['Wild dolphin encounters', 'Photography opportunities', 'Expert marine guide']
    },
    {
      id: 'dolphin-watching-snorkeling',
      title: 'Dolphin Watching & Snorkeling',
      description: 'Combine dolphin watching with snorkeling for the ultimate marine adventure experience.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '3 hours',
      capacity: 'Up to 12 people',
      price: 'From OMR 25',
      rating: 4.9,
      highlights: ['Dolphin watching', 'Snorkeling equipment', 'Refreshments included']
    },
    {
      id: 'dhow-cruise',
      title: 'Traditional Dhow Cruise',
      description: 'Sail on a traditional Omani dhow and experience the heritage of Arabian maritime culture.',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2.5 hours',
      capacity: 'Up to 25 people',
      price: 'From OMR 18',
      rating: 4.7,
      highlights: ['Traditional sailing', 'Cultural experience', 'Sunset views']
    },
    {
      id: 'dimaniyat-island',
      title: 'Dimaniyat Island Cruise',
      description: 'Discover pristine waters and vibrant marine life at the UNESCO protected Dimaniyat Islands.',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '6 hours',
      capacity: 'Up to 16 people',
      price: 'From OMR 35',
      rating: 4.8,
      highlights: ['UNESCO site', 'Snorkeling paradise', 'Lunch included']
    },
    {
      id: 'bandar-al-khairan-excursion',
      title: 'Island Excursion – Bandar Al Khairan',
      description: 'Explore the stunning fjords and hidden coves of Bandar Al Khairan marine reserve.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '4 hours',
      capacity: 'Up to 14 people',
      price: 'From OMR 28',
      rating: 4.8,
      highlights: ['Scenic fjords', 'Swimming stops', 'Photography spots']
    },
    {
      id: 'coastal-cruise',
      title: 'Coastal Cruise',
      description: 'Enjoy a relaxing cruise along Muscat\'s beautiful coastline with stunning views.',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2 hours',
      capacity: 'Up to 20 people',
      price: 'From OMR 12',
      rating: 4.6,
      highlights: ['Coastal views', 'Relaxing atmosphere', 'Light refreshments']
    },
    {
      id: 'sunset-cruise',
      title: 'Sunset Cruise',
      description: 'Experience the magic of an Omani sunset from the water with our romantic evening cruise.',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2.5 hours',
      capacity: 'Up to 18 people',
      price: 'From OMR 22',
      rating: 4.9,
      highlights: ['Spectacular sunset', 'Evening atmosphere', 'Romantic setting']
    },
    {
      id: 'fishing-trip',
      title: 'Fishing Trip',
      description: 'Try your hand at fishing in the rich waters of the Arabian Sea with experienced guides.',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '4 hours',
      capacity: 'Up to 8 people',
      price: 'From OMR 30',
      rating: 4.7,
      highlights: ['Fishing equipment', 'Expert guidance', 'Fresh catch option']
    },
    {
      id: 'snorkeling-bandar-al-khairan',
      title: 'Snorkeling in Bandar Al Khairan',
      description: 'Explore the underwater paradise of Bandar Al Khairan with crystal clear waters.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '3 hours',
      capacity: 'Up to 12 people',
      price: 'From OMR 25',
      rating: 4.9,
      highlights: ['Crystal clear waters', 'Coral reefs', 'Marine life']
    },
    {
      id: 'private-charter',
      title: 'Private Dhow/Boat Charter',
      description: 'Charter your own private vessel for a customized marine adventure experience.',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: 'Flexible',
      capacity: 'Up to 30 people',
      price: 'From OMR 150',
      rating: 4.8,
      highlights: ['Private experience', 'Customizable itinerary', 'Dedicated crew']
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Marine Adventure Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated selection of marine adventures, each designed to showcase the natural beauty and rich marine life of Oman's waters.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{service.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{service.capacity}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-cyan-600 font-bold text-lg">{service.price}</div>
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="w-full bg-blue-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
                >
                  View Details & Book
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-xl mb-6 text-blue-100">
            We can create a personalized marine adventure tailored to your preferences and group size.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Contact Us for Custom Package
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;