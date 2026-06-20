import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ChevronDown, X, Sparkles, Heart, Eye } from 'lucide-react';
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

  useEffect(() => {
    emailjs.init('Pmhf_2RyBSjCYmGHY');
  }, []);

  const featuredWorks = [
    { id: 1, title: 'Mother & Child', image: '/images/image (1).png', price: '$150-200' },
    { id: 2, title: 'Serene Portrait', image: '/images/image (2).png', price: '$150-200' },
    { id: 3, title: 'Intimate Moment', image: '/images/image (3).png', price: '$150-200' },
    { id: 4, title: 'Family Bond', image: '/images/image (4).png', price: '$150-200' },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      text: 'Asha captured the essence of our family beautifully. Highly recommended!',
      role: 'Portrait Client'
    },
    {
      name: 'James Chen',
      text: 'Amazed at how lifelike and expressive the portrait is. A true artist.',
      role: 'Oil Painting Commission'
    },
    {
      name: 'Emma Williams',
      text: 'Professional, talented, and passionate. Worth every penny!',
      role: 'Pencil Sketch Client'
    }
  ];

  const whyChoose = [
    {
      icon: Eye,
      title: 'Exceptional Detail',
      description: 'Every stroke captures the soul of your subject.'
    },
    {
      icon: Heart,
      title: 'Personalized Approach',
      description: 'Each commission tailored to your unique vision.'
    },
    {
      icon: Sparkles,
      title: 'Timeless Quality',
      description: '17+ years creating artworks that endure.'
    }
  ];

  const processSteps = [
    { number: '1', title: 'Consult', description: 'Share your vision' },
    { number: '2', title: 'Quote', description: 'Get pricing & timeline' },
    { number: '3', title: 'Create', description: '50% deposit' },
    { number: '4', title: 'Updates', description: 'Progress check-ins' },
    { number: '5', title: 'Deliver', description: 'Final payment' }
  ];

  const artworks = [
    { id: 1, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (1).png', size: 'A4 Paper', price: '$150-200' },
    { id: 2, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (2).png', size: 'A4 Paper', price: '$150-200' },
    { id: 3, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (3).png', size: 'A4 Paper', price: '$150-200' },
    { id: 4, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (4).png', size: 'A4 Paper', price: '$150-200' },
    { id: 5, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (5).png', size: 'A4 Paper', price: '$150-200' },
    { id: 6, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (6).png', size: 'A4 Paper', price: '$150-200' },
    { id: 7, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (7).png', size: 'A4 Paper', price: '$150-200' },
    { id: 8, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (8).png', size: 'A4 Paper', price: '$150-200' },
    { id: 9, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (9).png', size: 'A4 Paper', price: '$150-200' },
    { id: 10, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (10).png', size: 'A4 Paper', price: '$150-200' },
    { id: 11, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (11).png', size: 'A4 Paper', price: '$150-200' },
    { id: 12, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (12).png', size: 'A4 Paper', price: '$150-200' },
    { id: 13, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (13).png', size: 'A4 Paper', price: '$150-200' },
    { id: 14, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (14).png', size: 'A4 Paper', price: '$150-200' },
    { id: 15, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (15).png', size: 'A4 Paper', price: '$150-200' },
    { id: 16, title: 'Portrait in Charcoal', category: 'Pencil Sketch', image: '/images/image (16).png', size: 'A4 Paper', price: '$150-200' },
  ];

  const faqData = [
    {
      question: 'How long does a custom portrait take?',
      answer: 'Most graphite portraits are completed within 1–2 weeks, while oil paintings typically take 4–8 weeks. Timing depends on the size, detail, and complexity of the artwork. If you have a specific deadline, please let me know when enquiring.'
    },
    {
      question: 'What is your commission process?',
      answerList: [
        'Contact me to discuss your portrait idea.',
        'Receive a personalised quote and timeline.',
        'Secure your booking with a 50% deposit.',
        'I create your artwork and provide updates along the way.',
        'Final payment is due upon completion before delivery or shipping.'
      ]
    },
    {
      question: 'Do you work from photos or in person?',
      answer: 'I primarily work from high-quality photographs, allowing me to create portraits for clients worldwide. Local consultations or photography sessions may be available by arrangement.'
    },
    {
      question: 'Can you create a portrait of a specific person, pet, or subject?',
      answer: 'Absolutely. I create custom artwork of people, pets, families, landscapes, and meaningful places. Every commission is tailored to your vision and preferences.'
    },
    {
      question: 'Do you have a waiting list?',
      answer: 'I accept a limited number of commissions at a time to ensure every artwork receives the attention it deserves. Availability varies throughout the year, so early bookings are recommended.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'A 50% deposit is required to secure your booking and is non-refundable once work has commenced. If you have concerns about the finished artwork, I am happy to discuss reasonable revisions to ensure your satisfaction.'
    },
    {
      question: 'What sizes are available?',
      answer: 'I offer a range of standard sizes for both graphite portraits and oil paintings, with custom sizes available on request. I\'m happy to recommend the best option for your space and budget.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'Payments can be made via bank transfer or PayPal. A 50% deposit is required to begin your commission, with the balance payable upon completion.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, I ship artwork worldwide. Every piece is carefully packaged, insured, and sent with tracking to ensure it arrives safely.'
    },
    {
      question: 'How much does a custom portrait cost?',
      answer: 'Pricing depends on the size, medium, number of subjects, and level of detail. Contact me for a personalised quote.'
    },
    {
      question: 'Can I commission a portrait as a gift?',
      answer: 'Yes! Custom portraits make meaningful gifts for birthdays, anniversaries, weddings, memorials, and other special occasions.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setFormError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    try {
      const result = await emailjs.send(
        'service_m66xtu9',
        'template_80u6eem',
        {
          to_email: 'ashanujose@gmail.com',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );

      if (result.status === 200) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        
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

      {/* Home Section - COMPACT */}
      {activeSection === 'home' && (
        <div>
          {/* Hero Section */}
          <section className="py-12 bg-gradient-to-br from-amber-50 via-white to-orange-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <p className="text-amber-900 font-semibold mb-2 tracking-widest text-sm">CUSTOM PORTRAIT ARTIST</p>
              <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Capture Your Story
              </h1>
              <p className="text-lg text-gray-600 mb-3 leading-relaxed max-w-2xl mx-auto">
                Every portrait is a window into the soul. Through 17 years of dedicated craftsmanship, I create timeless artworks that celebrate moments that matter.
              </p>
              <p className="text-gray-500 mb-6 max-w-2xl mx-auto italic text-sm">
                "Art immortalizes emotion and preserves precious moments in their most authentic form."
              </p>
              <div className="flex gap-3 justify-center mb-10">
                <button
                  onClick={() => setActiveSection('gallery')}
                  className="bg-amber-900 text-white px-6 py-2 rounded hover:bg-amber-800 transition font-semibold text-sm"
                >
                  View Portfolio
                </button>
                <button
                  onClick={() => setActiveSection('contact')}
                  className="border-2 border-amber-900 text-amber-900 px-6 py-2 rounded hover:bg-amber-50 transition font-semibold text-sm"
                >
                  Commission Now
                </button>
              </div>

              {/* Stats - Compact */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-amber-900">30+</div>
                  <p className="text-sm text-gray-600">Satisfied Clients</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-900">17+</div>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-900">100%</div>
                  <p className="text-sm text-gray-600">Custom Work</p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Works Section */}
          <section className="py-10 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Featured Works
                </h2>
                <div className="w-16 h-0.5 bg-amber-900 mx-auto mb-3"></div>
                <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                  A glimpse into recent commissions showcasing detail and emotional depth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredWorks.map(work => (
                  <div
                    key={work.id}
                    onClick={() => setSelectedImage(artworks[work.id - 1])}
                    className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="relative overflow-hidden bg-gray-100 h-48">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">View</span>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <h3 className="font-bold text-base mb-1">{work.title}</h3>
                      <p className="text-amber-900 font-semibold text-sm">{work.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => setActiveSection('gallery')}
                  className="border-2 border-amber-900 text-amber-900 px-6 py-2 rounded hover:bg-amber-50 transition font-semibold text-sm"
                >
                  View All Works
                </button>
              </div>
            </div>
          </section>

          {/* Why Choose Asha Section */}
          <section className="py-10 bg-amber-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Why Choose Asha
                </h2>
                <div className="w-16 h-0.5 bg-amber-900 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {whyChoose.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                      <IconComponent className="w-12 h-12 text-amber-900 mx-auto mb-3" />
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-10 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Client Stories
                </h2>
                <div className="w-16 h-0.5 bg-amber-900 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-900 hover:shadow-lg transition-shadow">
                    <p className="text-gray-700 mb-3 italic text-sm leading-relaxed">"{testimonial.text}"</p>
                    <div className="border-t border-amber-200 pt-3">
                      <p className="font-semibold text-amber-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-10 bg-amber-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  How It Works
                </h2>
                <div className="w-16 h-0.5 bg-amber-900 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-lg p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                      <div className="w-10 h-10 bg-amber-900 text-white rounded-full flex items-center justify-center font-bold text-base mx-auto mb-3">
                        {step.number}
                      </div>
                      <h3 className="font-bold text-sm mb-1">{step.title}</h3>
                      <p className="text-xs text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => setActiveSection('contact')}
                  className="bg-amber-900 text-white px-8 py-2 rounded-lg font-semibold hover:bg-amber-800 transition text-sm"
                >
                  Start Your Commission
                </button>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-8 bg-gradient-to-r from-amber-900 to-orange-800 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Commission?
              </h2>
              <p className="text-base mb-6 opacity-90">
                Let's create something extraordinary together.
              </p>
              <button
                onClick={() => setActiveSection('contact')}
                className="bg-white text-amber-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-sm"
              >
                Get Started
              </button>
            </div>
          </section>
        </div>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="py-16 bg-gradient-to-b from-white via-amber-50 to-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-6xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em' }}>
                Asha Jose
              </h1>
              <h2 className="text-xl text-amber-900 font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Portrait Artist
              </h2>
              <div className="w-20 h-1 bg-amber-900 mx-auto"></div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 text-5xl text-amber-200 opacity-30" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-light pl-4 italic">
                  Art has been part of my life for as long as I can remember.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-10 border-l-4 border-amber-900">
                <p className="text-base text-gray-800 leading-relaxed mb-5">
                  Based in Brisbane, Queensland, I am a portrait artist with over 17 years of professional experience, working in graphite, coloured pencils, watercolour, and oil paint—my preferred medium.
                </p>

                <div className="bg-amber-50 rounded-lg p-6 my-6 border border-amber-200">
                  <p className="text-base text-amber-900 leading-relaxed font-medium">
                    I am passionate about capturing more than just a likeness. Every portrait is created to reflect personality, emotion, and the unique story behind the subject. My work combines traditional techniques with careful attention to detail, resulting in timeless artworks that celebrate meaningful moments and connections.
                  </p>
                </div>

                <p className="text-base text-gray-800 leading-relaxed mb-5">
                  Alongside my art practice, I work in higher education, an experience that continually inspires creativity and fresh perspectives.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                  <div className="text-center">
                    <div className="text-3xl text-amber-900 mb-2">✦</div>
                    <h3 className="text-base font-bold text-amber-900 mb-2">Commissions</h3>
                    <p className="text-gray-600 text-sm">Custom portraits tailored to your vision</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl text-amber-900 mb-2">✦</div>
                    <h3 className="text-base font-bold text-amber-900 mb-2">Collaborations</h3>
                    <p className="text-gray-600 text-sm">Working together to create something special</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl text-amber-900 mb-2">✦</div>
                    <h3 className="text-base font-bold text-amber-900 mb-2">Exhibitions</h3>
                    <p className="text-gray-600 text-sm">Showcasing artwork in galleries and spaces</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8 text-center">
                <p className="text-base text-gray-800 leading-relaxed mb-4">
                  Completed artworks can be shipped locally, nationally, and internationally.
                </p>
                <div className="h-0.5 w-12 bg-amber-900 mx-auto my-4"></div>
                <p className="text-base text-amber-900 leading-relaxed font-medium italic">
                  Thank you for supporting independent artists. Every portrait tells a story, and I would be honoured to help tell yours.
                </p>
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => setActiveSection('contact')}
                  className="bg-amber-900 text-white px-10 py-3 rounded-lg font-semibold hover:bg-amber-800 transition"
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
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Portfolio
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-sm">
              Explore a selection of completed commissions. Each piece represents a unique vision brought to life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {artworks.map(artwork => (
                <div
                  key={artwork.id}
                  onClick={() => setSelectedImage(artwork)}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="relative overflow-hidden bg-gray-100 h-48">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm">View</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white">
                    <h3 className="font-bold text-sm">{artwork.title}</h3>
                    <p className="text-xs text-gray-600 mb-0.5">{artwork.category}</p>
                    <p className="text-xs text-gray-500 mb-1">{artwork.size}</p>
                    <p className="text-amber-900 font-semibold text-xs">{artwork.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="py-12 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in Touch
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-sm">
              Interested in commissioning a custom piece? Let's discuss your vision.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-900 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-900 text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-semibold mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-900 text-sm"
                      placeholder="+61 (0) XX XXXX XXXX"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-900 text-sm"
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
                    className="w-full bg-amber-900 text-white py-2 rounded font-semibold hover:bg-amber-800 transition disabled:opacity-50 text-sm"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                  
                  {formSubmitted && (
                    <p className="mt-4 text-green-600 text-center font-semibold text-sm">
                      ✓ Thank you! Your inquiry has been sent.
                    </p>
                  )}
                </form>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Contact Info
                  </h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Mail className="w-5 h-5 text-amber-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Email</p>
                        <p className="text-gray-600 text-sm">ashanujose@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-amber-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Phone</p>
                        <p className="text-gray-600 text-sm">+61 (0) XX XXXX XXXX</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-amber-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Location</p>
                        <p className="text-gray-600 text-sm">Brisbane, Queensland</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-100 p-6 rounded-lg border-2 border-amber-900">
                  <h4 className="font-bold text-amber-900 mb-3 text-sm">Commission Process</h4>
                  <ol className="text-xs text-gray-700 space-y-1.5 list-decimal list-inside">
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
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              FAQ
            </h2>
            <p className="text-center text-gray-600 mb-10 text-sm">
              Common questions about commissions, pricing, and process
            </p>

            <div className="space-y-3">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-5 py-3 flex items-center justify-between bg-white hover:bg-amber-50 transition text-sm"
                  >
                    <span className="font-semibold text-left">{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-900 flex-shrink-0 transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-5 py-3 bg-amber-50 border-t border-gray-200 text-gray-700 text-sm">
                      {item.answerList ? (
                        <ol className="list-decimal list-inside space-y-1">
                          {item.answerList.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ol>
                      ) : (
                        item.answer
                      )}
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
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-2"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-lg overflow-hidden w-full relative"
            style={{ maxWidth: '85vw', maxHeight: '95vh' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-white rounded-full p-1.5 hover:bg-gray-100 transition z-10 shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:flex-row h-full" style={{ maxHeight: '95vh' }}>
              <div 
                className="flex items-center justify-center bg-gray-100"
                style={{ flex: 1, minHeight: '300px' }}
              >
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  style={{ 
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    padding: '10px'
                  }}
                />
              </div>

              <div className="bg-white p-4 lg:p-5 border-t lg:border-t-0 lg:border-l border-gray-200" style={{ width: '100%', maxWidth: '280px', overflowY: 'auto' }}>
                <h3 className="text-xl font-bold mb-1">{selectedImage.title}</h3>
                <p className="text-sm text-gray-600 mb-0.5">{selectedImage.category}</p>
                <p className="text-xs text-gray-500 mb-2">Size: {selectedImage.size}</p>
                <p className="text-amber-900 font-semibold text-base mb-3">Price: {selectedImage.price}</p>
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setActiveSection('contact');
                  }}
                  className="w-full bg-amber-900 text-white py-2 rounded text-sm font-semibold hover:bg-amber-800 transition"
                >
                  Commission Similar Work
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-1 text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            AshaArtSHED
          </p>
          <p className="text-gray-400 text-xs">
            © 2024 All rights reserved. Custom commissions available worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArtistPortfolio;
