import Image from 'next/image'
import { bgWrap } from '../styles.module.css'

const Background = () => (
  <div className={bgWrap}>
    <Image
      alt="cairn"
      src="/cairn2.jpg"
      layout="fill"
      // layout="responsive"
      objectFit="cover"
      quality={100}
      // width={5755}
      // height={3826}
    />
  </div>
  
)

export default Background