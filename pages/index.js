import Layout from '../components/Layout';
import Background from './background';
import { smText, bgText, hr } from '../styles.module.css'

const Index = () => (
  <Layout>
    <div>
      <Background/>
      <h1 className={bgText}>Jillian Gibson</h1>
      <hr className={hr}></hr>
      <p className={smText}>Software Engineer</p>
    </div>
  </Layout>
  
);

export default Index;