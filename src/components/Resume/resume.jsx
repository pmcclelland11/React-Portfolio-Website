import {
  WorkingHistoryTimeline,
  EducationalHistoryTimeline,
} from "./Timelines";
import "./resume.css";

const Resume = () => {
  // Function to handle the download button click
  const handleDownload = () => {
    // You can replace 'path/to/your/resume.txt' with the actual path to your resume file
    const resumePath = 'path/to/your/resume.txt';
    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Resume.txt';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger the click event
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <section id="resume">
      <h2 className="resumeTitle">My Resume</h2>
      <div className="resumeContainer">
        <div className="timelineContainer">
          <WorkingHistoryTimeline />
        </div>
        <div className="timelineContainer">
          <EducationalHistoryTimeline />
        </div>
      </div>

      <p style={{ textAlign: 'center' }}>
        Or download my resume below:
      </p>
      <br></br>

      {/* Download Resume Button */}
      <button className="downloadButton" onClick={handleDownload}>
        Download Resume
      </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
    
  );
};

export default Resume;
