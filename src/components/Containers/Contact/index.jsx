import Image from 'next/image'

import Title from '../../Title'

import * as S from './styled'

const Contact = () => (
  <S.Container>
    <Title text={'Dunder Mifflin, this is Pam!'} />
    <Image
      src="/assets/contact.webp"
      alt="Dunder Mifflin, this is Pam!"
      width={1000}
      height={570}
      priority={true}
    />
    <figcaption>
      sorry, Michael is in jail...
      <Image
        src="/icons/prision-mike.webp"
        alt="Prision Mike"
        width={600}
        height={500}
        quality={100}
      />
    </figcaption>
  </S.Container>
)

export default Contact
