import React, { useState } from 'react';
import { Calendar, Users, Clock, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    country: '',
    specialRequests: ''
  });

  const services = [
    { id: 'semi-submarine-tour', name: 'Semi Submarine Tour', price: 'OMR 20' },
    { id: 'dolphin-watching', name: 'Dolphin Watching', price: 'OMR 15' },
    { id: 'dolphin-watching-snorkeling', name: 'Dolphin Watching & Snorkeling', price: 'OMR 25' },
    { id: 'dhow-cruise', name: 'Traditional Dhow Cruise', price: 'OMR 18' },
    { id: 'dimaniyat-island', name: 'Dimaniyat Island Cruise', price: 'OMR 35' },
    { id: 'bandar-al-khairan-excursion', name: 'Island Excursion – Bandar Al Khairan', price: 'OMR 28' },
    { id: 'coastal-cruise', name: 'Coastal Cruise', price: 'OMR 12' },
    { id: 'sunset-cruise', name: 'Sunset Cruise', price: 'OMR 22' },
    { id: 'fishing-trip', name: 'Fishing Trip', price: 'OMR 30' },
    { id: 'snorkeling-bandar-al-khairan', name: 'Snorkeling in Bandar Al Khairan', price: 'OMR 25' },
    { id: 'private-charter', name: 'Private Dhow/Boat Charter', price: 'OMR 150' }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const selectedService = services.find(s => s.id === formData.service);
    const message = `
🌊 *BOOKING REQUEST - MUSCATYACHTCLUB*

📋 *Service:* ${selectedService?.name || 'Not selected'}
📅 *Date:* ${formData.date}
🕒 *Time:* ${formData.time}
👥 *Guests:* ${formData.guests}

👤 *Contact Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Country: ${formData.country}

📝 *Special Requests:*
${formData.specialRequests || 'None'}

Please confirm availability and provide booking details.
    `;

    const phoneNumber = '+96899999999';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const isFormValid = formData.service && formData.date && formData.time && formData.name && formData.email && formData.phone;

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Marine Adventure
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your preferred service and provide your details to secure your booking with MUSCATYACHTCLUB.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h2>
              
              {/* Service Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Service *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Choose your adventure</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name} - {service.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Preferred Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Number of Guests */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              
              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Special Requests or Dietary Requirements
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please let us know if you have any special requirements, dietary restrictions, or accessibility needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-colors ${
                  isFormValid
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Send Booking Request via WhatsApp
              </button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h3>
              
              {formData.service && (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">
                      {services.find(s => s.id === formData.service)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium">
                      {services.find(s => s.id === formData.service)?.price}
                    </span>
                  </div>
                  {formData.date && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">{formData.date}</span>
                    </div>
                  )}
                  {formData.time && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{formData.time}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guests:</span>
                    <span className="font-medium">{formData.guests}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">+968 9999 9999</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">info@muscatyachtclub.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Marina Bandar Al Rowdha, Muscat</span>
                </div>
              </div>
            </div>

            <div className="bg-cyan-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Important Notes</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Booking confirmation required within 24 hours</li>
                <li>• Weather conditions may affect schedule</li>
                <li>• Cancellation policy: 24 hours notice required</li>
                <li>• Life jackets provided for all guests</li>
                <li>• Suitable for all ages and swimming abilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;