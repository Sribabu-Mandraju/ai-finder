import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-10">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        
        {/* Social Icons */}
        <div className="flex space-x-6">
          {[
            { icon: <MdEmail />, href: "#" },
            { icon: <FaTelegramPlane />, href: "#" },
            { icon: <FaXTwitter />, href: "#" },
            { icon: <FaDiscord />, href: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="p-4 bg-white/10 rounded-full backdrop-blur-md shadow-md transition-transform transform hover:scale-110 hover:bg-white/20"
            >
              <span className="text-xl">{item.icon}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-2/3 border-t border-gray-600"></div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-5 flex-wrap text-sm justify-center font-medium uppercase tracking-wide">
            {["Home", "Products", "Tokenomics", "Roadmap", "Docs"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-gray-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-sm text-gray-400">&copy; 2025 YourBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
