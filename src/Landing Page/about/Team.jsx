import React, { useEffect, useRef } from "react";

// Inline styles for your component
const styles = {
  container: {
    backgroundColor: "#f8f9fa",
    padding: "5rem",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.5",
    marginBottom: "2rem",
  },
  image: {
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    padding: "1rem",
    marginTop: "2rem",
    transition: "transform 0.5s, opacity 0.5s",
    opacity: 0,
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
  },
  infoText: {
    padding: "2rem",
  },
  column: {
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 0.5s, transform 0.5s",
  },
};

function Team() {
  const leftRef1 = useRef(null);
  const rightRef1 = useRef(null);
  const leftRef2 = useRef(null);
  const rightRef2 = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // When 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1; // Make visible
          entry.target.style.transform = "translateY(0)"; // Reset position
        }
      });
    }, observerOptions);

    if (leftRef1.current) observer.observe(leftRef1.current);
    if (rightRef1.current) observer.observe(rightRef1.current);
    if (leftRef2.current) observer.observe(leftRef2.current);
    if (rightRef2.current) observer.observe(rightRef2.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (leftRef1.current) observer.unobserve(leftRef1.current);
      if (rightRef1.current) observer.unobserve(rightRef1.current);
      if (leftRef2.current) observer.unobserve(leftRef2.current);
      if (rightRef2.current) observer.unobserve(rightRef2.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div style={styles.container} className="container-fluid">
      <div className="row">
        <div
          className="col-6"
          ref={leftRef1}
          style={{ ...styles.column, transform: "translateX(-20px)" }} // Animate from left
        >
          <p className="fs-6" style={styles.paragraph}>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
            <br /> Today, our disruptive pricing models and in-house technology
            have made us the biggest stock broker in India. Over 1+ Crore
            clients place millions of orders every day through our powerful
            ecosystem of investment platforms, contributing over 15% of all
            Indian retail trading volumes. In addition, we run a number of
            popular open online educational and community initiatives to empower
            retail traders and investors.
            <br /> Rainmatter, our fintech fund and incubator, has invested in
            several fintech startups with the goal of growing the Indian capital
            markets. And yet, we are always up to something new every day. Catch
            up on the latest updates on our blog or see what the media is saying
            about us.
          </p>
        </div>
        <div
          className="col-6"
          ref={rightRef1}
          style={{ ...styles.column, transform: "translateX(20px)" }} // Animate from right
        >
          <p className="fs-6" style={styles.paragraph}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
            <br />
            <br />
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets. And yet, we are always up to something new every day. Catch
            up on the latest updates on our blog or see what the media is saying
            about us.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            ref={imageRef}
            src="Media/Kaushal.jpg"
            style={styles.image}
            alt="Kaushal"
          />
        </div>
        <div
          className="col-6 p-5 mt-4"
          ref={leftRef2}
          style={{ ...styles.column, transform: "translateX(-20px)" }}
        >
          <h1 className="text-center">Kaushal | Developer</h1>
          <p className="text-start " style={styles.infoText}>
            <br />
            Built Zerodha, my first project—a leading fintech platform serving
            millions. Passionate about creating innovative solutions and pushing
            technology's boundaries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
