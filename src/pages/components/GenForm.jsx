

export const GenForm = () => {
  return (
    <div className="lg:w-1/2">
    <form className="space-y-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <input
          type="text"
          placeholder="First name"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
        <input
          type="text"
          placeholder="Last name"
          className="w-full p-2 mt-4 md:mt-0 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>
      <input
        type="email"
        placeholder="Your email"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
      <textarea
        placeholder="Your message"
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
  )
}
