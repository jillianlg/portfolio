import Image from 'next/image'
import { bgWrap } from '../styles.module.css'

const Background = () => (
  <div className={bgWrap}>
    <Image
      alt="cairn"
      src="/cairn2.jpg"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </div>
  
)

export default Background