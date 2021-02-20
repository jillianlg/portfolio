import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link'; 
import { resumeBackground, resumeDownload, resume, resumePages } from '../styles.module.css';

const Resume = () => (
  <section className={resumeBackground} >
    <Layout>
        <section className={resumeDownload}>
          <Link href="../2021JGibson_Resume_2pg.pdf">
            <p>Download</p>
          </Link>
        </section>
      <section className={resume}>
        <div className={resumePages}>
          <Image
              alt="resume-page-2"
              src="/resume-page1.png"
              layout="intrinsic"
              width={700}
              height={850}
              />
        </div>
        <div className={resumePages}>
          <Image
              alt="resume-page-2"
              src="/resume-page2.png"
              layout="intrinsic"
              width={700}
              height={850}
              />
        </div>
      </section>
    </Layout>
  </section>
  );
  
  export default Resume;