import Layout from '../components/Layout';
import Background from '../components/Background';
import { smText, bgText, hr, center } from '../styles.module.css'
import SocialMedia from '../components/SocialMedia';

const Index = () => (
  <Layout>
      <Background/>
    <section className={center}>
      <div className={bgText}>Jillian Gibson</div>
      <hr className={hr}></hr>
      <div className={smText}>Full-Stack Software Engineer</div>
      <SocialMedia/>
    </section>
  </Layout>
);

export default Index;