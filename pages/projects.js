import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link'; 
import { projectPage, projectImageGroup, projectImage, projectLinks, projectLinksGitHub, projectLinksSite, projectText } from '../styles.module.css';

const Projects = () => (
  <Layout>
    <div className={projectPage}>
      <h4>Search</h4>
      <div className={projectImageGroup}>
        <div className={projectImage}>
          <Image
            alt="beHuman Logo"
            src="/beHumanLogo.png"
            layout="intrinsic"
            width={312}
            height={300}
          />
          <div className={projectLinks}>
            <div className={projectLinksGitHub}>
              <Link href="https://github.com/jillianlg">
                <p>GitHub</p>
              </Link>
            </div>
            <div className={projectLinksSite}>
            <Link href="https://github.com/jillianlg">
              <p>Site</p>
            </Link>
            </div>
          </div>
          <div className={projectText}>
            <p>blah blah blah blah blah blah blah blah blah blah blah blah</p>
            <p>blah blah blah</p>
          </div>
       </div>
        <div className={projectImage}>
          <Image
            alt="AlcheZoomy Logo"
            src="/AlcheZoomy_Logo.png"
            layout="intrinsic"
            width={312}
            height={300}
          />
          <div className={projectLinks}>
            <div className={projectLinksGitHub}>
              <Link href="https://github.com/jillianlg">
                <p>GitHub</p>
              </Link>
            </div>
            <div className={projectLinksSite}>
            <Link href="https://github.com/jillianlg">
              <p>Site</p>
            </Link>
            </div>
          </div>
          <div className={projectText}>
            <p>blah blah blah blah blah blah blah blah blah blah blah blah</p>
            <p>blah blah blah</p>
          </div>
        </div>
        <div className={projectImage}>
          <Image
            alt="otNuevo Logo"
            src="/otNuevo.png"
            layout="intrinsic"
            width={312}
            height={300}
          />
          <div className={projectLinks}>
            <div className={projectLinksGitHub}>
              <Link href="https://github.com/jillianlg">
                <p>GitHub</p>
              </Link>
            </div>
            <div className={projectLinksSite}>
            <Link href="https://github.com/jillianlg">
              <p>Site</p>
            </Link>
            </div>
          </div>
          <div className={projectText}>
            <p>blah blah blah blah blah blah blah blah blah blah blah blah</p>
            <p>blah blah blah</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  );
  
  export default Projects;
  