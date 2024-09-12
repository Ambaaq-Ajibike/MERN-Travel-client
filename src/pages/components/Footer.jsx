

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-cover bg-center bg-no-repeat bg-gray-50 md:h-[70vh] w-full text-black py-20 text-center md:text-left'>
  <div className='container mx-auto px-6 md:px-20'>
    <div className='flex flex-col gap-8 md:flex-row md:gap-16'>
      <div className='md:w-1/3'>
        <h1 className='text-4xl font-extrabold mb-6 border-b-2 border-gray-200 pb-4'>200 Travel</h1>
        <p className='text-lg leading-relaxed mb-6'>
        We are dedicated to providing comprehensive support for all your travel needs. Whether you're applying for residency, citizenship, or a visa, we ensure a smooth and hassle-free experience. Our team takes your concerns seriously and works diligently to provide you with the most satisfactory solution, making your journey as seamless as possible.
        </p>
        <button className='font-bold rounded-full p-4 px-8 bg-primary text-white mt-4 hover:bg-primary-dark transition duration-300'>
          Contact Us
        </button>
      </div>
      <div className='flex flex-col gap-4 md:w-1/3'>
        <p className='text-lg'>support@matrixmomentum.com</p>
        <p className='text-lg'>
          35 Upper Richmond Road, London, United Kingdom, SW15 2RD.
        </p>
      </div>
      <div className='flex flex-col gap-4 md:w-1/3'>
        <h2 className='text-xl font-semibold border-b-2 border-gray-200 pb-2'>Information</h2>
        <p className='hover:underline cursor-pointer'>About us</p>
        <p className='hover:underline cursor-pointer'>Rules</p>
        <p className='hover:underline cursor-pointer'>FAQ</p>
      </div>
      <div className='flex flex-col gap-4 md:w-1/3'>
        <h2 className='text-xl font-semibold border-b-2 border-gray-200 pb-2'>Help</h2>
        <p className='hover:underline cursor-pointer'>Contact Us</p>
        <p className='hover:underline cursor-pointer'>Terms of Use</p>
      </div>
    </div>
    <div className='text-center text-yellow-700 mt-12 text-sm'>
      {currentYear} 200 Travel. All Rights Reserved
    </div>
  </div>
</div>

  
  );
};

export default Footer;
