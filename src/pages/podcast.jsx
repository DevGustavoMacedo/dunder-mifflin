import { useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import PodcastContainer from '../components/Containers/Podcast'

import { getAllEpisodes } from '../lib/fetchPodcast'

export async function getStaticProps() {
  const episodes = await getAllEpisodes()
  .then((data) => {
    if (!data || data.error) {
      return []
    }

    return data
  })
  
  return {
    props: {
      episodes,
    },
  }
}

const Podcast = ({ episodes }) => {
  const [isEpisode, setEpisode] = useState('')

  return (
    <>
      <Header title="Podcast" />
      <PodcastContainer 
        isEpisode={isEpisode} 
        setEpisode={setEpisode} 
        episodes={episodes} 
      />
      <Footer />
    </>
  )
}

export default Podcast
