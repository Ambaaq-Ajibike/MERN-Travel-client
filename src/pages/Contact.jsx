import Footer from "./components/Footer";
import { GenForm } from "./components/GenForm";

const ContactForm = () => {
  return (
    <div>
          <div className="flex flex-col justify-start items-center bg-white px-4 pb-0 mb-0">
    <div className="flex flex-col justify-center items-center md:w-2/5 mb-10">
    <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-center">
            At 200 Travels, we are dedicated to providing comprehensive support for all your travel needs. Whether you're applying for residency, citizenship, or a visa, we ensure a smooth and hassle-free experience.
          </p>
    </div>
    
      <div className=" p-8  flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Side: Contact Information */}
        <div className="lg:w-1/2 space-y-6">
          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="text-blue-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2C8.69 2 6 4.69 6 8c0 2.64 1.8 5.44 4.37 7.43.62.52 1.34.57 1.83.57.48 0 1.2-.05 1.83-.57C16.2 13.44 18 10.64 18 8c0-3.31-2.69-6-6-6zm0 10.5c-1.44 0-2.5-1.06-2.5-2.5S10.56 7.5 12 7.5 14.5 8.56 14.5 10 13.44 12.5 12 12.5z"></path>
</svg>

              </div>
              <div>
                <p className="text-gray-700 font-semibold">Location</p>
                <p className="text-gray-500">123 Main Street, Anytown USA</p>
              </div>
            </div>
            
            {/* Phone Numbers */}
            <div className="flex items-center space-x-4">
              <div className="text-blue-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  <path d="M6.62 10.79c.38 0 .75.15 1.02.42l1.8 1.8c.26.26.62.4.99.38.33-.02.64-.19.89-.44l1.42-1.42a1.003 1.003 0 0 1 1.42 0l2.56 2.56c.39.39.39 1.02 0 1.41l-1.42 1.42a1.003 1.003 0 0 1-.44.89c-.02.37-.12.73-.38.99l-1.8 1.8c-.27.27-.64.42-1.02.42H6.62c-.38 0-.75-.15-1.02-.42l-1.8-1.8c-.27-.27-.42-.64-.42-1.02v-6.92c0-.38.15-.75.42-1.02l1.8-1.8c.27-.27.64-.42 1.02-.42h6.92z"></path>
</svg>

              </div>
              <div>
                <p className="text-gray-700 font-semibold">Give us a call</p>
                <p className="text-gray-500">(555) 555-5555, +239-555-010B</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="text-blue-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h6c1.1 0 2-.9 2-2v-6l4 4V8c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6l-4-4h2v6c0 1.1.9 2 2 2h6c5.52 0 10-4.48 10-10S17.52 2 12 2z"></path>
</svg>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Email</p>
                <p className="text-gray-500">contact@200travels.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
      <GenForm/>
      </div>
    </div>
    <Footer/>
    </div>
  
  );
};

export default ContactForm;
