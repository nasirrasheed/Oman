import React, { useState } from 'react';
import { Star, Quote, ThumbsUp, MessageSquare, Send } from 'lucide-react';

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    service: '',
    rating: 5,
    title: '',
    review: ''
  });

  const [showReviewForm, setShowReviewForm] = useState(false);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'United Kingdom',
      service: 'Dolphin Watching',
      rating: 5,
      title: 'Absolutely magical experience!',
      review: 'The dolphin watching tour was incredible! We saw multiple pods of dolphins and the crew was so knowledgeable. The boat was comfortable and the whole experience was perfectly organized. I would definitely recommend this to anyone visiting Muscat.',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 12
    },
    {
      id: 2,
      name: 'Ahmed Al-Rashid',
      country: 'UAE',
      service: 'Dimaniyat Island Cruise',
      rating: 5,
      title: 'Perfect family day out',
      review: 'We took our family of 6 on the Dimaniyat Island cruise and it was perfect! The snorkeling was amazing - crystal clear waters and so much marine life. The lunch was delicious and the crew took great care of us. Our kids loved every minute of it.',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 8
    },
    {
      id: 3,
      name: 'Maria Schmidt',
      country: 'Germany',
      service: 'Snorkeling Bandar Al Khairan',
      rating: 5,
      title: 'Underwater paradise',
      review: 'The snorkeling at Bandar Al Khairan was breathtaking! The water was so clear and we saw colorful fish, rays, and even some turtles. The guide was very professional and made sure everyone was comfortable in the water. Highly recommended!',
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 15
    },
    {
      id: 4,
      name: 'John Thompson',
      country: 'Australia',
      service: 'Sunset Cruise',
      rating: 5,
      title: 'Romantic and beautiful',
      review: 'My wife and I went on the sunset cruise for our anniversary and it was perfect! The views were stunning, the atmosphere was romantic, and the crew was very attentive. We had drinks and light snacks while watching the most beautiful sunset over the Arabian Sea.',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 6
    },
    {
      id: 5,
      name: 'Priya Sharma',
      country: 'India',
      service: 'Dhow Cruise',
      rating: 4,
      title: 'Cultural experience',
      review: 'The traditional dhow cruise was a wonderful cultural experience. Learning about Omani maritime history while sailing on a traditional vessel was fascinating. The crew shared interesting stories and the coastal views were magnificent.',
      date: '2024-01-03',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 9
    },
    {
      id: 6,
      name: 'Carlos Rodriguez',
      country: 'Spain',
      service: 'Fishing Trip',
      rating: 5,
      title: 'Great fishing adventure',
      review: 'As an experienced angler, I was impressed with the fishing trip! The crew knew all the best spots and we caught some great fish. The equipment was top quality and they even helped us cook our catch. A memorable day on the water!',
      date: '2024-01-01',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 4
    }
  ];

  const services = [
    'Dolphin Watching',
    'Dimaniyat Island Cruise',
    'Snorkeling Bandar Al Khairan',
    'Sunset Cruise',
    'Dhow Cruise',
    'Fishing Trip',
    'Coastal Cruise',
    'Semi Submarine Tour',
    'Private Charter'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
🌊 *NEW REVIEW SUBMISSION - MUSCATYACHTCLUB*

👤 *Customer Details:*
• Name: ${newReview.name}
• Email: ${newReview.email}
• Service: ${newReview.service}

⭐ *Rating:* ${newReview.rating}/5 stars

📝 *Review Title:* ${newReview.title}

💬 *Review:*
${newReview.review}

Please add this review to our website and respond to the customer.
    `;

    const phoneNumber = '+96899999999';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setShowReviewForm(false);
    setNewReview({
      name: '',
      email: '',
      service: '',
      rating: 5,
      title: '',
      review: ''
    });
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our guests say about their marine adventures with MUSCATYACHTCLUB and share your own experience.
          </p>
        </div>

        {/* Review Summary */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {renderStars(Math.round(averageRating))}
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{reviews.length}</div>
              <p className="text-gray-600">Total Reviews</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Recommended</p>
            </div>
          </div>
        </div>

        {/* Review Form Toggle */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-600 transition-colors inline-flex items-center"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            {showReviewForm ? 'Hide Review Form' : 'Write a Review'}
          </button>
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h2>
            
            <form onSubmit={handleSubmitReview} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newReview.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={newReview.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Experience *
                  </label>
                  <select
                    name="service"
                    value={newReview.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating *
                  </label>
                  <select
                    name="rating"
                    value={newReview.rating}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    {[5, 4, 3, 2, 1].map(rating => (
                      <option key={rating} value={rating}>
                        {rating} Star{rating !== 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Review Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={newReview.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Summarize your experience"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review *
                </label>
                <textarea
                  name="review"
                  value={newReview.review}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your experience with MUSCATYACHTCLUB..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Review
              </button>
            </form>
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
                      <p className="text-gray-600">{review.country}</p>
                    </div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex mr-3">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-blue-600 font-medium">{review.service}</span>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{review.title}</h4>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-gray-300" />
                    <p className="text-gray-700 pl-6 mb-4">{review.review}</p>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-gray-500">
                    <button className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span>Helpful ({review.helpful})</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External Reviews */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Find Us on Review Platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="text-gray-600 mb-2">TripAdvisor</p>
              <p className="text-sm text-gray-500">Based on 157 reviews</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="text-gray-600 mb-2">Google Reviews</p>
              <p className="text-sm text-gray-500">Based on 203 reviews</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="text-gray-600 mb-2">Booking.com</p>
              <p className="text-sm text-gray-500">Based on 89 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;