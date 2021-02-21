import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link'; 
import { projectPage, projectImageGroup, projectImage, projectLinks, projectLinksGitHub, projectLinksSite, projectLang, projectText } from '../styles.module.css';

const Projects = () => (
  <Layout>
    <div className={projectPage}>
      {/* <h4>Search</h4> */}
      <div className={projectImageGroup}>
        <section className={projectImage}>
          <Image
            alt="beHuman Logo"
            src="/assets/beHumanLogo.png"
            layout="intrinsic"
            width={312}
            height={300}
          />
          <div className={projectLinks}>
            <div className={projectLinksGitHub}>
              <Link href="https://github.com/alchemy-be-human">
                <p>GitHub</p>
              </Link>
            </div>
            <div className={projectLinksSite}>
            <Link href="https://marketplace.visualstudio.com/items?itemName=not-bot.be-human&ssr=false#overview">
              <p>Site</p>
            </Link>
            </div>
          </div>
          <div className={projectText}>
          <span className={projectLang}>Vanilla JavaScript | Node | Express | PostgreSQL | QUnit | Heroku | Nodemailer</span>
            <p>Over a five-day sprint, my team and I delved into the VS Code documentation to build beHuman, a VSCode extension that reminds users to make healthy choices throughout their workday with both movement and mindful tips.</p>
            <p>While I supported the team in several areas, my primary role was setting up administrative access to maintain the SQL database. I established protected authorization routes using JWT, bcrypt, and cookies. Learned Nodemailer and implemented it in a private frontend admin route to auto- generate an email with a link and temporary password.</p>
          </div>
        </section>
        <section className={projectImage}>
          <Image
            alt="AlcheZoomy Logo"
            src="/assets/AlcheZoomy_Logo.png"
            layout="intrinsic"
            width={312}
            height={300}
          />
          <div className={projectLinks}>
            <div className={projectLinksGitHub}>
              <Link href="https://github.com/Alchezoomy">
                <p>GitHub</p>
              </Link>
            </div>
            <div className={projectLinksSite}>
            <Link href="/azdemo">
              <p>Demo</p>
            </Link>
            </div>
          </div>
          <div className={projectText}>
          <span className={projectLang}>React | Node | Express | PostgreSQL | Jest | Heroku</span>
            <p>A full-stack application utilizing the Zoom API that allows users to view the video, explore the chat log, and search transcript data from various published Alchemy zoom meetings. The user can favorite an entire meeting or bookmark a specific timestamp for future reference.</p>
            <p>My primary role was to oversee testing using the TDD method in Jest and build out the SQL database. I also drew on my project management background by stepping into the scrum master roll to keep the team organized and focused, which allowed us to meet our MVP ahead of schedule. Designed and built remotely over a four-day sprint for the Alchemy Code Lab community.</p>
          </div>
        </section>
        <section className={projectImage}>
          <Image
            alt="otNuevo Logo"
            src="/assets/otNuevo.png"
            layout="intrinsic"
            width={312}
            height={300}
          />
          <div className={projectLinks}>
            <div className={projectLinksGitHub}>
              <Link href="https://github.com/Oregon-Trail-2020/ot-nuevo">
                <p>GitHub</p>
              </Link>
            </div>
            <div className={projectLinksSite}>
            <Link href="https://oregon-trail-2020.github.io/ot-nuevo/">
              <p>Site</p>
            </Link>
            </div>
          </div>
          <div className={projectText}>
          <span className={projectLang}>Vanilla JavaScript | HTML | localStorage | JSON | CSS</span>
            <p>While working remotely, my team and I recreated a modern version of the original 1985 Oregon Trail computer game over a four-day sprint. In OT Nuevo, the player assumes a driver’s role and is faced with a series of choices as they relocate from San Diego, California to Portland, Oregon.</p>
            <p>I contributed to all aspects of this project, I played a lead role in building the code that utilized the URL.searchParams function, localStorage, and looped through multiple nested arrays to update state and append current data to the UI.</p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
  );
  
  export default Projects;
  