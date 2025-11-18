import Layout from '../components/Layout';
import Background from '../components/Background';
import { smText, bgText, hr, center } from '../styles.module.css'
import SocialMedia from '../components/SocialMedia';

const Index = () => (
  <Layout>
      <Background/>
    <section className={center}>
      <h1 className={bgText}>The Embodied Knot</h1>
      <hr className={hr}></hr>
      <div className={smText}>Full-Stack Software Engineer</div>
      <SocialMedia/>
    </section>
  </Layout>
);

export default Index;