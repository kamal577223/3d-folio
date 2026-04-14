import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Developer</h4>
                <h5>JB Portals</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Actively contributed to multiple development projects involving research, data analysis, and project execution. Assisted in application development using Java, web technologies, and database systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E in CSE (IoT & Cybersec)</h4>
                <h5>Cambridge Institute Of Technology</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Currently pursuing my B.E in CSE with a focus on IoT and Cybersecurity including Blockchain Technology. Maintained an 8.93 CGPA throughout my diploma and successfully completed a 16-week industrial training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
