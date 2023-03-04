import Image from 'next/image'
import Link from 'next/link'

import * as S from './styled'

const Cards = ({ characters }) => (
  <S.Container>
    {characters.map((character) => (
      <S.Wrapper key={character.name}>
        <S.Card>
          <Image
            src={character.image}
            alt={character.name}
            width={700}
            height={'100%'}
            quality={100}
          />
          <div>
            <h3>{character.name}</h3>
            <Link href={'/team/' + character.name.replace(/\s+/g, '')} passHref>
              <span>
                <Image src={'/icons/book.svg'} alt={'More info'} width={40} height={40} />
              </span>
            </Link>
          </div>
        </S.Card>
      </S.Wrapper>
    ))}
  </S.Container>
)

export default Cards
