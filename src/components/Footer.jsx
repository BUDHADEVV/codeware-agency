import FooterContact from "./FooterContact";
import footerLogo from "/assets/footer-logo.png";
// Icons import
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-secondary rounded-2xl">
        {/* first section */}
        <div 
        
        className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 sm:px-6 lg:px-8 py-12">
          {/* logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={footerLogo} alt="Logo" className="h-8" />
            <h1 className="text-white font-bold text-2xl">Codeware</h1>
          </a>

          {/* menu items */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a href="#about"     className="text-white hover:text-gray-400">Home</a>
            <a href="#services"  className="text-white hover:text-gray-400">Services</a>
            <a href="#use-cases" className="text-white hover:text-gray-400">Use Cases</a>
            <a href="#contact"   className="text-white hover:text-gray-400">Contact</a>
          </div>

                  {/* social icons */}
                  <div className="flex md:justify-end space-x-4">
                      <a href="https://www.instagram.com/codeware.online/" className="p-1.5 text-black rounded-full bg-white">
                          <FaInstagram className="hover:text-gray-400" />
                      </a>

                      <a href="https://www.linkedin.com/in/budhadev-v-223701251/" className="p-1.5 text-black rounded-full bg-white">
                          <FaLinkedin className="hover:text-gray-400" />
                      </a>

                      <a href="#" className="p-1.5 text-black rounded-full bg-white">
                          <FaTwitter className="hover:text-gray-400" />
                      </a>

                      
                  </div>

        </div>

        {/* contact and newsletter */}
        <FooterContact/>

              <hr className="my-4 border-white mx-4 sm:px-6 lg:px-8" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-white px-4 sm:px-6 lg:px-8 py-5">
                  <div className="flex flex-wrap gap-4 md:gap-8">
                      <p>© 2024 Codeware. All Rights Reserved.</p>
                      <p className="underline underline-offset-4">
                          <a href="#">Privacy Policy</a>
                      </p>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-300">
                      <span>Built with by</span>
                      <a 
                          href="https://www.linkedin.com/in/budhadev-v-223701251/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-white transition-colors duration-300 font-medium"
                      >
                          Budhadev
                      </a>
                  </div>
              </div>

      </div>
    </footer>
  );
};

export default Footer;
