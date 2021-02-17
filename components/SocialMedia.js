import Image from 'next/image'
import Link from 'next/link'; 
import { inLineIcon, icon } from '../styles.module.css';

const SocialMedia = () => (
  <div className={inLineIcon}>
    <div className={icon}>
      <Link href="https://github.com/jillianlg">
        <Image
        alt="github icon"
        src="/github.png"
        layout="intrinsic"
        width={512}
        height={512}
        />
      </Link>
    </div>
    <div className={icon}>
      <Link href="https://www.linkedin.com/in/jillianlgibson/">
        <Image
          alt="linkedIn icon"
          src="/linkedIn.png"
          layout="intrinsic"
          width={512}
          height={512}
          />
      </Link>
    </div>
    <div className={icon}>
      <a href="mailto:jillian.l.gibson@gamil.com">
        <Image
        alt="email icon"
        src="/email.png"
        layout="intrinsic"
        width={512}
        height={512}
        />
      </a>
    </div>
  </div>
)

export default SocialMedia