import { useState } from 'react'
import Header from '../components/Header'
import { Home, Fade } from '../styles/pages/home'

const Index = () => {
  const [isVideo, setVideo] = useState(true)

  const handleVideo = () => setVideo(!isVideo)

  return (
    <Home>
      <Header title="Home" />
      <h2>Limitless paper in a paper World</h2>
      <Fade onClick={handleVideo} video={isVideo}>
        {isVideo && (
          <iframe
            src="https://www.youtube.com/embed/e26dGMGdWQ8?controls=0"
            title="Dunder Mifflin Intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          />
        )}
      </Fade>
    </Home>
  )
}

export default Index
