import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, MapPin, ArrowRight, Shield, Camera, Utensils } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceDetails = {
    'dolphin-watching': {
      title: 'Dolphin Watching',
      description: 'Experience the magic of dolphins in their natural habitat along the beautiful Muscat coastline. Our expert guides will take you to the best spots where these magnificent creatures play and hunt.',
      fullDescription: 'Join us for an unforgettable dolphin watching experience in the pristine waters of Muscat. Our experienced marine biologists will guide you to the best locations where pods of dolphins are frequently spotted. You\'ll have the opportunity to observe these intelligent creatures in their natural environment while learning about their behavior and conservation.',
      image: 'https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '2 hours',
      capacity: 'Up to 15 people',
      price: 'From OMR 15',
      rating: 4.9,
      location: 'Muscat Marina',
      schedule: ['9:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'],
      inclusions: [
        'Professional marine guide',
        'Safety equipment',
        'Bottled water',
        'Light snacks',
        'Photography assistance',
        'Insurance coverage'
      ],
      exclusions: [
        'Hotel transfers',
        'Meals',
        'Personal expenses',
        'Tips (optional)'
      ],
      itinerary: [
        { time: '0 min', activity: 'Departure from Marina Bandar Al Rowdha' },
        { time: '15 min', activity: 'Safety briefing and equipment check' },
        { time: '30 min', activity: 'Cruise to dolphin watching areas' },
        { time: '60 min', activity: 'Dolphin spotting and observation' },
        { time: '90 min', activity: 'Photography and marine life education' },
        { time: '120 min', activity: 'Return to marina' }
      ],
      gallery: [
        'https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    'dimaniyat-island': {
      title: 'Dimaniyat Island Cruise',
      description: 'Discover pristine waters and vibrant marine life at the UNESCO protected Dimaniyat Islands.',
      fullDescription: 'Embark on a full-day adventure to the UNESCO World Heritage-listed Dimaniyat Islands, one of Oman\'s most pristine marine reserves. This exclusive cruise offers world-class snorkeling, pristine beaches, and encounters with diverse marine life including turtles, rays, and colorful tropical fish.',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '6 hours',
      capacity: 'Up to 16 people',
      price: 'From OMR 35',
      rating: 4.8,
      location: 'Marina Bandar Al Rowdha',
      schedule: ['8:00 AM'],
      inclusions: [
        'Professional marine guide',
        'Full snorkeling equipment',
        'Fresh lunch on board',
        'Bottled water and soft drinks',
        'Safety equipment',
        'Marine park fees',
        'Insurance coverage'
      ],
      exclusions: [
        'Hotel transfers',
        'Alcoholic beverages',
        'Personal expenses',
        'Tips (optional)'
      ],
      itinerary: [
        { time: '0 min', activity: 'Departure from Marina Bandar Al Rowdha' },
        { time: '60 min', activity: 'Arrival at Dimaniyat Islands' },
        { time: '90 min', activity: 'First snorkeling session' },
        { time: '180 min', activity: 'Beach time and lunch' },
        { time: '240 min', activity: 'Second snorkeling session' },
        { time: '300 min', activity: 'Return journey to marina' },
        { time: '360 min', activity: 'Arrival at marina' }
      ],
      gallery: [
        'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    'snorkeling-bandar-al-khairan': {
      title: 'Snorkeling in Bandar Al Khairan',
      description: 'Explore the underwater paradise of Bandar Al Khairan with crystal clear waters and coral reefs.',
      fullDescription: 'Discover the underwater wonders of Bandar Al Khairan, a protected marine area known for its crystal-clear waters, vibrant coral reefs, and diverse marine life. This half-day snorkeling adventure is perfect for both beginners and experienced snorkelers.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3 hours',
      capacity: 'Up to 12 people',
      price: 'From OMR 25',
      rating: 4.9,
      location: 'Bandar Al Khairan',
      schedule: ['9:00 AM', '1:00 PM'],
      inclusions: [
        'Professional snorkeling guide',
        'Full snorkeling equipment',
        'Safety equipment',
        'Bottled water',
        'Light snacks',
        'Insurance coverage'
      ],
      exclusions: [
        'Hotel transfers',
        'Meals',
        'Personal expenses',
        'Tips (optional)'
      ],
      itinerary: [
        { time: '0 min', activity: 'Departure from Bandar Al Khairan' },
        { time: '30 min', activity: 'Arrival at first snorkeling site' },
        { time: '60 min', activity: 'First snorkeling session' },
        { time: '120 min', activity: 'Move to second snorkeling site' },
        { time: '150 min', activity: 'Second snorkeling session' },
        { time: '180 min', activity: 'Return to starting point' }
      ],
      gallery: [
        'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    }
  };

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-blue-900">Home</Link></li>
            <li>/</li>
            <li><Link to="/services" className="hover:text-blue-900">Services</Link></li>
            <li>/</li>
            <li className="text-gray-900">{service.title}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {service.fullDescription}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-900 mr-2" />
                <span className="text-gray-700">{service.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-900 mr-2" />
                <span className="text-gray-700">{service.capacity}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-gray-700">{service.rating} Rating</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-900 mr-2" />
                <span className="text-gray-700">{service.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div className="text-3xl font-bold text-cyan-600">{service.price}</div>
              <Link
                to="/booking"
                className="bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-600 transition-colors inline-flex items-center"
              >
                Book Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          <div>
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Itinerary */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
              <div className="space-y-4">
                {service.itinerary.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-900 text-white text-sm px-3 py-1 rounded-full font-medium min-w-fit">
                      {item.time}
                    </div>
                    <div className="text-gray-700">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {service.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${service.title} ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  Included
                </h3>
                <ul className="space-y-2">
                  {service.inclusions.map((item, index) => (
                    <li key={index} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Camera className="w-5 h-5 text-red-600 mr-2" />
                  Not Included
                </h3>
                <ul className="space-y-2">
                  {service.exclusions.map((item, index) => (
                    <li key={index} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Available Times</h3>
              <div className="space-y-2">
                {service.schedule.map((time, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 text-center font-medium text-gray-700">
                    {time}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <Shield className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                  All safety equipment provided
                </li>
                <li className="flex items-start">
                  <Camera className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                  Photography assistance available
                </li>
                <li className="flex items-start">
                  <Utensils className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                  Dietary requirements can be accommodated
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Book This Adventure?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Join us for an unforgettable marine experience in the beautiful waters of Oman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Book This Experience
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;