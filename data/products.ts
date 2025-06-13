import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Running Shoes',
    price: 99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Clothing',
    brand: 'Nike',
    rating: 4.5,
    description: 'Comfortable running shoes perfect for daily exercise and long-distance running.',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '2',
    name: 'Wireless Headphones',
    price: 149,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    brand: 'Sony',
    rating: 4.7,
    description: 'Premium wireless headphones with noise cancellation and superior sound quality.',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '3',
    name: 'Backpack',
    price: 129,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Clothing',
    brand: 'North Face',
    rating: 4.3,
    description: 'Durable and spacious backpack perfect for travel, hiking, and daily use.',
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545558/pexels-photo-1545558.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '4',
    name: 'Smartwatch',
    price: 249,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    brand: 'Apple',
    rating: 4.8,
    description: 'Advanced smartwatch with health tracking, GPS, and seamless connectivity.',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '5',
    name: 'Sunglasses',
    price: 149,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Clothing',
    brand: 'Ray-Ban',
    rating: 4.4,
    description: 'Stylish sunglasses with UV protection and polarized lenses.',
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '6',
    name: 'Digital Camera',
    price: 499,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    brand: 'Canon',
    rating: 4.6,
    description: 'Professional digital camera with high-resolution sensor and advanced features.',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '7',
    name: 'T-shirt',
    price: 29,
    image: 'https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Clothing',
    brand: 'Uniqlo',
    rating: 4.2,
    description: 'Comfortable cotton t-shirt available in various colors and sizes.',
    images: [
      'https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '8',
    name: 'Smartphone',
    price: 699,
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    brand: 'Apple',
    rating: 4.9,
    description: 'Latest smartphone with advanced camera system, powerful processor, and sleek design.',
    images: [
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '9',
    name: 'Laptop',
    price: 899,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    brand: 'Apple',
    rating: 4.7,
    description: 'Powerful laptop perfect for work, creative projects, and entertainment.',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '10',
    name: 'Coffee Maker',
    price: 79,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Home',
    brand: 'Breville',
    rating: 4.1,
    description: 'Automatic coffee maker with programmable settings and thermal carafe.',
    images: [
      'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4226806/pexels-photo-4226806.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
];

export const categories = ['All', 'Electronics', 'Clothing', 'Home'];
export const brands = ['Apple', 'Sony', 'Nike', 'Canon', 'Ray-Ban', 'North Face', 'Uniqlo', 'Breville'];