import Image from 'next/image'
import Header from '../../Header'

import * as S from './styled'

const Home = () => (
  <S.Container>
    <Image
      src="/assets/background.webp"
      alt="Background"
      objectFit="cover"
      layout="fill"
      objectPosition='center 2rem'
      priority={true}
    />
    <Header title="Home" />
    <h2>Limitless paper in a paper World</h2>
  </S.Container>
)

export default Home
