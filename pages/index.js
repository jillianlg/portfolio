import Layout from '../components/Layout';
import Background from './background';
import { smText, bgText, hr, center } from '../styles.module.css'
import SocialMedia from '../components/social_media';

const Index = () => (
  <Layout>
      <Background/>
    <div className={center}>
      <div className={bgText}>Jillian Gibson</div>
      <hr className={hr}></hr>
      <div className={smText}>Full-Stack Software Engineer</div>
      <SocialMedia/>
    </div>
  </Layout>
  
);

export default Index;