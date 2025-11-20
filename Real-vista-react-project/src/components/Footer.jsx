import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">EstatePro</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect property. We make real estate simple.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">📷</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Buy Property
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sell Property
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Property Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Investment Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                contact@estatepro.com
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                123 Real Estate Ave, City, State 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EstatePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

