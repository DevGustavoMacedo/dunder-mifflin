import Image from 'next/image'
import Header from '../components/Header'
import { Home } from '../styles/pages/home'

const Index = () => (
  <Home>
    <Image
      src="/assets/background.webp"
      alt="Background"
      objectFit="cover"
      layout="fill"
      objectPosition='top'
      priority={true}
    />
    <Header title="Home" />
    <h2>Limitless paper in a paper World</h2>
  </Home>
)

export default Index
