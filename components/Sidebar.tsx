'use client';

import { useState, useEffect } from 'react';
import { categories, brands } from '@/data/products';

interface SidebarProps {
  selectedCategory: string;
  priceRange: [number, number];
  selectedBrands: string[];
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onBrandChange: (brands: string[]) => void;
}

export default function Sidebar({
  selectedCategory,
  priceRange,
  selectedBrands,
  onCategoryChange,
  onPriceRangeChange,
  onBrandChange
}: SidebarProps) {
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);

  useEffect(() => {
    setLocalPriceRange(priceRange);
  }, [priceRange]);

  const handlePriceChange = (value: number, index: number) => {
    const newRange: [number, number] = [...localPriceRange];
    newRange[index] = value;
    setLocalPriceRange(newRange);
    onPriceRangeChange(newRange);
  };

  const handleBrandToggle = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    onBrandChange(newBrands);
  };

  return (
    <div className="bg-blue-700 text-white p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-6">Filters</h2>
      
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 border-blue-300 mr-3 flex items-center justify-center ${
                selectedCategory === category ? 'bg-white' : 'bg-transparent'
              }`}>
                {selectedCategory === category && (
                  <div className="w-2 h-2 rounded-full bg-blue-700"></div>
                )}
              </div>
              <span className="group-hover:text-blue-200 transition-colors">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Price</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm">$</span>
            <input
              type="range"
              min="0"
              max="1000"
              value={localPriceRange[0]}
              onChange={(e) => handlePriceChange(Number(e.target.value), 0)}
              className="flex-1 h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer slider"
            />
            <span className="text-sm w-8">{localPriceRange[0]}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">$</span>
            <input
              type="range"
              min="0"
              max="1000"
              value={localPriceRange[1]}
              onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
              className="flex-1 h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer slider"
            />
            <span className="text-sm w-8">{localPriceRange[1]}</span>
          </div>
          <div className="text-sm text-blue-200">
            ${localPriceRange[0]} - ${localPriceRange[1]}
          </div>
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Brand</h3>
        <div className="space-y-3">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
                className="sr-only"
              />
              <div className={`w-4 h-4 border-2 border-blue-300 mr-3 flex items-center justify-center ${
                selectedBrands.includes(brand) ? 'bg-white' : 'bg-transparent'
              }`}>
                {selectedBrands.includes(brand) && (
                  <div className="w-2 h-2 bg-blue-700"></div>
                )}
              </div>
              <span className="group-hover:text-blue-200 transition-colors">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}