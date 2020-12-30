import Layout from '../components/Layout';
import Background from './background';
import { smText, bgText, hr } from '../styles.module.css'

const Index = () => (
  <Layout>
    <div>
      <Background/>
      <div className={bgText}>Jillian Gibson</div>
      <hr className={hr}></hr>
      <div className={smText}>Software Engineer</div>
    </div>
  </Layout>
  
);

export default Index;