import Layout from '../components/Layout';
import Image from 'next/image';
import { resume, resumePage } from '../styles.module.css';

const Resume = () => (
  <Layout>
    <div className={resume}>
      <div className={resumePage}>
        <Image
            alt="resume-page-2"
            src="/resume-page1.png"
            layout="intrinsic"
            width={700}
            height={850}
            />
      </div>
      <div className={resumePage}>
        <Image
            alt="resume-page-2"
            src="/resume-page2.png"
            layout="intrinsic"
            width={700}
            height={850}
            />
      </div>
    </div>
  </Layout>
  );
  
  export default Resume;