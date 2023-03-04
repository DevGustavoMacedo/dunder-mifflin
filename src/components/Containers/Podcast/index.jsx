import * as S from './styled'

import Title from '../../Title'

const Podcast = ({ episodes, isEpisode, setEpisode }) => (
  <S.Container>
    <Title text={'Listen to our podcast'} />

    <ul>
      {episodes.reverse().map((episode) => (
        <li key={episode.title} onClick={() => setEpisode(episode.link)}>
          <h2>{episode.title}</h2>
          <h3>
            {' '}
            <span>
              Season {episode.episode[0]}, Episode {episode.episode[1]}
            </span>
          </h3>
          {isEpisode && episode.link === isEpisode && (
            <iframe
              src={episode.link}
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
  </S.Container>
)

export default Podcast
