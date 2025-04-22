'use client';

import { motion } from 'framer-motion';
import { FaCartPlus } from 'react-icons/fa';
import Image from 'next/image';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

const products = dataSite.products;
export default function ProductGrid() {
  const { validateProductInCart, handleAddOrRemoveProduct } = useCart();
  return (
    <section id='products' className='py-20 px-6'>
      <h2 className='text-4xl font-bold text-[#0a1b3e] mb-8 text-center'>
        Available Equipment for Rent
      </h2>

      <div className='grid md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {products.map((item, idx) => {
          const isInCart = validateProductInCart(item.id);
          return (
            <div
              key={idx}
              className='relative group bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition'
            >
              <div className='relative w-full h-60'>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className='object-cover object-center'
                />
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  style={{
                    backgroundColor: isInCart ? '#C55353FF' : '#0a1b3e',
                  }}
                  onClick={() => handleAddOrRemoveProduct(item.id)}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className='h-14 absolute inset-x-0 bottom-0 flex items-center justify-center  text-white text-sm font-medium backdrop-blur-sm opacity-0 group-hover:opacity-100'
                >
                  <FaCartPlus className='mr-2' />
                  {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </motion.button>
              </div>

              <div className='p-4'>
                <div className='flex justify-between items-center mb-1 text-sm text-green-600 font-semibold'>
                  <span>{item.label}</span>
                  <span className='text-gray-700'>${item.price} MXN</span>
                </div>
                <p className='font-semibold text-[#0a1b3e] text-lg'>
                  {item.name}
                </p>
                {/* <p className='text-xs text-gray-500 mt-1'>{item.category}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
