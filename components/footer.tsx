"use client"
const Footer = () => {
    return (
      <div className=" text-gray-200 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold">© 2025 Shiva prasad . All rights reserved.</h3>
          </div>
          <div className="flex space-x-5">
            <a href="https://github.com/shivaprasad501/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shivaprasad16/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-white text-sm"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    );
  };
  
  export default Footer;
  