import Layout from '../components/Layout';
import Background from './background';
import { smText, bgText, hr } from '../styles.module.css'
import SocialMedia from '../components/social_media';

const Index = () => (
  <Layout>
      <Background/>
    <div>
      <div className={bgText}>Jillian Gibson</div>
      <hr className={hr}></hr>
      <div className={smText}>Software Engineer</div>
    </div>
    <SocialMedia/>
  </Layout>
  
);

export default Index;