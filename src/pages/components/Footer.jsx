
const Footer = () => {

  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
        <img 
          src="/images/no-bg.png"
          className="w-32"
         />
          <p className="mt-4">
          We are dedicated to providing comprehensive support for all your travel needs. Whether you're applying for residency, citizenship, or a visa, we ensure a smooth and hassle-free experience.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="mailto:contact@200travels.com" className="hover:text-white">
              contact@200travels.com
              </a>
            </li>
            <li>
              <span>+223 661 55100</span>
            </li>
            <li>
              <span>123 Gold Street, New York, NY 10001</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="/proofoffund" className="hover:text-white">Proof of Fund</a></li>
            <li><a href="/services" className="hover:text-white">Other Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="text-white text-lg font-semibold">Our Services</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">Document services </a></li>
            <li><a href="#" className="hover:text-white">Job search assistance </a></li>
            <li><a href="#" className="hover:text-white">CV writing</a></li>
            <li><a href="#" className="hover:text-white">SOP writing</a></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-white text-lg font-semibold">Opening Hours</h3>
          <ul className="mt-4 space-y-2">
            <li>Monday: 9:00 am - 05:00 pm</li>
            <li>Tuesday: 9:00 am - 05:00 pm</li>
            <li>Wednesday: 9:00 am - 05:00 pm</li>
            <li>Thursday: 9:00 am - 05:00 pm</li>
            <li>Friday: 9:00 am - 05:00 pm</li>
            <li>Saturday: <span className="text-red-500">CLOSED</span></li>
            <li>Sunday: <span className="text-red-500">CLOSED</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-700 pt-6">
        {/* <p className="text-sm text-gray-500">
          © All rights reserved. Powered by <span className="text-white">Association Minière du Mali.</span>
        </p> */}
        <p className="text-sm text-gray-500">
          © All rights reserved
        </p>
        {/* <button className="bg-white text-gray-900 px-4 py-2 rounded-full mt-4">
          2
        </button> */}
      </div>
    </footer>
  );
};

export default Footer;
