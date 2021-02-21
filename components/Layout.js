import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>Portfolio</title>
      <link rel="stylesheet"
      href="https://bootswatch.com/4/solar/bootstrap.min.css"/>
    </Head>
    <Navbar/>
    <div >
      {props.children}
    </div>
  </div>

);
export default Layout;