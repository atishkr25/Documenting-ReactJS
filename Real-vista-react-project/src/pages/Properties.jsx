import { useState } from 'react';
import { Link } from 'react-router-dom';

const Properties = () => {
  const [filter, setFilter] = useState('all');

  const properties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      price: '$2,500,000',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      beds: 5,
      baths: 4,
      sqft: '4,500',
      type: 'house'
    },
    {
      id: 2,
      title: 'Coastal Beach House',
      location: 'Malibu, CA',
      price: '$3,200,000',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      beds: 4,
      baths: 3,
      sqft: '3,800',
      type: 'house'
    },
    {
      id: 3,
      title: 'Downtown Penthouse',
      location: 'New York, NY',
      price: '$4,800,000',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      beds: 3,
      baths: 3,
      sqft: '3,200',
      type: 'apartment'
    },
    {
      id: 4,
      title: 'Mountain Retreat',
      location: 'Aspen, CO',
      price: '$1,800,000',
      image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800&h=600&fit=crop',
      beds: 6,
      baths: 5,
      sqft: '5,200',
      type: 'house'
    },
    {
      id: 5,
      title: 'Urban Loft',
      location: 'San Francisco, CA',
      price: '$1,200,000',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
      beds: 2,
      baths: 2,
      sqft: '2,100',
      type: 'apartment'
    },
    {
      id: 6,
      title: 'Lakeside Estate',
      location: 'Lake Tahoe, CA',
      price: '$3,500,000',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      beds: 7,
      baths: 6,
      sqft: '6,800',
      type: 'house'
    },
    {
      id: 7,
      title: 'City Apartment',
      location: 'Chicago, IL',
      price: '$850,000',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      beds: 2,
      baths: 2,
      sqft: '1,800',
      type: 'apartment'
    },
    {
      id: 8,
      title: 'Desert Oasis',
      location: 'Scottsdale, AZ',
      price: '$2,100,000',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      beds: 4,
      baths: 4,
      sqft: '4,200',
      type: 'house'
    },
    {
      id: 9,
      title: 'Historic Brownstone',
      location: 'Boston, MA',
      price: '$1,950,000',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
      beds: 4,
      baths: 3,
      sqft: '3,600',
      type: 'house'
    }
  ];

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.type === filter);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Properties</h1>
          <p className="text-xl text-gray-600">Discover your perfect home from our curated collection</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            All Properties
          </button>
          <button
            onClick={() => setFilter('house')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
              filter === 'house'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            Houses
          </button>
          <button
            onClick={() => setFilter('apartment')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
              filter === 'apartment'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            Apartments
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <Link
              key={property.id}
              to={`/property/${property.id}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                  {property.price}
                </div>
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-lg text-sm font-semibold text-gray-700 capitalize">
                  {property.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <span className="mr-2">📍</span>
                  {property.location}
                </p>
                <div className="flex justify-between text-gray-500 pt-4 border-t">
                  <span className="flex items-center">
                    <span className="mr-1">🛏️</span>
                    {property.beds} Beds
                  </span>
                  <span className="flex items-center">
                    <span className="mr-1">🚿</span>
                    {property.baths} Baths
                  </span>
                  <span className="flex items-center">
                    <span className="mr-1">📐</span>
                    {property.sqft} sqft
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">No properties found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;

