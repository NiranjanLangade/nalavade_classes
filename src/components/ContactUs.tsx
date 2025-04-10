export default function ContactUs() {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>

        {/* Google Maps Embed */}
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg mb-6">
        <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.0921282972486!2d74.00623311120799!3d17.693107483177368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239c045ac04e3%3A0x8f998112009b00a5!2sNALAVADE%20CLASSES%2C%20IIT-JEE%2FNEET%20ACADEMY!5e0!3m2!1sen!2sin!4v1743052469419!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy">
          </iframe>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-secondary text-white p-2 rounded-lg hover:bg-blue-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
