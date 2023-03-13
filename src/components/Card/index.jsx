import Image from 'next/image'
import Link from 'next/link'

import Title from '../Title'

import * as S from './styled'

const Card = ({ character }) => (
  <S.Container>
    <S.Card>
      {}
      <div>
        <S.Back>
          <Link href={'/team/'}>❮</Link>
        </S.Back>
        <Title text={character.name} />

        <Image
          src={character.image}
          alt={character.name}
          width={700}
          height={'100%'}
          quality={100}
        />
      </div>
      <div>
        <div>
          <strong>Portrayed by: </strong>
          {character.portrayed}
        </div>
        <div>
          <strong>Initial brand: </strong>
          {character.brand}
        </div>
        <div>
          <strong>Staff: </strong>
          {character.staff}
        </div>

        <div>
          <strong>First episode: </strong>
          {character.firstEp}
        </div>
        <div>
          <strong>Seasons: </strong>
          {character.seasons.map((item) => (
            <span key={item}>{item} | </span>
          ))}
        </div>
        <div>
          <strong>Nicknames:</strong>
          <ul>
            {character.nicknames.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {character.quotes.length !== 0 && (
          <div>
            <strong>Quotes:</strong>
            <ul>
              {character.quotes.map((item, index) => (
                <li key={index}>
                  <q>{item}</q>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <strong>Trivia: </strong>
          {character.trivia}
        </div>
      </div>
    </S.Card>
  </S.Container>
)

export default Card
