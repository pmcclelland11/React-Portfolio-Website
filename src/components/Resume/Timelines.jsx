import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

export const WorkingHistoryTimeline = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <BusinessCenterIcon style={{ color: '#0094FF', width: '1.5em', height: '1.5em'  }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" sx={{ marginTop: '-15px', color: '#0094FF', padding: '8px', fontWeight: 'bolder', fontSize: '1.65rem' }}>Working History</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CircleOutlinedIcon  style={{ color: '#0094FF' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" sx={{ marginTop: '-10px' }}>Full-Time Sales Expert</Typography>
          <Typography variant='body3' sx={{ display: 'block' }}><b>Company: </b>T-Mobile</Typography>
          <Typography variant='body2' sx={{ display: 'block' }}><b>Position: </b>Mobile Expert</Typography>
          <Typography variant='body2' sx={{ display: 'block' }}><b>Achievements: </b>Circle of Achievement Winner 2020 & 2022</Typography>
          <Typography variant='body2'><b>Duration: </b>Aug 2020 - Current</Typography>
          <br></br>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CircleOutlinedIcon  style={{ color: '#0094FF' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" sx={{ marginTop: '-10px' }}>Sales Manager</Typography>
          <Typography variant='body3' sx={{ display: 'block' }}><b>Company: </b>Sprint (Merged with T-Mobile in 2020)</Typography>
          <Typography variant='body2' sx={{ display: 'block' }}><b>Position: </b>Lead Retail Consultant / Assistance Store Mananger</Typography>
          <Typography variant='body2' sx={{ display: 'block' }}><b>Achievements: </b>Pinnacle Award Winner 2017 & 2019</Typography>
          <Typography variant='body2'><b>Duration: </b>Oct 2015 - Aug 2020</Typography>
          <br></br>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CircleOutlinedIcon  style={{ color: '#0094FF' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" sx={{ marginTop: '-10px' }}>Sales Manager</Typography>
          <Typography variant='body3' sx={{ display: 'block' }}><b>Company: </b>Trader Joe's</Typography>
          <Typography variant='body2' sx={{ display: 'block' }}><b>Position: </b>Customer Server Expert & Section Leader</Typography>
          <Typography variant='body2'><b>Duration: </b>2010 - 2015</Typography>
          <br></br>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        </TimelineSeparator>
        <TimelineContent>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

// Educational History Timeline
export const EducationalHistoryTimeline = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <SchoolIcon  style={{ color: '#0094FF', width: '1.5em', height: '1.5em'  }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" sx={{ marginTop: '-15px', color: '#0094FF', padding: '8px', fontWeight: 'bolder', fontSize: '1.65rem' }}>Educational History</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CircleOutlinedIcon  style={{ color: '#0094FF' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" sx={{ marginTop: '-10px' }}>Full Stack Developer Certification</Typography>
          <Typography variant='body3' sx={{ display: 'block' }}><b>Institution: </b>UC Berkeley Extension</Typography>
          <Typography variant='body2' sx={{ display: 'block' }}><b>Program: </b>Full Stack Coding Bootcamp (via EdX)</Typography>
          <Typography variant='body2'><b>Duration: </b>June 2023 - Dec 2023</Typography>
          <br></br>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CircleOutlinedIcon  style={{ color: '#0094FF' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" sx={{ marginTop: '-10px' }}>Bachelor of Science in Computer Science</Typography>
          <Typography variant='body3' sx={{ display: 'block' }}><b>Institution: </b>Colorado State University</Typography>
          <Typography variant='body2' sx={{ display: 'block' }}><b>Achievements: </b>Graduated with a 4.0 GPA - Summa Cum Laude</Typography>
          <Typography variant='body2'><b>Duration: </b>June 2021 - June 2023</Typography>
          <br></br>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CircleOutlinedIcon  style={{ color: '#0094FF' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" sx={{ marginTop: '-10px' }}>General Education Completion</Typography>
          <Typography variant='body3' sx={{ display: 'block' }}><b>Institution: </b>College of San Mateo</Typography>
          <Typography variant='body2' sx={{ display: 'block' }}><b>Details: </b>Completed General Education requirements for transfer</Typography>
          <Typography variant='body2'><b>Duration: </b>Aug 2008 - June 2010</Typography>
          <br></br>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        </TimelineSeparator>
      </TimelineItem>
    </Timeline>
  );
};
