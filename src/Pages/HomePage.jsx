import React from "react";

const HomePage = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: "relative",
  };

  const splitImageStyle = {
    position: "relative",
    width: "50%",
    height: "100vh",
    overflow: "hidden",
  };

  const imageStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "grayscale(100%)",
  };

  const colorImageStyle = {
    ...imageStyle,
    filter: "none",
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
  };

  const headingStyle = {
    fontSize: "4rem",
    margin: 0,
  };

  const paragraphStyle = {
    fontSize: "1.5rem",
  };

  return (
    <div style={containerStyle}>
      <div style={splitImageStyle}>
        <img
          src="/path/to/your/developer-image.jpg"
          alt="Full Stack Developer"
          style={imageStyle}
        />
        <div style={textStyle}>
          <h1 style={headingStyle}>Full Stack Developer</h1>
          <p style={paragraphStyle}>Building robust applications</p>
        </div>
      </div>
      <div style={splitImageStyle}>
        <img
          src="/path/to/your/designer-image.jpg"
          alt="UI/UX Designer"
          style={colorImageStyle}
        />
        <div style={textStyle}>
          <h1 style={headingStyle}>UI/UX Designer</h1>
          <p style={paragraphStyle}>Creating intuitive designs</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
