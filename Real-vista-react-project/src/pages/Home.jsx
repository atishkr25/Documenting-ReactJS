import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      price: '$2,500,000',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      beds: 5,
      baths: 4,
      sqft: '4,500'
    },
    {
      id: 2,
      title: 'Coastal Beach House',
      location: 'Malibu, CA',
      price: '$3,200,000',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      beds: 4,
      baths: 3,
      sqft: '3,800'
    },
    {
      id: 3,
      title: 'Downtown Penthouse',
      location: 'New York, NY',
      price: '$4,800,000',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      beds: 3,
      baths: 3,
      sqft: '3,200'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
            alt="Luxury Home"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Find Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Discover luxury properties in the most desirable locations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Browse Properties
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Your trusted partner in real estate</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏠',
                title: 'Expert Agents',
                description: 'Our experienced team will guide you through every step of your real estate journey.'
              },
              {
                icon: '📍',
                title: 'Prime Locations',
                description: 'Access to the most sought-after properties in premium neighborhoods.'
              },
              {
                icon: '💰',
                title: 'Best Prices',
                description: 'Competitive pricing and transparent transactions with no hidden fees.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600">Handpicked selections just for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <Link
                key={property.id}
                to={`/property/${property.id}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                    {property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <span className="mr-2">📍</span>
                    {property.location}
                  </p>
                  <div className="flex justify-between text-gray-500">
                    <span>🛏️ {property.beds} Beds</span>
                    <span>🚿 {property.baths} Baths</span>
                    <span>📐 {property.sqft} sqft</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who found their perfect property with us.</p>
          <Link
            to="/signup"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

