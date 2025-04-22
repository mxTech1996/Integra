'use client';

import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

function HeroWithNavbar() {
  const { products } = useCart();
  return (
    <section className='relative h-screen text-white'>
      {/* Background */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={dataSite.image_hero}
          alt='Office Background'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/50' />
      </div>

      {/* Overlay Content */}
      <div className='relative z-10 h-full flex flex-col'>
        {/* Navbar */}
        <nav className='flex items-center justify-between px-8 py-6'>
          <div className='text-2xl font-bold'>Dorantes</div>
          <ul className='hidden md:flex gap-8 font-medium'>
            <Link href={'/#products'}>
              <li className='hover:text-yellow-400 cursor-pointer'>Products</li>
            </Link>
            <Link href={'/#about'}>
              <li className='hover:text-yellow-400 cursor-pointer'>About</li>
            </Link>
            <Link href={'/#services'}>
              <li className='hover:text-yellow-400 cursor-pointer'>Services</li>
            </Link>
            <Link href={'/#references'}>
              <li className='hover:text-yellow-400 cursor-pointer'>
                References
              </li>
            </Link>
            <Link href={'/more-information#contact'}>
              <li className='hover:text-yellow-400 cursor-pointer'>Contact</li>
            </Link>
          </ul>
          <Link href={'/my-cart'}>
            <div className='relative'>
              <FaShoppingCart className='text-xl text-white cursor-pointer' />
              <span className='absolute -top-2 -right-4 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                {products.length}
              </span>
            </div>
          </Link>
          <button className='bg-teal-400 text-white font-semibold px-5 py-2 rounded-full hover:bg-teal-500 transition'>
            Get Started
          </button>
        </nav>

        {/* Hero */}
        <div className='flex-1 flex flex-col justify-center items-start px-8 md:px-20 max-w-4xl'>
          <p className='uppercase text-teal-300 tracking-widest text-sm mb-4'>
            The best consulting
          </p>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight mb-6'>
            {dataSite.subtitle}
          </h1>
          <p className='text-lg text-gray-200 mb-8 max-w-xl'>
            {dataSite.description}
          </p>
          <Link href={'/#about'}>
            <button className='px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition'>
              About Dorantes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroWithNavbar;
