import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, Users, Award, ArrowRight, Clock, MapPin } from 'lucide-react';

const Home = () => {
  const featuredPackages = [
    {
      id: 'dolphin-watching',
      title: 'Dolphin Watching',
      description: 'Experience the magic of dolphins in their natural habitat along the beautiful Muscat coastline.',
      image: 'https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2 hours',
      price: 'From OMR 15',
      rating: 4.9
    },
    {
      id: 'dimaniyat-island',
      title: 'Dimaniyat Island Cruise',
      description: 'Discover pristine waters and vibrant marine life at the UNESCO protected Dimaniyat Islands.',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '6 hours',
      price: 'From OMR 35',
      rating: 4.8
    },
    {
      id: 'snorkeling-bandar-al-khairan',
      title: 'Snorkeling Bandar Al Khairan',
      description: 'Explore the underwater paradise of Bandar Al Khairan with crystal clear waters and coral reefs.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '4 hours',
      price: 'From OMR 25',
      rating: 4.9
    }
  ];

  const trustIndicators = [
    { icon: Shield, title: 'Licensed & Insured', description: 'Fully certified marine operator' },
    { icon: Users, title: '10+ Years Experience', description: 'Trusted by thousands of guests' },
    { icon: Award, title: 'Safety First', description: 'International safety standards' },
    { icon: Star, title: '4.9/5 Rating', description: 'Excellent customer reviews' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'United Kingdom',
      rating: 5,
      comment: 'Absolutely incredible experience! The dolphin watching was magical and the crew was so professional.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ahmed Al-Rashid',
      country: 'UAE',
      rating: 5,
      comment: 'Perfect day out with the family. The Dimaniyat Island trip was breathtaking and well organized.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Maria Schmidt',
      country: 'Germany',
      rating: 5,
      comment: 'The snorkeling experience was amazing! Crystal clear waters and beautiful marine life.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to MUSCATYACHTCLUB
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your Gateway to Oman's Marine Adventures
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-200">
              Experience the finest yacht tours, dolphin watching, and snorkeling adventures in the pristine waters of Muscat and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-colors inline-flex items-center justify-center"
              >
                Book Your Adventure Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Marine Adventures
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular packages and create unforgettable memories in Oman's beautiful waters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <div className="text-cyan-600 font-bold">{pkg.price}</div>
                  </div>
                  <Link
                    to={`/services/${pkg.id}`}
                    className="w-full bg-blue-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
                  >
                    Learn More & Book
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MUSCATYACHTCLUB?</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Your safety, comfort, and satisfaction are our top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <indicator.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{indicator.title}</h3>
                <p className="text-blue-200">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have experienced the magic of Oman's marine adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.country}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-600 transition-colors inline-flex items-center"
            >
              Read More Reviews
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book your marine adventure today and discover the beauty of Oman's coastline with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Book Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;