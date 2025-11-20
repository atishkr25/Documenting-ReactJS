import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const properties = {
    1: {
      id: 1,
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      price: '$2,500,000',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop'
      ],
      beds: 5,
      baths: 4,
      sqft: '4,500',
      year: 2020,
      type: 'House',
      description: 'This stunning modern luxury villa offers the perfect blend of contemporary design and timeless elegance. Located in the prestigious Beverly Hills neighborhood, this property features spacious living areas, high-end finishes, and breathtaking views.',
      features: [
        'Swimming Pool',
        'Home Theater',
        'Wine Cellar',
        'Smart Home System',
        'Private Garden',
        '3-Car Garage',
        'Gourmet Kitchen',
        'Master Suite with Balcony'
      ]
    },
    2: {
      id: 2,
      title: 'Coastal Beach House',
      location: 'Malibu, CA',
      price: '$3,200,000',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop'
      ],
      beds: 4,
      baths: 3,
      sqft: '3,800',
      year: 2018,
      type: 'House',
      description: 'Experience coastal living at its finest in this beautiful beach house. With direct ocean access and panoramic views, this property is perfect for those seeking a serene waterfront lifestyle.',
      features: [
        'Ocean View',
        'Private Beach Access',
        'Deck & Patio',
        'Outdoor Kitchen',
        'Guest House',
        'Boat Dock',
        'Fireplace',
        'Hardwood Floors'
      ]
    },
    3: {
      id: 3,
      title: 'Downtown Penthouse',
      location: 'New York, NY',
      price: '$4,800,000',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop'
      ],
      beds: 3,
      baths: 3,
      sqft: '3,200',
      year: 2022,
      type: 'Apartment',
      description: 'Sophisticated penthouse in the heart of Manhattan. This luxury residence offers unparalleled city views, premium amenities, and a prime location near Central Park.',
      features: [
        'City Views',
        'Rooftop Terrace',
        'Concierge Service',
        'Fitness Center',
        'Wine Storage',
        'High-End Appliances',
        'Marble Bathrooms',
        'Floor-to-Ceiling Windows'
      ]
    },
    4: {
      id: 4,
      title: 'Mountain Retreat',
      location: 'Aspen, CO',
      price: '$1,800,000',
      images: [
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop'
      ],
      beds: 6,
      baths: 5,
      sqft: '5,200',
      year: 2019,
      type: 'House',
      description: 'Escape to this magnificent mountain retreat nestled in the heart of Aspen. Surrounded by natural beauty, this property offers a perfect blend of rustic charm and modern luxury.',
      features: [
        'Mountain Views',
        'Ski-In/Ski-Out Access',
        'Hot Tub',
        'Fireplace',
        'Game Room',
        'Wine Cellar',
        'Large Deck',
        'Garage for 4+ Cars'
      ]
    },
    5: {
      id: 5,
      title: 'Urban Loft',
      location: 'San Francisco, CA',
      price: '$1,200,000',
      images: [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop'
      ],
      beds: 2,
      baths: 2,
      sqft: '2,100',
      year: 2021,
      type: 'Apartment',
      description: 'Stylish urban loft in the vibrant heart of San Francisco. This converted warehouse space features high ceilings, exposed brick, and modern amenities perfect for city living.',
      features: [
        'Exposed Brick',
        'High Ceilings',
        'Modern Kitchen',
        'City Views',
        'Hardwood Floors',
        'In-Unit Laundry',
        'Pet Friendly',
        'Near Public Transit'
      ]
    },
    6: {
      id: 6,
      title: 'Lakeside Estate',
      location: 'Lake Tahoe, CA',
      price: '$3,500,000',
      images: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop'
      ],
      beds: 7,
      baths: 6,
      sqft: '6,800',
      year: 2017,
      type: 'House',
      description: 'Magnificent lakeside estate with private dock and stunning water views. This expansive property is perfect for entertaining and offers year-round recreational opportunities.',
      features: [
        'Private Dock',
        'Lake Access',
        'Boat House',
        'Outdoor Fireplace',
        'Guest Quarters',
        'Home Theater',
        'Wine Cellar',
        'Expansive Deck'
      ]
    },
    7: {
      id: 7,
      title: 'City Apartment',
      location: 'Chicago, IL',
      price: '$850,000',
      images: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop'
      ],
      beds: 2,
      baths: 2,
      sqft: '1,800',
      year: 2023,
      type: 'Apartment',
      description: 'Modern city apartment in the heart of Chicago. This beautifully designed space offers convenience, style, and access to all the city has to offer.',
      features: [
        'Downtown Location',
        'Modern Appliances',
        'Balcony',
        'Fitness Center',
        'Concierge',
        'Parking Available',
        'Pet Friendly',
        'Near Shopping & Dining'
      ]
    },
    8: {
      id: 8,
      title: 'Desert Oasis',
      location: 'Scottsdale, AZ',
      price: '$2,100,000',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop'
      ],
      beds: 4,
      baths: 4,
      sqft: '4,200',
      year: 2020,
      type: 'House',
      description: 'Stunning desert oasis with resort-style amenities. This property features a beautiful pool, outdoor living spaces, and breathtaking mountain views.',
      features: [
        'Resort-Style Pool',
        'Outdoor Kitchen',
        'Mountain Views',
        'Desert Landscaping',
        '3-Car Garage',
        'Guest Casita',
        'Fire Pit',
        'Golf Course Access'
      ]
    },
    9: {
      id: 9,
      title: 'Historic Brownstone',
      location: 'Boston, MA',
      price: '$1,950,000',
      images: [
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop'
      ],
      beds: 4,
      baths: 3,
      sqft: '3,600',
      year: 1895,
      type: 'House',
      description: 'Beautifully restored historic brownstone in one of Boston\'s most desirable neighborhoods. This property combines original architectural details with modern updates.',
      features: [
        'Historic Character',
        'Original Hardwood',
        'Updated Kitchen',
        'Private Garden',
        'Parking',
        'Near Public Transit',
        'Walk to Restaurants',
        'High Ceilings'
      ]
    }
  };

  useEffect(() => {
    const prop = properties[id];
    if (prop) {
      setProperty(prop);
    }
  }, [id]);

  if (!property) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-500 mb-4">Property not found</p>
          <button
            onClick={() => navigate('/properties')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Properties
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/properties')}
          className="mb-6 text-blue-600 hover:text-blue-700 flex items-center transition-colors animate-slide-in"
        >
          <span className="mr-2">←</span> Back to Properties
        </button>

        {/* Property Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <p className="text-xl text-gray-600 mb-4 flex items-center">
            <span className="mr-2">📍</span>
            {property.location}
          </p>
          <div className="text-3xl font-bold text-blue-600 mb-6">{property.price}</div>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <span className="flex items-center">
              <span className="mr-2">🛏️</span>
              {property.beds} Bedrooms
            </span>
            <span className="flex items-center">
              <span className="mr-2">🚿</span>
              {property.baths} Bathrooms
            </span>
            <span className="flex items-center">
              <span className="mr-2">📐</span>
              {property.sqft} sqft
            </span>
            <span className="flex items-center">
              <span className="mr-2">🏗️</span>
              Built {property.year}
            </span>
            <span className="flex items-center">
              <span className="mr-2">🏠</span>
              {property.type}
            </span>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 animate-slide-up">
          <div className="relative h-96 md:h-[600px]">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {property.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-2 p-4">
            {property.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative h-24 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                  index === currentImageIndex ? 'border-blue-600' : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img src={img} alt={`${property.title} ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-2xl mr-3">✓</span>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24 animate-slide-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Interested?</h2>
              <p className="text-gray-600 mb-6">Contact us to schedule a viewing or get more information about this property.</p>
              <button className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 mb-4">
                Schedule Viewing
              </button>
              <button className="w-full px-6 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200">
                Contact Agent
              </button>
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold text-gray-900 mb-4">Property Details</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Property Type:</span>
                    <span className="font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year Built:</span>
                    <span className="font-medium">{property.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Square Feet:</span>
                    <span className="font-medium">{property.sqft}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;

