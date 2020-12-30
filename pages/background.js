import Image from 'next/image'
import { bgWrap } from '../styles.module.css'

const Background = () => (
  <div className={bgWrap}>
    <Image
      alt="cairn"
      src="/cairn.jpg"
      layout="responsive"
      objectFit="cover"
      quality={100}
    // src="/cairn.jpg"
    // alt="cairn"
    width={5755}
    height={3826}
    />
  </div>
  
)

export default Background