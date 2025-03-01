import React from "react";
import videoBg from "../../assets/aifinder.mp4"; // Replace with your actual video file

const Hero: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center mx-auto max-w-7xl">
      <div className="relative w-full h-auto max-w-7xl mx-auto overflow-hidden">
        {/* Full-screen Background Video */}
        <video
          className=" w-full max-w-7xl mix-blend-lighten  h-full "
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default Hero;
