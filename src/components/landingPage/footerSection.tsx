import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-purple-500 text-white py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Lumovate Intelligence. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://facebook.com"
            className="hover:text-gray-400"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-gray-400"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-gray-400"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
