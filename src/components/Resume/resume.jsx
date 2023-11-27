import {
  WorkingHistoryTimeline,
  EducationalHistoryTimeline,
} from "./Timelines";
import "./resume.css";

const Resume = () => {
  return (
    <section id="resume">
      <h2 className="resumeTitle">My Resume & Timeline</h2>
      <div className="resumeContainer">
        <div className="timelineContainer">
          <WorkingHistoryTimeline />
        </div>
        <div className="timelineContainer">
          <EducationalHistoryTimeline />
        </div>
      </div>
    </section>
  );
};

export default Resume;
