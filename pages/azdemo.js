
// import ProductDemo from '../public/video/alcheZoomy_product_demo.mp4';
import ReactPlayer from 'react-player';
import Layout from '../components/Layout';
import { azDemoPage, azDemoVideo } from '../styles.module.css';

const azDemo = () => (
    <Layout>
      <div className={azDemoPage}>
        <section className={azDemoVideo}>
          <ReactPlayer 
            url="https://youtu.be/mxsN1LDVO1Q"
            controls
            // src={ProductDemo}
            layout="intrinsic"
            width={840}
            height={560}
            // playing={ isPlaying }
          />
        </section>
        <section className={azDemoVideo}>
          <ReactPlayer 
            url="https://youtu.be/bYmoMhTtZMU"
            controls
            // src={ProductDemo}
            layout="intrinsic"
            width={840}
            height={560}
          />
        </section>
      </div>
    </Layout>
);

export default azDemo