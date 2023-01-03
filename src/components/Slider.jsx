import Image from 'next/image'
import { useRef, useState } from 'react'
import { Container, Carousel, Slide, Button } from '../styles/components/slider'

const slides = [
  {
    path: '/slides/1.jpg',
    alt: 'Christimas',
    width: 1170,
    height: 720,
  },
  {
    path: '/slides/4.jpg',
    alt: 'Jim and Dwight',
    width: 1232,
    height: 720,
  },
  {
    path: '/slides/6.jpg',
    alt: 'Kill Michael',
    width: 1147,
    height: 720,
  },
  {
    path: '/slides/3.jpg',
    alt: 'Michael Tots',
    width: 1233,
    height: 720,
  },
  {
    path: '/slides/2.jpg',
    alt: 'Michael Scott and Jim Halpert',
    width: 1281,
    height: 720,
  },
  {
    path: '/slides/5.jpg',
    alt: 'Daryl and others',
    width: 1280,
    height: 720,
  },
]

function Slider() {
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
    <Container>
      <Button disabled={isButton <= 0 ? true : false} onClick={handleLeftClick}>
        <Image
          src="/icons/arrow-left.svg"
          alt="Scroll Left"
          height={64}
          width={64}
        />
      </Button>
      <Carousel ref={carousel}>
        {slides.map((slide, index) => (
          <Slide key={slide.alt}>
            <Image src={slide.path} alt={slide.alt} width={slide.width} height={slide.height} priority={index === 0 ? true : false} />
          </Slide>
        ))}
      </Carousel>

      <Button  disabled={isButton >= 5 ? true : false} onClick={handleRightClick}>
        <Image
          src="/icons/arrow-right.svg"
          alt="Scroll Right"
          height={64}
          width={64}
        />
      </Button>
    </Container>
  )
}

export default Slider
