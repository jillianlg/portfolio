import Image from 'next/image'
// import Link from 'next/link'; 
import { inLineIcon, icon } from '../styles.module.css';

const SocialMedia = () => (
  <div className={inLineIcon}>
    <div className={icon}>
      <a href="https://github.com/jillianlg">
        <Image
        alt="github icon"
        src="/assets/github.png"
        layout="intrinsic"
        width={512}
        height={512}
        />
      </a>
    </div>
    <div className={icon}>
      <a href="https://www.linkedin.com/in/jillianlgibson/">
        <Image
          alt="linkedin icon"
          src="/assets/linkedin.png"
          layout="intrinsic"
          width={512}
          height={512}
          />
      </a>
    </div>
    <div className={icon}>
      <a href="mailto:jillian.l.gibson@gmail.com">
        <Image
        alt="email icon"
        src="/assets/email.png"
        layout="intrinsic"
        width={512}
        height={512}
        />
      </a>
    </div>
  </div>
)

export default SocialMedia