import Layout from '../components/Layout';
import Image from 'next/image';
import { aboutImage, aboutPage, aboutText } from '../styles.module.css';

const About = () => (
  <Layout>
    <div className={aboutPage}>
      <div className={aboutImage}>
        <Image
          alt="climbing-quote icon"
          src="/climbing-quote.png"
          layout="intrinsic"
          width={700}
          height={400}
          />
      </div>
      <h4><strong>Everyone has a story.</strong></h4>
      <div className={aboutText}>
        <p>If you take a moment to listen, people will tell you what they need or want, what makes them tick, why they are passionate about their activities, projects, or the brands to which they subscribe. In listening, one can glean an understanding of how to help their teammates or clients. This awareness has allowed me to enhance customer service, steer production, and provide an environment that puts clients and teammates at ease. This awareness, along with my diverse background, makes me a better programmer.</p>
        <p>Of course, I geek out over whiteboards, problem-solving, strategizing, and well-organized budget projections. But my intrigue with social psychology, my strong listening skills, and a natural ability to lead has been a guiding force in my success with varying industries.</p>
        <p>Over the last twenty-three years, I have provided medical care in the US Navy, directed sensory-integrated Theater, managed a 500-seat Performing Arts Center with a staff of 20 technicians, and oversaw cross-functional teams in the pre-planning and implementation of small C-level summits to large (65k) conferences. Assisting in the development of the Opus Event App, where I contributed to the UX and back-end development and bridged the gap between the non-technical stakeholders/beta testers and the developers, is what sparked my interest in learning more about programming.</p>
        <p>I have climbed up the career tree by growing my current skill sets and continuously seeking learning opportunities. Transitioning to a career in internet technology as a software engineer was the logical next step!</p>
        <p>As a Full Stack-JavaScript developer, I believe that efficient software design, clean code, quality documentation, teamwork, and constant learning are the keys to long-term success.</p>
      </div>
    </div>
  </Layout>
  );
  
  export default About;