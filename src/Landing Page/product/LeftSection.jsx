import React, { useEffect, useRef, useState } from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  licon,
  ricon,
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

  const fadeInStyle = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
  };

  const slideInLeftStyle = {
    transform: isVisible ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.5s ease-in-out",
  };

  const slideInRightStyle = {
    transform: isVisible ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <div className="container" ref={sectionRef}>
      <div className="row align-items-center" style={fadeInStyle}>
        <div className="col-5 p-5 mb-5" style={slideInLeftStyle}>
          <img src={imageURL} alt={productName} />
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5 mt-4" style={slideInRightStyle}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              {tryDemo} {licon}
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              {learnMore} {ricon}
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="Media/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img
                src="Media/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
