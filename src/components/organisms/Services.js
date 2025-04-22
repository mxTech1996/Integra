import { FaTools, FaMountain, FaTree } from 'react-icons/fa';

import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Construction Equipment',
    description:
      'We provide tailored consulting for companies looking to optimize construction equipment rentals—ensuring productivity, compliance, and profitability.',
    icon: <FaTools className='text-4xl text-yellow-500' />,
  },
  {
    title: 'Mining Machinery',
    description:
      'Our team helps you select the right heavy-duty machinery for efficient mining operations, with an emphasis on safety, durability, and cost control.',
    icon: <FaMountain className='text-4xl text-yellow-500' />,
  },
  {
    title: 'Forestry Operations',
    description:
      'We advise on modern forestry equipment rentals, focusing on sustainable operations, risk management, and optimal deployment.',
    icon: <FaTree className='text-4xl text-yellow-500' />,
  },
];

function ServicesSection() {
  return (
    <div id='about' className='bg-[#0a1b3e] py-20 px-6 text-white'>
      <div className='max-w-6xl mx-auto text-center mb-16'>
        <motion.h2
          className='text-4xl font-bold mb-4'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Industry-Focused Consulting Solutions
        </motion.h2>
        <motion.p
          className='text-gray-300 max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Expert guidance in construction, mining, and forestry equipment
          rentals.
        </motion.p>
      </div>

      <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {sections.map((item, index) => (
          <motion.div
            key={item.title}
            className='bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='mb-4'>{item.icon}</div>
            <h3 className='text-2xl font-semibold mb-2'>{item.title}</h3>
            <p className='text-gray-300 text-sm leading-relaxed'>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default ServicesSection;
