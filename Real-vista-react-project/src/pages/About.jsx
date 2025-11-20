import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Real Estate Agent',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      description: '15+ years of experience in luxury real estate'
    },
    {
      name: 'Michael Chen',
      role: 'Property Consultant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      description: 'Expert in commercial and residential properties'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Investment Advisor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      description: 'Specializes in real estate investment strategies'
    },
    {
      name: 'David Thompson',
      role: 'Market Analyst',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      description: 'Deep knowledge of market trends and valuations'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Properties Sold' },
    { number: '5,000+', label: 'Happy Clients' },
    { number: '25+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Agents' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=800&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About EstatePro</h1>
          <p className="text-xl md:text-2xl">Your trusted partner in real estate</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Our Story"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded in 1999, EstatePro has been at the forefront of the real estate industry for over two decades.
                We started with a simple mission: to help people find their perfect home and make the process as smooth
                as possible.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Today, we're proud to be one of the leading real estate agencies, with thousands of successful
                transactions and satisfied clients. Our team of expert agents brings years of experience and deep
                market knowledge to every transaction.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that buying or selling a property should be an exciting journey, not a stressful one. That's
                why we're committed to providing exceptional service, transparent communication, and personalized
                attention to every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'We conduct business with honesty, transparency, and ethical practices in everything we do.'
              },
              {
                icon: '🎯',
                title: 'Excellence',
                description: 'We strive for excellence in every transaction, ensuring the best outcomes for our clients.'
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'We embrace new technologies and methods to provide the best possible service experience.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">Get in touch with our team and let's start your real estate journey together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Browse Properties
            </Link>
            <a
              href="mailto:contact@estatepro.com"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

