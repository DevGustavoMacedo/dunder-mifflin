import { useRef, useState } from 'react'
import Image from 'next/image'

import * as S from './styled'

const slides = [
  {
    path: '/slides/3.webp',
    alt: 'Michael Tots',
    width: 1233,
    height: 720,
  },
  {
    path: '/slides/4.webp',
    alt: 'Jim and Dwight',
    width: 1232,
    height: 720,
  },
  {
    path: '/slides/1.webp',
    alt: 'Christimas',
    width: 1170,
    height: 720,
  },
  {
    path: '/slides/6.webp',
    alt: 'Kill Michael',
    width: 1147,
    height: 720,
  },
  {
    path: '/slides/2.webp',
    alt: 'Michael Scott and Jim Halpert',
    width: 1281,
    height: 720,
  },
  {
    path: '/slides/5.webp',
    alt: 'Daryl and others',
    width: 1280,
    height: 720,
  },
]

const Slider = () => {
  const carousel = useRef(null)
  const [isButton, setButton] = useState(0)

  const handleLeftClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
    setButton(prevState => prevState - 1)
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
    setButton(prevState => prevState + 1)
  }

  return (
    <S.Container>
      <S.Button disabled={isButton <= 0 ? true : false} onClick={handleLeftClick}>
        <Image
          src="/icons/arrow-left.svg"
          alt="Scroll Left"
          height={64}
          width={64}
        />
      </S.Button>
      <S.Carousel ref={carousel}>
        {slides.map((slide, index) => (
          <S.Slide key={slide.alt}>
            <Image src={slide.path} alt={slide.alt} width={slide.width} height={slide.height} priority={index === 0 ? true : false} />
          </S.Slide>
        ))}
      </S.Carousel>

      <S.Button  disabled={isButton >= 5 ? true : false} onClick={handleRightClick}>
        <Image
          src="/icons/arrow-right.svg"
          alt="Scroll Right"
          height={64}
          width={64}
        />
      </S.Button>
    </S.Container>
  )
}

export default Slider
