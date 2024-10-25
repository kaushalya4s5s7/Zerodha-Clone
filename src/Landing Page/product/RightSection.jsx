import React, { useEffect, useRef, useState } from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  googlePlay,
  appStore,
  icon,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation
        } else {
          setIsVisible(false); // Reset state when out of view
        }
      },
      { threshold: 0.1 } // Adjust the threshold to control when the animation triggers
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const slideInFromLeftStyle = {
    transform: isVisible ? "translateX(0)" : "translateX(-100%)", // Slide in from the left
    transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
    opacity: isVisible ? 1 : 0,
  };

  const slideInFromRightStyle = {
    transform: isVisible ? "translateX(0)" : "translateX(100%)", // Slide in from the right
    transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
    opacity: isVisible ? 1 : 0,
  };

  return (
    <div className="container" ref={sectionRef}>
      <div className="row align-items-center">
        <div className="col-5 p-5" style={slideInFromLeftStyle}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              {tryDemo} {icon}
            </a>
          </div>
        </div>
        <div className="col-7" style={slideInFromRightStyle}>
          <img
            src={imageURL}
            alt="Product"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
