import './home.css';
import selfie from '../../assets/gradphoto.png';

const Home = () => {
  return (
    <section id='home'>
      <div className='homeContent'>
        <div>
          <h1>
            Hi, I'm <span className='name'>Patrick McClelland</span>!
          </h1>
          <img src={selfie} alt='grad photo' className='selfie' />
          <p>
            I'm a <span className='name'>full-stack web developer</span> with a
            passion for learning and creating. I have experience with Java, HTML, CSS,
            JavaScript, React, Node.js, Express, MongoDB, and more. I'm
            currently looking for a full-time position as a web developer.
          </p>
          <br></br>
          <h3>
            <span className='name'>Please enjoy my Portfolio!</span>
          </h3>
          <br></br>
          <br></br>
        </div>
      </div>
    </section>
  );
};

export default Home;
