import "./about.css";
import htmlLogo from "../../assets/html-cs-js.png";
import javaLogo from "../../assets/java.png";
import nodeLogo from "../../assets/nodejs.png";
import mysqlLogo from "../../assets/mysql.png";
import mongodbLogo from "../../assets/mongodb.png";
import reactLogo from "../../assets/react.png";

const About = () => {
  return (
    <div>
      <section id="about">
        <span className="aboutTitle">About Me</span>
        <br></br>
        <span className="aboutDesc">
          I am 33 years old and I live in the San Francisco Bay Area. I have
          been programming for 3 years now. I obtained my Bachelor's degree in
          Computer Science from Colorado State University Global in June 2023
          and just graduated a Full Stack Web Development Bootcamp from UC
          Berkeley Extension in December 2023.
          <br></br>
          <br></br>
          My goal is to leverage my technical skills and creativity to build
          innovative and user-friendly web applications. I enjoy tackling
          challenges and continually expanding my knowledge in the ever-evolving
          field of web development. When I'm not coding, I love traveling,
          mountain biking, bowling, and spending time with my friends/family. I
          am also a huge sports fan - San Francisco Giants (MLB), San Francisco
          49ers (NFL), and the Golden State Warriors (NBA).
          <br></br>
        </span>
      </section>

      <p className="techHeader">
        Here are some of the technologies that I have been working with recently:
      </p>
      <br></br>
      <section id="techbar" style={{ display: "flex" }}>
        <div className="singleTechBox">
          <img src={htmlLogo} alt="html logo" className="techbarImg" />
        </div>
        <div className="singleTechBox">
          <img src={javaLogo} alt="java logo" className="techbarImg" />
        </div>
        <div className="singleTechBox">
          <img src={nodeLogo} alt="node logo" className="techbarImg" />
        </div>
        <div className="singleTechBox">
          <img src={mysqlLogo} alt="mysql logo" className="techbarImg" />
        </div>
        <div className="singleTechBox">
          <img src={mongodbLogo} alt="mongodb logo" className="techbarImg" />
        </div>
        <div className="singleTechBox">
          <img src={reactLogo} alt="react logo" className="techbarImg" />
        </div>
      </section>
    </div>
  );
};

export default About;
