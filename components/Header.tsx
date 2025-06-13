'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const { state } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    } else {
      router.push(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold">Logo</h1>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-blue-300" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="block w-full pl-10 pr-3 py-2 border border-blue-600 rounded-md leading-5 bg-blue-600 text-white placeholder-blue-300 focus:outline-none focus:bg-blue-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
              />
            </form>
          </div>

          {/* Cart and Profile */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md transition-colors duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {state.itemCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              )}
            </Link>
            <button className="p-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}