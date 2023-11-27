import './portfolio.css';
import movieKnight from '../../assets/movie-knight.png';
import vehicleInventory from '../../assets/vehicle-management.png';
import githubLogo from '../../assets/github.png';

const Portfolio = () => {
  const openGithub = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id='portfolio'>
      <h2 className='portfolioTitle'>My Portfolio</h2>
      <div className='portfolioItems'>
        <div className='portfolioItem'>
          <img
            src={vehicleInventory}
            alt='Vehicle Management System'
            className='projectImg'
          />
          <h3>Vehicle Management System</h3>
          <p>
            Designed and developed a full-stack website for the efficient
            management of a fictional Certified Pre-Owned Car Lot's vehicle
            inventory. Authenticated employees can seamlessly navigate, filter,
            and manage the diverse array of vehicles within the business'
            inventory. The technology stack includes JavaScript, Node.js for
            server-side functionality, Express.js for smooth routing, and MySQL
            for robust database management. This project showcases a seamless
            integration of frontend and backend technologies, providing a
            user-friendly interface for tracking and manipulating inventory
            within the automotive retail sector.
          </p>
          <div className='portfolioItemLinks'>
            <a
              href='https://vehicle-management-system-7d99e6ab9a87.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
            <img
              src={githubLogo}
              alt='GitHub'
              className='githubLogo'
              onClick={() =>
                openGithub(
                  'https://github.com/pmcclelland11/Vehicle-Management-System'
                )
              }
            />
          </div>
        </div>

        <div className='portfolioItem'>
          <img src={movieKnight} alt='Movie Knight' className='projectImg' />
          <h3>Movie Knight</h3>
          <p>
            The Movie Knight project is an innovative web application that
            allows users to search for and explore detailed information about
            movies effortlessly. Leveraging the power of The Movie Database
            (TMDB) and IMDb APIs, users can enter the movie's title and access
            relevant details, including release date, movie poster, actors, and
            plot description. The project exemplifies a professional and
            polished implementation, utilizing HTML, CSS, JavaScript, and
            various libraries, ensuring responsiveness and a captivating UI
            design.
          </p>
          <div className='portfolioItemLinks'>
            <a
              href='https://btbautista31.github.io/movie_knight/'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
            <img
              src={githubLogo}
              alt='GitHub'
              className='githubLogo'
              onClick={() =>
                openGithub('https://github.com/btbautista31/movie_knight')
              }
            />
          </div>
        </div>
      </div>
      <h3 className='moreProjects'>More Projects coming soon..</h3>
      <br></br>
      <br></br>
    </section>
  );
};

export default Portfolio;
