import { dataSite } from '@/data';
import { FaStar } from 'react-icons/fa';

const testimonials = dataSite.references;

export default function TestimonialsGrid() {
  return (
    <section id='references' className='py-24 px-6 text-center'>
      <h2 className='text-4xl font-bold text-[#0a1b3e] mb-4'>
        What Our Clients Say
      </h2>
      <p className='text-gray-500 max-w-xl mx-auto mb-12'>
        We’re grateful for the trust our clients place in us. Here’s what they
        have to say about our consulting services for heavy equipment rentals.
      </p>

      <div className='grid gap-6 md:grid-cols-3'>
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className='bg-[#e9fafe] rounded-xl p-6 text-left shadow-md border border-transparent hover:border-green-400 transition'
          >
            <p className='text-gray-700 mb-6'>“{item.description}”</p>
            <div className='flex items-center gap-3'>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-10 h-10 rounded-full object-cover'
                />
              ) : (
                <div className='w-10 h-10 rounded-full bg-[#d2f4f2] flex items-center justify-center text-[#0a1b3e] font-bold text-sm'>
                  {item.name
                    .split(' ')
                    .map((n) => n.charAt(0))
                    .join('')}
                </div>
              )}
              <div>
                <p className='font-semibold text-[#0a1b3e]'>{item.name}</p>
                <div className='flex gap-1 text-yellow-400 text-sm'>
                  {Array.from({ length: item.rating }).map((_, starIdx) => (
                    <FaStar key={starIdx} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
