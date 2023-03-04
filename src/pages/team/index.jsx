import Header from '../../components/Header'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'
import Title from '../../components/Title'

import { getOneDataCharacters } from '../../lib/fetchCharacters'

export async function getStaticProps() {
  const characters = await getOneDataCharacters('image')

  return {
    props: {
      characters,
    },
  }
}

const Characters = ({ characters }) => (
  <>
    <Header title="Team" />
    <Title text={'Our Team'} />
    <Cards characters={characters} />
    <Footer />
  </>
)

export default Characters
