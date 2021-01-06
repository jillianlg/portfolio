import Image from 'next/image'
import { inLineIcon, icon } from '../styles.module.css'

const SocialMedia = () => (
  <div className={inLineIcon}>
    <div className={icon}>
      <Image
      alt="github icon"
      src="/github.png"
      layout="intrinsic"
      width={512}
      height={512}
      />
    </div>
    <div className={icon}>
      <Image
        alt="linkedIn icon"
        src="/linkedIn.png"
        layout="intrinsic"
        width={512}
        height={512}
        />
    </div>
    <div className={icon}>
      <Image
      alt="email icon"
      src="/email.png"
      layout="intrinsic"
      width={512}
      height={512}
      />
    </div>
  </div>
)

export default SocialMedia