import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "../shared/Card";
const products = [
  {
    title: "Investing LLM Model",
    description:
      "The LLM model is designed to be a sophisticated investment assistant specifically tailored for investment strategies based on their risk tolerance, goals, and market conditions.",
    image: "/images/investing-llm.png", // Replace with actual image path
  },
  {
    title: "AI Trading Assistant",
    description:
      "An AI-powered trading assistant that provides insights on market trends, price predictions, and real-time stock analysis for informed decision-making.",
    image: "/images/trading-ai.png", // Replace with actual image path
  },
];

const Product: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="relative max-w-5xl mx-auto p-6">
      <h2 className="text-white text-3xl font-bold text-center mb-6">
        OUR PRODUCTS
      </h2>
      <Card>
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-blue-400 text-2xl font-semibold">
            {products[currentIndex].title}
          </h3>
          <p className="text-gray-300 mt-3">
            {products[currentIndex].description}
          </p>
          {/* Navigation Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <button
              title="Previous"
              onClick={prevSlide}
              className="p-2 bg-gray-700 hover:bg-gray-600 transition rounded-full"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <button
              title="Next"
              onClick={nextSlide}
              className="p-2 bg-gray-700 hover:bg-gray-600 transition rounded-full"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src={products[currentIndex].image}
            alt={products[currentIndex].title}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
        </Card>
    </div>
  );
};

export default Product;
