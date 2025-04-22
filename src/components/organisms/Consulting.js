import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = dataSite.services;

export default function ConsultingSection() {
  return (
    <section id='services' className='text-center py-24 px-4'>
      <p className='text-sm text-green-600 font-semibold mb-2'>
        /Our Best Offers For You
      </p>
      <h2 className='text-4xl font-bold text-[#0a1b3e] mb-4'>
        Advisory Solutions for Every Challenge
      </h2>
      <p className='max-w-2xl mx-auto text-gray-500 mb-10'>
        We specialize in delivering consulting services for construction,
        mining, and forestry equipment rental. Our insights help you operate
        smarter and grow faster.
      </p>

      <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className='relative rounded-xl overflow-hidden group shadow-lg'
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className='w-full h-full object-cover'
            />
            <div className='absolute bottom-4 left-4 z-20'>
              <h3 className='text-xl font-semibold text-white drop-shadow'>
                {service.title}
              </h3>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className='absolute inset-0 bg-black/60 text-white flex flex-col justify-end p-4'
            >
              <p className='text-sm text-gray-200 mb-16'>
                {service.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
