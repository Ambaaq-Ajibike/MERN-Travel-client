export const GenForm = () => {
  // action="https://formspree.io/f/mqazrrdw"
  // method="POST" 
  return (
    <div>
      <form  className="md:w-[40pc] space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            className="w-full p-2 mt-4 md:mt-0 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-2 mt-4 md:mt-0 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
        <textarea
          placeholder="Your message"
          name="message"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-gray-900 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
