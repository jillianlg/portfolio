import ReactPlayer from 'react-player';
import Layout from '../components/Layout';
import { azDemoPage, azDemoVideo, azDemoText } from '../styles.module.css';

const azDemo = () => (
    <Layout>
      <div className={azDemoPage}>
          <p className={azDemoText}>Product Demo</p>
        <section className={azDemoVideo}>
          <ReactPlayer 
            url="/video/alcheZoomy_product_demo.mp4"
            controls
            controlsList="nodownload"
            layout="intrinsic"
            width={640}
            height={270}
            // playing={ isPlaying }
          />
        </section>
        <p className={azDemoText}>Technical Presentation</p>
        <section className={azDemoVideo}>
          <ReactPlayer 
            url="https://youtu.be/bYmoMhTtZMU"
            controls
            layout="intrinsic"
            width={640}
            height={270}
          />
        </section>
      </div>
    </Layout>
);

export default azDemo