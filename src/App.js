import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
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
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    emailjs.init('Pmhf_2RyBSjCYmGHY');
  }, []);

  const featuredWorks = [
    { id: 1,  title: 'Mother & Child',     image: '/images/image (1).png' },
    { id: 22, title: 'Couple in Embrace',  image: '/images/gallery-new-9.jpg' },
    { id: 16, title: 'Two Dogs — Max & Friend', image: '/images/gallery-new-3.jpg' },
    { id: 26, title: 'Green Parrot',       image: '/images/gallery-new-13.jpg' },
  ];

  const featuredReviews = [
    {
      name: 'Priya R.',
      location: 'Brisbane, QLD',
      subject: 'Wedding portrait — oil painting',
      short: "It doesn't feel like just a painting on a wall. It feels like a living memory.",
      full: "There's something really special about the way Asha approaches every project — not just as artwork, but as someone who truly understands the emotion behind it. She put so much care into a wedding portrait of my brother and sister-in-law, and it honestly felt like she treated those memories with the same love and respect we feel for them. That piece now hangs in their living room, and every time we visit, it naturally draws us in. We always end up smiling, remembering the day, and appreciating how beautifully it's been captured. Working with Asha feels personal in the best way, and the end result reflects that heart in every detail.",
      long: true
    },
    {
      name: 'Michael T.',
      location: 'Sydney, NSW',
      subject: 'Three oil painting commissions over the years',
      short: "If you're even considering commissioning her — don't overthink it. Just do it.",
      full: "Over the years I've ordered three commissioned oil paintings from Asha for friends and family, and every single time the experience has been effortless. Once I hand over the idea, I never have to worry about a thing. She keeps me updated with progress shots throughout, so you always feel involved and reassured along the way. She's incredibly approachable and genuinely kind, and her work speaks for itself. I've always been amazed by the depth, softness, and detail she brings to every piece — it feels almost impossible how she achieves that balance. At this point, if I ever think of a meaningful moment I want captured, I already know exactly who to go to.",
      long: true
    },
    {
      name: 'Sandra K.',
      location: 'Melbourne, VIC',
      subject: 'Portrait commission',
      short: "Professional, talented, and passionate. Worth every penny!",
      full: "Professional, talented, and passionate. Worth every penny!",
      long: false
    }
  ];

  const moreReviews = [
    {
      name: 'The Henderson Family',
      location: 'Auckland, New Zealand',
      subject: 'Pet memorial portrait — shipped internationally',
      short: "You can really tell it wasn't just about the artwork, but about the full experience.",
      full: "We ordered a portrait of our dog, who has crossed the rainbow bridge, all the way from New Zealand — and Asha did such a beautiful job capturing him so perfectly. From start to finish, the whole process felt seamless, and the shipping was handled with real care and professionalism. It arrived incredibly well packaged, and even the presentation showed how much thought she puts into every detail. We're so happy with the final piece and would highly recommend her to anyone looking for something truly special.",
      long: true
    },
    { name: 'Sandra K.', location: 'Melbourne, VIC', text: 'Professional, talented, and passionate. Worth every penny!' },
    { name: 'David L.', location: 'Perth, WA', text: 'Amazed at how lifelike and expressive the portrait is. A true artist.' },
    { name: 'The Nguyen Family', location: 'Brisbane, QLD', text: 'Asha captured the essence of our family beautifully. Highly recommended!' }
  ];







  const artworks = [
    { id: 1,  title: 'Mother & Child',            medium: 'Watercolour',        image: '/images/image (1).png' },
    { id: 2,  title: 'Lady with Earrings',         medium: 'Graphite Sketch',   image: '/images/image (3).png' },
    { id: 3,  title: 'Gentleman Portrait',         medium: 'Graphite Sketch',   image: '/images/image (5).png' },
    { id: 4,  title: 'Child Portrait',             medium: 'Graphite Sketch',   image: '/images/image (6).png' },
    { id: 5,  title: 'Smiling Woman',              medium: 'Graphite Sketch',   image: '/images/image (7).png' },
    { id: 6,  title: 'Serene Portrait',            medium: 'Coloured Pencil',   image: '/images/image (8).png' },
    { id: 7,  title: 'Boy in Red Jacket',          medium: 'Coloured Pencil',   image: '/images/image (9).png' },
    { id: 8,  title: 'Dachshund Portrait',         medium: 'Graphite Sketch',   image: '/images/image (10).png' },
    { id: 9,  title: 'Wedding Moment',             medium: 'Coloured Pencil',   image: '/images/image (11).png' },
    { id: 10, title: 'Two Men Portrait',           medium: 'Graphite Sketch',   image: '/images/image (13).png' },
    { id: 11, title: 'Dog Portrait',               medium: 'Graphite Sketch',   image: '/images/image (14).png' },
    { id: 12, title: 'Dog Looking Up',             medium: 'Graphite Sketch',   image: '/images/image (15).png' },
    { id: 13, title: 'Couple Portrait',            medium: 'Graphite Sketch',   image: '/images/image (16).png' },
    { id: 14, title: 'Dog Portrait',               medium: 'Coloured Pencil',   image: '/images/gallery-new-1.jpg' },
    { id: 15, title: 'Group Portrait',             medium: 'Graphite Sketch',    image: '/images/gallery-new-2.jpg' },
    { id: 16, title: 'Couple with Their Fur Baby', medium: 'Coloured Pencil',   image: '/images/gallery-new-3.jpg' },
    { id: 17, title: 'Max & Binny',                medium: 'Coloured Pencil',   image: '/images/gallery-new-4.jpg' },
    { id: 18, title: 'Laughing Boy',               medium: 'Coloured Pencil',   image: '/images/gallery-new-5.jpg' },
    { id: 19, title: 'Smiling Lady',               medium: 'Coloured Pencil',   image: '/images/gallery-new-6.jpg' },
    { id: 20, title: 'Father with Two Children',   medium: 'Coloured Pencil',   image: '/images/gallery-new-7.jpg' },
    { id: 21, title: 'Pug on Sofa',                medium: 'Oil Painting',      image: '/images/gallery-new-8.jpg' },
    { id: 22, title: 'Wedding Couple',             medium: 'Oil Painting',      image: '/images/gallery-new-9.jpg' },
    { id: 23, title: 'Indian Wedding Portrait',    medium: 'Oil Painting',      image: '/images/gallery-new-10.jpg' },
    { id: 24, title: 'Dog in Cap',                 medium: 'Oil Painting',      image: '/images/gallery-new-11.jpg' },
    { id: 25, title: 'Girl Portrait',              medium: 'Oil Painting',      image: '/images/gallery-new-12.jpg' },
    { id: 26, title: 'Parrot Portrait',            medium: 'Oil Painting',      image: '/images/gallery-new-13.jpg' },
    { id: 27, title: 'Aashka with Her Portrait',   medium: 'Oil Painting',      image: '/images/gallery-new-14.jpg' },
  ];

  const faqTop = [
    {
      question: 'What is your commission process?',
      answerList: [
        "Get in touch to share your portrait idea and any reference photos.",
        "I'll send you a personalised quote and estimated timeline.",
        "A 50% deposit secures your spot and work begins.",
        "I keep you updated with progress along the way.",
        "Once complete, the remaining balance is due before I deliver or ship your artwork."
      ]
    },
    {
      question: 'How long does a custom portrait take?',
      answer: "Graphite and coloured pencil portraits are typically completed within 1–2 weeks. Watercolour and oil paintings usually take 4–8 weeks depending on size and detail. If you have a gift deadline or special occasion in mind, just let me know when you enquire and I'll do my best to accommodate you."
    },
    {
      question: 'How much does a custom portrait cost?',
      answer: "Pricing is based on the medium, size, number of subjects, and level of detail involved. Every commission is unique, so I provide a personalised quote after we chat about what you have in mind. There's no obligation — feel free to reach out and ask!"
    }
  ];

  const faqData = [
    {
      question: 'Can you create a portrait of a specific person, pet, or subject?',
      answer: "Absolutely. I create custom portraits of people, pets, families, and meaningful places. Whether it's a beloved pet, a family milestone, or a cherished memory, every piece is thoughtfully tailored to your vision."
    },
    {
      question: 'Do you work from photos or in person?',
      answer: "I work primarily from high-quality photographs, which means I can create portraits for clients anywhere in the world. For clients in Brisbane, local consultations or photography sessions may also be available by arrangement."
    },
    {
      question: 'Can I commission a portrait as a gift?',
      answer: "Yes! A hand-crafted portrait makes a truly memorable gift for birthdays, anniversaries, weddings, new babies, or to honour a loved one. Just let me know your occasion and deadline when you get in touch."
    },
    {
      question: 'Do you have a waiting list?',
      answer: "I take on a limited number of commissions at a time so that every artwork gets my full attention. Availability does fill up, especially around gift-giving seasons, so I recommend reaching out early to secure your spot."
    },
    {
      question: 'What sizes are available?',
      answer: "I offer a range of standard sizes for both graphite portraits and paintings, with custom sizes available on request. I'm happy to help you choose the best size for your space and budget."
    },
    {
      question: 'What payment methods do you accept?',
      answer: "I accept payment via bank transfer or PayPal. A 50% deposit is required to begin your commission, with the balance due upon completion."
    },
    {
      question: 'What is your refund policy?',
      answer: "The 50% deposit is non-refundable once work has commenced, as it covers the time and materials invested in your piece. If you have any concerns about the finished artwork, I'm always happy to discuss revisions to make sure you're delighted with the result."
    },
    {
      question: 'Do you ship internationally?',
      answer: "Yes, I ship artwork worldwide. Every piece is carefully packaged, fully insured, and sent with tracking so it arrives safely to your door."
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
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between" style={{ minHeight: '80px' }}>
          <button onClick={() => setActiveSection('home')} className="focus:outline-none flex-shrink-0">
            <img 
              src="/logo-asha.png" 
              alt="Asha Ann Jose — Portrait Artist" 
              className="object-contain cursor-pointer"
              style={{ height: '64px', maxWidth: '280px' }}
            />
          </button>
          <div className="flex gap-8 text-base font-medium">
            {['home', 'about', 'gallery', 'contact', 'faq'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize transition-colors tracking-wide ${
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
        <div>

          {/* ── HERO ── */}
          <section style={{ background: 'linear-gradient(135deg, #fdf6ec 0%, #fff8f0 50%, #fdf0e0 100%)' }} className="relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center relative z-10">
              {/* Eyebrow */}
              <p className="text-amber-800 font-semibold tracking-widest text-xs uppercase mb-5 flex items-center justify-center gap-3">
                <span className="block w-8 h-px bg-amber-800"></span>
                Brisbane · Australia · Worldwide Shipping
                <span className="block w-8 h-px bg-amber-800"></span>
              </p>
              {/* Headline */}
              <h1 style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
                  className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Some moments deserve<br/>
                <em className="text-amber-900">to last forever.</em>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
                I'm Asha — a portrait artist with 17 years of experience turning photographs into hand-crafted artworks in graphite, watercolour, and oil paint. Every commission is made with care, patience, and genuine love for the craft.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button
                  onClick={() => setActiveSection('contact')}
                  className="bg-amber-900 text-white px-9 py-3.5 rounded-full hover:bg-amber-800 transition font-semibold text-base shadow-lg hover:shadow-xl"
                >
                  Commission a Portrait
                </button>
                <button
                  onClick={() => setActiveSection('gallery')}
                  className="border-2 border-amber-900 text-amber-900 px-9 py-3.5 rounded-full hover:bg-amber-50 transition font-semibold text-base"
                >
                  View My Work
                </button>
              </div>
              {/* Stats row */}
              <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                {[
                  { n: '17+', label: 'Years of practice' },
                  { n: '4', label: 'Mediums' },
                  { n: '100%', label: 'Custom & handmade' },
                  { n: '🌏', label: 'Ships worldwide' }
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-amber-900 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{s.n}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* decorative corner flourishes */}
            <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-amber-300 opacity-40 rounded-tl-lg"></div>
            <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-amber-300 opacity-40 rounded-br-lg"></div>
          </section>

          {/* ── FEATURED WORKS ── */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <p className="text-amber-900 text-xs font-semibold tracking-widest uppercase mb-3">Portfolio</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Recent commissions
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto text-base">
                  Each piece is unique — made from a photograph you provide, finished by hand, and built to be treasured.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {featuredWorks.map((work, i) => (
                  <div
                    key={work.id}
                    onClick={() => setSelectedImage(artworks.find(a => a.id === work.id))}
                    className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden bg-gray-100" style={{ paddingBottom: '120%' }}>
                      <img
                        src={work.image}
                        alt={work.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-sm font-semibold">View</span>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <h3 className="font-semibold text-sm text-gray-800">{work.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() => setActiveSection('gallery')}
                  className="border-2 border-amber-900 text-amber-900 px-8 py-3 rounded-full hover:bg-amber-50 transition font-semibold text-sm"
                >
                  See full gallery →
                </button>
              </div>
            </div>
          </section>

          {/* ── WHY CHOOSE ME ── */}
          <section style={{ background: 'linear-gradient(180deg, #fdf6ec 0%, #fff8f2 100%)' }} className="py-16 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-amber-900 text-xs font-semibold tracking-widest uppercase mb-3">The difference</p>
                <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Why choose me
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: '✦',
                    title: 'Soul over likeness',
                    body: 'Anyone can copy a photo. I look for the personality, warmth, and story behind every face — and make sure it shows in the finished piece.'
                  },
                  {
                    icon: '✦',
                    title: "You're involved throughout",
                    body: "I send progress updates as I work, so you're never left wondering. If something doesn't feel right, we fix it before it's finished."
                  },
                  {
                    icon: '✦',
                    title: 'Built to last generations',
                    body: "17+ years of practice across four mediums means I know which materials and techniques create artwork that won't fade — physically or emotionally."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center mb-5">
                      <span className="text-white text-lg">{item.icon}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── MEDIUMS STRIP ── */}
          <section className="bg-amber-900 text-white py-10 px-4">
            <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-12 text-center">
              {[
                { medium: 'Graphite', note: 'Timeless detail' },
                { medium: 'Coloured Pencil', note: 'Vibrant realism' },
                { medium: 'Watercolour', note: 'Soft & luminous' },
                { medium: 'Oil Paint', note: 'Rich & enduring' }
              ].map(m => (
                <div key={m.medium}>
                  <p className="font-bold text-base mb-0.5">{m.medium}</p>
                  <p className="text-amber-300 text-xs">{m.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CLIENT STORIES ── */}
          <section className="py-16 bg-white px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-amber-900 text-xs font-semibold tracking-widest uppercase mb-3">Testimonials</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  What clients say
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto">Real words from real people who trusted me with their most meaningful moments.</p>
              </div>

              {/* 2 long + 1 short */}
              <div className="space-y-5 mb-8">
                {featuredReviews.map((review, index) => (
                  review.long ? (
                    <div key={index} className="rounded-2xl border border-amber-100 bg-amber-50 p-7 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <span className="text-6xl text-amber-200 font-serif leading-none flex-shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>"</span>
                        <div className="flex-1">
                          <p className="text-gray-900 text-base font-medium italic leading-relaxed mb-3">{review.short}</p>
                          <p className="text-gray-600 text-sm leading-relaxed">{review.full.replace(review.short, '').trim()}</p>
                          <div className="mt-5 pt-4 border-t border-amber-200 flex flex-wrap items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-amber-900 flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">{review.name[0]}</span>
                            </div>
                            <div>
                              <p className="font-semibold text-amber-900 text-sm">{review.name}</p>
                              <p className="text-xs text-gray-400">{review.location} · {review.subject}</p>
                            </div>
                            <div className="ml-auto flex gap-0.5">
                              {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400">★</span>)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div key={index} className="rounded-2xl border border-amber-100 bg-white p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-4xl text-amber-200 font-serif leading-none flex-shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>"</span>
                      <div className="flex-1">
                        <p className="text-gray-800 text-base italic leading-relaxed mb-4">{review.short}</p>
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-amber-900 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">{review.name[0]}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-amber-900 text-sm">{review.name}</p>
                            <p className="text-xs text-gray-400">{review.location} · {review.subject}</p>
                          </div>
                          <div className="ml-auto flex gap-0.5">
                            {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-sm">★</span>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => setShowAllReviews(true)}
                  className="border-2 border-amber-900 text-amber-900 px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-50 transition"
                >
                  See more reviews
                </button>
              </div>
            </div>
          </section>

          {/* More reviews modal */}
          {showAllReviews && (
            <div
              className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
              onClick={() => setShowAllReviews(false)}
            >
              <div
                className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl max-h-screen overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>More kind words</h3>
                  <button onClick={() => setShowAllReviews(false)} className="text-gray-400 hover:text-gray-600 text-3xl leading-none">×</button>
                </div>
                <div className="space-y-5">
                  {moreReviews.map((r, i) => (
                    <div key={i} className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                      {r.long ? (
                        <>
                          <p className="text-gray-800 text-sm italic font-medium leading-relaxed mb-2">"{r.short}"</p>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">{r.full.replace(r.short, '').trim()}</p>
                        </>
                      ) : (
                        <p className="text-gray-700 text-sm italic leading-relaxed mb-3">"{r.text}"</p>
                      )}
                      <div className="flex items-center gap-2 pt-3 border-t border-amber-200">
                        <div className="w-7 h-7 rounded-full bg-amber-900 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{r.name[0]}</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-amber-900">{r.name}</p>
                          <p className="text-xs text-gray-400">{r.location}{r.subject ? ' · ' + r.subject : ''}</p>
                        </div>
                        <div className="ml-auto flex gap-0.5">
                          {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-xs">★</span>)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => { setShowAllReviews(false); setActiveSection('contact'); }}
                  className="mt-7 w-full bg-amber-900 text-white py-3 rounded-full font-semibold hover:bg-amber-800 transition text-sm"
                >
                  Commission your portrait
                </button>
              </div>
            </div>
          )}

          {/* ── HOW IT WORKS ── */}
          <section style={{ background: 'linear-gradient(180deg, #fdf6ec 0%, #fff8f2 100%)' }} className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-amber-900 text-xs font-semibold tracking-widest uppercase mb-3">The process</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  How it works
                </h2>
                <p className="text-gray-500 text-base max-w-lg mx-auto">Simple, personal, and completely guided by you.</p>
              </div>
              <div className="relative">
                {/* connector line — desktop only */}
                <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-amber-200 z-0" style={{ margin: '0 60px' }}></div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                  {[
                    { n: '1', title: 'Get in touch', body: 'Share your idea and any reference photos' },
                    { n: '2', title: 'Get a quote', body: 'Personalised pricing and timeline' },
                    { n: '3', title: 'Secure your spot', body: '50% deposit starts the commission' },
                    { n: '4', title: 'Watch it grow', body: 'Progress updates along the way' },
                    { n: '5', title: 'Yours forever', body: 'Balance due on completion, then delivered' }
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-amber-900 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md">
                        {step.n}
                      </div>
                      <h3 className="font-bold text-sm text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{step.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center mt-12">
                <button
                  onClick={() => setActiveSection('contact')}
                  className="bg-amber-900 text-white px-10 py-3.5 rounded-full font-semibold hover:bg-amber-800 transition text-base shadow-md"
                >
                  Start your commission
                </button>
              </div>
            </div>
          </section>

          {/* ── CLOSING CTA BANNER ── */}
          <section className="py-20 px-4 bg-white text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-amber-900 text-xs font-semibold tracking-widest uppercase mb-4">Ready when you are</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}>
                Let's turn your favourite photo<br/>into something extraordinary.
              </h2>
              <p className="text-gray-500 text-base mb-8 leading-relaxed">
                Ships locally, across Australia, and worldwide. No obligation to enquire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setActiveSection('contact')}
                  className="bg-amber-900 text-white px-10 py-3.5 rounded-full font-semibold hover:bg-amber-800 transition text-base shadow-lg"
                >
                  Commission a Portrait
                </button>
                <button
                  onClick={() => setActiveSection('about')}
                  className="border-2 border-amber-900 text-amber-900 px-10 py-3.5 rounded-full font-semibold hover:bg-amber-50 transition text-base"
                >
                  Meet Asha
                </button>
              </div>
            </div>
          </section>

        </div>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="bg-white">

          {/* Hero — full-width warm intro */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
              {/* Headshot */}
              <div className="flex-shrink-0">
                <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-amber-900 shadow-2xl">
                  <img
                    src="/images/about-headshot.jpg.jpg"
                    alt="Asha Jose — Portrait Artist"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '60% 15%' }}
                  />
                </div>
              </div>
              {/* Intro text */}
              <div className="text-center md:text-left">
                <p className="text-sm font-semibold tracking-widest text-amber-900 uppercase mb-2">Brisbane, Queensland</p>
                <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Hi, I'm Asha
                </h1>
                <p className="text-xl text-gray-500 font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Portrait Artist · 17+ Years Experience
                </p>
                <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                  I believe every face tells a story. A smile, a glance, a quiet expression — these are the details that make each person irreplaceable. My work exists to capture those details and keep them forever.
                </p>
              </div>
            </div>
          </div>

          {/* Story section */}
          <div className="max-w-5xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-5 text-amber-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  More than a likeness
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Art has been part of my life for as long as I can remember. Over 17 years of practice, I've learned that the most powerful portraits aren't just technically skilled — they carry feeling. The personality behind the eyes. The warmth in a smile. The quiet pride of someone caught in an honest moment.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  I work in graphite, coloured pencils, watercolour, and oil paint. Oil painting is my favourite — there's a richness and depth to it that no other medium quite matches, and it gives finished pieces a timeless, heirloom quality.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Alongside my art practice, I work in higher education — a role that keeps me curious, connected to people, and constantly inspired by different stories and backgrounds.
                </p>
              </div>
              {/* Artist with large painting */}
              <div className="relative">
                <img
                  src="/images/about-with-painting.jpg.jpeg"
                  alt="Asha Jose with her oil painting"
                  className="w-full rounded-2xl shadow-xl object-cover"
                  style={{ maxHeight: '480px', objectPosition: 'center top' }}
                />
                <div className="absolute -bottom-4 -left-4 bg-amber-900 text-white rounded-xl px-5 py-3 shadow-lg">
                  <p className="text-xs font-semibold tracking-wide uppercase opacity-75">Medium</p>
                  <p className="text-sm font-bold">Oil on Canvas</p>
                </div>
              </div>
            </div>
          </div>

          {/* What I create — mediums */}
          <div className="bg-amber-50 py-14 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                What I create
              </h2>
              <p className="text-center text-gray-500 mb-10">Every commission is a collaboration — your story, my hand.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  { medium: 'Graphite', desc: 'Timeless, precise, deeply detailed' },
                  { medium: 'Coloured Pencil', desc: 'Vibrant tones with fine realism' },
                  { medium: 'Watercolour', desc: 'Soft, luminous, full of feeling' },
                  { medium: 'Oil Paint', desc: 'Rich, layered, built to last generations' }
                ].map((m) => (
                  <div key={m.medium} className="bg-white rounded-xl p-5 shadow-sm border border-amber-100 text-center">
                    <div className="w-10 h-10 bg-amber-900 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-lg">✦</span>
                    </div>
                    <h3 className="font-bold text-amber-900 mb-1 text-sm">{m.medium}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The joy of the reveal — emotional section with photo */}
          <div className="max-w-5xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo of Asha holding portrait — reveals joy */}
              <div className="relative order-2 md:order-1">
                <img
                  src="/images/about-reveal.jpg.jpeg"
                  alt="Asha revealing a completed portrait commission"
                  className="w-full rounded-2xl shadow-xl object-cover"
                  style={{ maxHeight: '480px', objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-5 text-amber-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  The moment it all comes together
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Nothing brings me more joy than seeing a finished portrait become a treasured keepsake. When someone holds up a piece and sees their loved one looking back at them — that moment is why I do this.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  Whether you're celebrating a loved one, honouring a cherished pet, marking a milestone, or searching for a truly meaningful gift — I will pour care, patience, and attention into every stroke. My goal is artwork that feels personal, emotional, and completely one of a kind.
                </p>
                <blockquote className="border-l-4 border-amber-900 pl-5 italic text-gray-600 text-base">
                  "It is a privilege to create artwork that will be displayed, shared, and loved for generations."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Quick stats strip */}
          <div className="bg-amber-900 text-white py-10 px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: '17+', label: 'Years of practice' },
                { stat: '4', label: 'Mediums mastered' },
                { stat: '100%', label: 'Custom commissions' },
                { stat: '🌏', label: 'Ships worldwide' }
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold mb-1">{s.stat}</p>
                  <p className="text-amber-200 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="py-16 px-4 text-center bg-white">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to commission your portrait?
            </h2>
            <p className="text-gray-500 text-base mb-7 max-w-lg mx-auto">
              I'd love to hear your story. Get in touch and we'll bring it to life together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveSection('contact')}
                className="bg-amber-900 text-white px-10 py-3 rounded-full font-semibold hover:bg-amber-800 transition text-base"
              >
                Start Your Commission
              </button>
              <button
                onClick={() => setActiveSection('gallery')}
                className="border-2 border-amber-900 text-amber-900 px-10 py-3 rounded-full font-semibold hover:bg-amber-50 transition text-base"
              >
                View My Work
              </button>
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
                    <h3 className="font-semibold text-sm text-gray-800">{artwork.title}</h3>
                    <p className="text-xs text-amber-900 mt-0.5">{artwork.medium}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="bg-white">

          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg, #fdf6ec 0%, #fff8f0 100%)' }} className="py-14 px-4 text-center">
            <p className="text-amber-900 text-xs font-semibold tracking-widest uppercase mb-3">Get in touch</p>
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's bring your vision to life
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
              Tell me about the portrait you have in mind — who it's for, the occasion, and any ideas you have. I'll come back to you with a personalised quote within 48 hours.
            </p>
          </div>

          {/* Form — full width, generous */}
          <div className="max-w-3xl mx-auto px-4 py-14">
            <div className="bg-white rounded-3xl shadow-xl border border-amber-100 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-8 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                Commission enquiry
              </h3>
              <form onSubmit={handleSubmit}>
                {/* Name + Email side by side on desktop */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your name <span className="text-amber-900">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 text-base transition"
                      placeholder="e.g. Sarah Mitchell"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email address <span className="text-amber-900">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 text-base transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone <span className="text-gray-400 font-normal">(optional)</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 text-base transition"
                    placeholder="+61 4XX XXX XXX"
                  />
                </div>

                {/* Message — tall */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell me about your commission <span className="text-amber-900">*</span></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="7"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 text-base transition resize-none"
                    placeholder="Who or what is the subject? Is it a gift or for yourself? Do you have a size or medium in mind? Any special occasion or deadline? The more detail the better — there are no wrong answers!"
                  ></textarea>
                  <p className="text-xs text-gray-400 mt-2">Not sure what to say? Just describe the moment or person you want captured — I'll guide you through the rest.</p>
                </div>

                {formError && (
                  <p className="mb-5 text-red-600 text-sm font-semibold bg-red-50 px-4 py-3 rounded-lg">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-900 text-white py-4 rounded-full font-semibold hover:bg-amber-800 transition disabled:opacity-50 text-base shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? 'Sending your enquiry...' : 'Send Enquiry'}
                </button>

                {formSubmitted && (
                  <div className="mt-6 bg-green-50 border border-green-200 rounded-xl px-5 py-4 text-center">
                    <p className="text-green-700 font-semibold text-base">✓ Thank you! I'll be in touch within 48 hours.</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Info strip — 3 columns */}
          <div style={{ background: 'linear-gradient(135deg, #fdf6ec 0%, #fff8f0 100%)' }} className="py-12 px-4">
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <p className="font-semibold text-gray-900 mb-1">Email</p>
                <p className="text-gray-500 text-sm">ashanujose@gmail.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <p className="font-semibold text-gray-900 mb-1">Based in</p>
                <p className="text-gray-500 text-sm">Brisbane, Queensland</p>
                <p className="text-gray-400 text-xs mt-1">Ships locally & worldwide</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <p className="font-semibold text-gray-900 mb-1">Response time</p>
                <p className="text-gray-500 text-sm">Within 48 hours</p>
                <p className="text-gray-400 text-xs mt-1">No obligation to enquire</p>
              </div>
            </div>
          </div>

          {/* Process reminder */}
          <div className="max-w-3xl mx-auto px-4 py-12">
            <h3 className="text-center text-xl font-bold mb-8 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>What happens next</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
              {[
                { n: '1', t: 'You enquire', b: 'Send your idea using the form above' },
                { n: '2', t: 'I get back to you', b: 'Personalised quote within 48 hours' },
                { n: '3', t: 'Secure your spot', b: '50% deposit confirms your booking' },
                { n: '4', t: 'I get to work', b: 'Progress updates along the way' },
                { n: '5', t: 'Delivered to you', b: 'Balance due, then shipped with care' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-900 text-white flex items-center justify-center font-bold text-sm mb-3">{s.n}</div>
                  <p className="font-semibold text-sm text-gray-800 mb-1">{s.t}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.b}</p>
                </div>
              ))}
            </div>
          </div>

        </section>
      )}

      {/* FAQ Section */}
      {activeSection === 'faq' && (
        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">

            {/* Header */}
            <h2 className="text-4xl font-bold mb-3 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-500 mb-10 text-base">
              Everything you need to know before placing your commission
            </p>

            {/* Top 3 — always expanded */}
            <div className="space-y-5 mb-12">
              {faqTop.map((item, index) => (
                <div key={index} className="rounded-xl border border-amber-200 bg-amber-50 overflow-hidden">
                  <div className="px-6 py-4 border-b border-amber-200">
                    <h3 className="font-semibold text-base text-amber-900">{item.question}</h3>
                  </div>
                  <div className="px-6 py-4 text-gray-700 text-base leading-relaxed">
                    {item.answerList ? (
                      <ol className="list-none space-y-2">
                        {item.answerList.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    ) : (
                      item.answer
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-sm font-medium whitespace-nowrap">More questions</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Remaining FAQs — collapsible */}
            <div className="space-y-3 mb-14">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-shadow"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-amber-50 transition text-base"
                  >
                    <span className="font-medium text-left text-gray-800">{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-900 flex-shrink-0 transition-transform ml-4 ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-5 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 text-base leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-amber-900 rounded-2xl px-8 py-10 text-center text-white">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to commission your portrait?
              </h3>
              <p className="text-amber-200 text-base mb-6">
                Get in touch and I'll send you a personalised quote within 48 hours. No obligation.
              </p>
              <button
                onClick={() => setActiveSection('contact')}
                className="inline-block bg-white text-amber-900 font-semibold px-8 py-3 rounded-full text-base hover:bg-amber-50 transition"
              >
                Start Your Commission
              </button>
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
              <span className="text-xl leading-none">×</span>
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
                <p className="text-sm text-amber-900 mb-4">{selectedImage.medium}</p>
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
            Asha Art Shed
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
