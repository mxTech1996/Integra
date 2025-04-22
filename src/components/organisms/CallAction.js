function CallToActionSection() {
  return (
    <section className='py-16 px-8 bg-[#0a1b3e]  text-white text-center'>
      <h2 className='text-3xl font-bold mb-4'>
        Ready to take your business to the next level?
      </h2>
      <p className='mb-8'>
        We are here to help you with all your consulting needs. Our team of
        experts is ready to assist you in achieving your goals.
      </p>
      <a
        href='/more-information#contact'
        className='bg-white text-yellow-500 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition'
      >
        Contact us
      </a>
    </section>
  );
}
export default CallToActionSection;
