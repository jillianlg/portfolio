import Head from 'next/head';
import Navbar from './Navbar';
import { body } from '../styles.module.css'

const Layout = (props) => (
  <div>
    <Head>
      <title>Portfolio</title>
      <link rel="stylesheet"
      href="https://bootswatch.com/4/solar/bootstrap.min.css"/>
    </Head>
    <Navbar/>
    <div className={body}>
      {props.children}
    </div>
  </div>

);
export default Layout;