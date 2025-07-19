import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
🌊 *CONTACT INQUIRY - MUSCATYACHTCLUB*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
📝 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

Please respond to this inquiry at your earliest convenience.
    `;

    const phoneNumber = '+96899999999';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'Marina Bandar Al Rowdha',
        'Muscat, Sultanate of Oman',
        'P.O. Box 1234, PC 100'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+968 9999 9999 (Main)',
        '+968 8888 8888 (Emergency)',
        '+968 7777 7777 (WhatsApp)'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@muscatyachtclub.com',
        'bookings@muscatyachtclub.com',
        'support@muscatyachtclub.com'
      ]
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: [
        'Daily: 6:00 AM - 8:00 PM',
        'Emergency: 24/7 Available',
        'Office: 8:00 AM - 6:00 PM'
      ]
    }
  ];

  const subjects = [
    'General Inquiry',
    'Booking Request',
    'Group Booking',
    'Private Charter',
    'Cancellation',
    'Complaint',
    'Feedback',
    'Other'
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact MUSCATYACHTCLUB
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our friendly team for bookings, inquiries, or any assistance you need for your marine adventure in Oman.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-blue-600" />
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a subject</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe your inquiry or let us know how we can help you..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message via WhatsApp
              </button>
            </form>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Marina Bandar Al Rowdha, Muscat</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="mb-6">
                For urgent bookings or emergency situations, contact us directly via WhatsApp or phone.
              </p>
              <div className="space-y-3">
                <a 
                  href="tel:+96899999999"
                  className="flex items-center text-white hover:text-blue-200 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call Now: +968 9999 9999
                </a>
                <a 
                  href="https://wa.me/+96899999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-blue-200 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 mr-3" />
                  WhatsApp: +968 9999 9999
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">How far in advance should I book?</h4>
                  <p className="text-gray-600 text-sm">We recommend booking at least 2-3 days in advance, especially during peak season.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">What's your cancellation policy?</h4>
                  <p className="text-gray-600 text-sm">Free cancellation up to 24 hours before the tour. Weather-related cancellations are fully refundable.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Do you provide hotel transfers?</h4>
                  <p className="text-gray-600 text-sm">Hotel transfers can be arranged for an additional fee. Please mention this when booking.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Are your tours suitable for children?</h4>
                  <p className="text-gray-600 text-sm">Yes! All our tours are family-friendly and we provide safety equipment for all ages.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;