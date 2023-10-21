import React from "react";
import Project from "./Project";
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: "#ECECEC",
  },
  heading: {
    background: "#ff3b83",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.25rem",
    textTransform: "uppercase",
    color: "white",
    padding: "0 20px",
    textAlign: "center",
  },
  content: {
    padding: 50,
    minHeight: 50,
    lineHeight: 2,
    fontSize: "1.25rem",
    color: "#333",
  },

  image: {
    width: 350,
    backgroundSize: "contain",
    float: "left",
    paddingRight: "3%",
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function AboutMe() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About me</div>
      <div style={styles.content}>
        <p>
          <img
            src={process.env.PUBLIC_URL + "/img.jpg"}
            alt="Kateryna Stetsenko"
            style={styles.image}
            className="rounded"
          />
          Hi, my name is Kateryna Stetsenko, and I am a passionate and
          experienced full-stack developer. With a strong background in creating
          startups and managing projects, I bring a wealth of expertise to the
          table. I recently completed a comprehensive certificate in full-stack
          development from Berkeley Bootcamp, equipping me with a diverse skill
          set. I am driven by my commitment to deliver exceptional user
          experiences and contribute to technological advancements. I excel in
          utilizing tools and technologies such as Node.js, SQL, MongoDB,
          JavaScript, React, APIs, HTML, CSS, and Git. My goal is to develop
          innovative and scalable web applications that make a meaningful
          impact. As a full-stack developer, I am equally comfortable working on
          the frontend and backend aspects of projects. I thrive in
          collaborative environments and am eager to take on new challenges that
          push the boundaries of my skills. driving technological advancements.
        </p>
      </div>
      <div>
        <Project />
      </div>
    </div>
  );
}

export default AboutMe;
