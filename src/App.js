import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ChevronDown, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ArtistPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    emailjs.init('Pmhf_2RyBSjCYmGHY');
  }, []);

  // Sample artwork data - replace with actual images
  const artworks = [
    { id: 1, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=500&fit=crop', price: '$150-300' },
    { id: 2, title: 'Oil Landscape', category: 'Oil Painting', image: 'https://images.unsplash.com/photo-1561214115-6d2f1b0609fa?w=500&h=500&fit=crop', price: '$300-800' },
    { id: 3, title: 'Woman\'s Portrait', category: 'Pencil Sketch', image: 'https://images.unsplash.com/photo-1578762996442-48f60103fc96?w=500&h=500&fit=crop', price: '$200-400' },
    { id: 4, title: 'Sunset Over Water', category: 'Oil Painting', image: 'https://images.unsplash.com/photo-1549887534-1bcfc7da91c8?w=500&h=500&fit=crop', price: '$400-900' },
    { id: 5, title: 'Detailed Study', category: 'Pencil Sketch', image: 'https://images.unsplash.com/photo-1565193566173-7cde29f6e9e9?w=500&h=500&fit=crop', price: '$250-450' },
    { id: 6, title: 'Abstract Oil', category: 'Oil Painting', image: 'https://images.unsplash.com/photo-1578926078328-123aef308e7f?w=500&h=500&fit=crop', price: '$350-750' },
  ];

  const faqData = [
    {
      question: 'How long does a custom portrait take?',
      answer: 'Pencil sketches typically take 2-4 weeks, while oil paintings can take 4-8 weeks depending on complexity and size. Rush commissions are available at an additional cost.'
    },
    {
      question: 'What is your commission process?',
      answer: 'First, we discuss your vision via email or phone. Then I provide a quote and timeline. A 50% deposit is required to begin work, with the remainder due upon completion.'
    },
    {
      question: 'Do you work from photos or in person?',
      answer: 'I work primarily from high-quality photographs, which allows me to work with clients worldwide. For local clients, in-person sessions are also available.'
    },
    {
      question: 'Can you paint/sketch a specific person or subject?',
      answer: 'Absolutely! Commissions are my specialty. Whether it\'s a portrait, pet, or landscape, I can create a custom piece based on your requirements.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'Once work begins on your commission, the 50% deposit is non-refundable. However, if you\'re unsatisfied with the final product, we can discuss revisions.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes! I ship worldwide with proper insurance and packaging. Shipping costs will be calculated based on destination and artwork size.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setFormError(''); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_m66xtu9', // Your Service ID
        'template_80u6eem', // Your Template ID
        {
          to_email: 'ashanujose@gmail.com', // Your email address
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );

      if (result.status === 200) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormError('Failed to send inquiry. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Lora', serif" }}>
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <img 
            src="/logo.png" 
            alt="AshaArtSHED Logo" 
            className="h-20 object-contain"
            style={{ maxWidth: '350px' }}
          />
          <div className="flex gap-6 text-sm">
            {['home', 'about', 'gallery', 'contact', 'faq'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? 'text-amber-900 border-b-2 border-amber-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Bespoke Artistry
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Custom portrait sketches and oil paintings created with passion and precision. 
              Each commission is a unique work of art, capturing essence and emotion.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setActiveSection('gallery')}
                className="bg-amber-900 text-white px-8 py-3 rounded hover:bg-amber-800 transition"
              >
                View Portfolio
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className="border-2 border-amber-900 text-amber-900 px-8 py-3 rounded hover:bg-amber-50 transition"
              >
                Commission Now
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 text-left">
              <div>
                <div className="text-3xl font-bold text-amber-900">30+</div>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-900">17+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-900">100%</div>
                <p className="text-gray-600">Custom Work</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="py-20 bg-gradient-to-b from-white via-amber-50 to-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* Artist Name Header */}
            <div className="text-center mb-16">
              <h1 className="text-7xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em' }}>
                Asha Jose
              </h1>
              <h2 className="text-2xl text-amber-900 font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Portrait Artist
              </h2>
              <div className="w-24 h-1 bg-amber-900 mx-auto"></div>
            </div>

            {/* Artist Statement */}
            <div className="space-y-8">
              {/* Opening Statement */}
              <div className="relative">
                <div className="absolute -left-4 top-0 text-6xl text-amber-200 opacity-30" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "
                </div>
                <p className="text-xl text-gray-700 leading-relaxed font-light pl-4 italic">
                  Art has been part of my life for as long as I can remember.
                </p>
              </div>

              {/* Main Content */}
              <div className="bg-white rounded-lg shadow-lg p-12 border-l-4 border-amber-900">
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  Based in Brisbane, Queensland, I am a portrait artist with over 17 years of professional experience, working in graphite, coloured pencils, watercolour, and oil paint—my preferred medium.
                </p>

                {/* Highlighted Section */}
                <div className="bg-amber-50 rounded-lg p-8 my-8 border border-amber-200">
                  <p className="text-lg text-amber-900 leading-relaxed font-medium">
                    I am passionate about capturing more than just a likeness. Every portrait is created to reflect personality, emotion, and the unique story behind the subject. My work combines traditional techniques with careful attention to detail, resulting in timeless artworks that celebrate meaningful moments and connections.
                  </p>
                </div>

                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  Alongside my art practice, I work in higher education, an experience that continually inspires creativity and fresh perspectives.
                </p>

                {/* Three Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
                  <div className="text-center">
                    <div className="text-4xl text-amber-900 mb-3">✦</div>
                    <h3 className="text-lg font-bold text-amber-900 mb-2">Commissions</h3>
                    <p className="text-gray-600 text-sm">Custom portraits tailored to your vision</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl text-amber-900 mb-3">✦</div>
                    <h3 className="text-lg font-bold text-amber-900 mb-2">Collaborations</h3>
                    <p className="text-gray-600 text-sm">Working together to create something special</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl text-amber-900 mb-3">✦</div>
                    <h3 className="text-lg font-bold text-amber-900 mb-2">Exhibitions</h3>
                    <p className="text-gray-600 text-sm">Showcasing artwork in galleries and spaces</p>
                  </div>
                </div>
              </div>

              {/* Closing Section */}
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8 text-center">
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  Completed artworks can be shipped locally, nationally, and internationally.
                </p>
                <div className="h-1 w-16 bg-amber-900 mx-auto my-6"></div>
                <p className="text-lg text-amber-900 leading-relaxed font-medium italic">
                  Thank you for supporting independent and local artists. Every portrait tells a story, and I would be honoured to help tell yours.
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <button
                  onClick={() => setActiveSection('contact')}
                  className="bg-amber-900 text-white px-12 py-4 rounded-lg font-semibold hover:bg-amber-800 transition text-lg"
                >
                  Start Your Commission
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {activeSection === 'gallery' && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Portfolio
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Explore a selection of completed commissions. Each piece represents a unique vision brought to life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks.map(artwork => (
                <div
                  key={artwork.id}
                  onClick={() => setSelectedImage(artwork)}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden bg-gray-100 h-80">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">View</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-lg">{artwork.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{artwork.category}</p>
                    <p className="text-amber-900 font-semibold">{artwork.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="py-16 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in Touch
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Interested in commissioning a custom piece? Let's discuss your vision.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-900"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-900"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-900"
                      placeholder="+61 (0) XX XXXX XXXX"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-900"
                      placeholder="Tell me about your commission idea..."
                    ></textarea>
                  </div>
                  
                  {formError && (
                    <p className="mb-4 text-red-600 text-sm font-semibold">
                      {formError}
                    </p>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-900 text-white py-3 rounded font-semibold hover:bg-amber-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                  
                  {formSubmitted && (
                    <p className="mt-4 text-green-600 text-center font-semibold">
                      ✓ Thank you! Your inquiry has been sent. I'll contact you soon!
                    </p>
                  )}
                </form>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Contact Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Mail className="w-6 h-6 text-amber-900 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-600">ashanujose@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Phone className="w-6 h-6 text-amber-900 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-gray-600">+61 (0) XX XXXX XXXX</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-amber-900 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-gray-600">Brisbane, Queensland</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-100 p-8 rounded-lg border-2 border-amber-900">
                  <h4 className="font-bold text-amber-900 mb-3">Commission Process</h4>
                  <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                    <li>Send your inquiry with reference images</li>
                    <li>Receive a custom quote and timeline</li>
                    <li>Pay 50% deposit to secure your spot</li>
                    <li>Art creation begins</li>
                    <li>Progress updates shared</li>
                    <li>Final payment & delivery</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {activeSection === 'faq' && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Common questions about commissions, pricing, and process
            </p>

            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-amber-50 transition"
                  >
                    <span className="font-semibold text-left">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-900 flex-shrink-0 transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 py-4 bg-amber-50 border-t border-gray-200 text-gray-700">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-lg overflow-hidden max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 mb-2">{selectedImage.category}</p>
              <p className="text-amber-900 font-semibold text-lg mb-4">{selectedImage.price}</p>
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setActiveSection('contact');
                }}
                className="w-full bg-amber-900 text-white py-2 rounded hover:bg-amber-800 transition"
              >
                Commission Similar Work
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            AshaArtSHED
          </p>
          <p className="text-gray-400 text-sm">
            © 2024 All rights reserved. Custom commissions available worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArtistPortfolio;
