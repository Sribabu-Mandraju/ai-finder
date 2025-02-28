import React, { useState } from "react";
import tasklogo from "../../assets/tasklogo.svg";
import { RiMenu2Fill } from "react-icons/ri";

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Tokenomics", href: "#" },
    { label: "Roadmap", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Testnet", href: "#" },
  ];

  return (
    <div className="flex w-screen h-screen bg-gray-900">
      <header className="flex items-center w-full my-6 h-max flex-row justify-between mx-8 md:mx-14">
        {/* Logo */}
        <div>
          <img src={tasklogo} alt="Task Logo" className="md:w-auto md:h-auto w-[50%]" />
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex flex-row p-[19px] px-16 shadow-white/30 shadow-inner 
          text-white gap-12 text-xl border-opacity-5 rounded-[25px] backdrop-blur-xl bg-white/5 
          border h-full border-white/20"
        >
          {navItems.map((data, index) => (
            <a
              key={index}
              href={data.href}
              className={`${data.label === "Testnet" ? "text-gray-500 font-semibold" : "text-white"}`}
            >
              {data.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex text-white text-2xl">
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <RiMenu2Fill size={24} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed left-2 top-16 backdrop-blur-xl shadow-white/30 shadow-inner bg-gray-900 
            border h-[90vh] border-white/40 bottom-0 w-64 text-white p-4 transform transition-transform 
            duration-300 ease-in-out z-50 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col justify-start gap-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-2 py-2 px-3 rounded-md transition-colors duration-200 
                    ${item.label === "Testnet" ? "text-gray-500 font-semibold" : "text-white"}`}
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
