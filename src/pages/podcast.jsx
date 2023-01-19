import Header from '../components/Header'
import Footer from '../components/Footer'

import { Container } from '../styles/pages/podcast'

import loadEpisodes from '../lib/episodes'
import { useState } from 'react'

const Podcast = () => {
  const [isEpisode, setEpisode] = useState('')

  const getEpisode = (link) => setEpisode(link)

  return (
    <>
      <Header title="Podcast" />
      <Container>
        <h1>Listen to our podcast</h1>

        <ul>
          {loadEpisodes().map((episode) => (
            <li key={episode.title} onClick={() => getEpisode(episode.link)}>
              <h2>{episode.title}</h2>
              {isEpisode && episode.link === isEpisode && (
                <iframe
                  src={`https://open.spotify.com/embed/episode/${episode.link}?utm_source=generator&theme=0`}
                  width={'100%'}
                  title={episode.title}
                  allowFullScreen=""
                  allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              )}
            </li>
          ))}
        </ul>
      </Container>
      <Footer />
    </>
  )
}

export default Podcast
