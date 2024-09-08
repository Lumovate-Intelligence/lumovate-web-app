export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-purple-50 to-purple-100 text-gray-900 py-20 px-6"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">
          Have an idea or project in mind? We're excited to help you bring it to
          life.
        </p>
        <p className="mb-12 text-gray-600">
          Contact us today and let's discuss your vision. We aim to respond
          within 24 hours.
        </p>

        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded-lg border border-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
              required
              aria-label="Your Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded-lg border border-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
              placeholder="Your Email"
              required
              aria-label="Your Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 rounded-lg border border-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
              placeholder="Your Message"
              rows={2}
              required
              aria-label="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Send Message
          </button>
          <p className="mt-4 text-sm text-gray-600">
            We'll never share your email with anyone else.
          </p>
        </form>
      </div>
    </section>
  );
}
