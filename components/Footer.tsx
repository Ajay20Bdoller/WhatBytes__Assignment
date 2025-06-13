import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Filters Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="/" className="hover:text-white transition-colors">All</a></li>
              <li><a href="/?category=Electronics" className="hover:text-white transition-colors">Electronics</a></li>
              <li><a href="/?category=Clothing" className="hover:text-white transition-colors">Clothing</a></li>
              <li><a href="/?category=Home" className="hover:text-white transition-colors">Home</a></li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="text-blue-200 text-sm">
              <p>Stay connected with us for the latest updates and offers!</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 American E-Commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}