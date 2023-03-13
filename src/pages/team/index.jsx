import Header from '../../components/Header'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'
import Title from '../../components/Title'

import { getDataCharacters } from '../../lib/fetchCharacters'

export async function getStaticProps() {
  const characters = await getDataCharacters('name&image')
  .then((data) => {
    if (!data || data.error) {
      return []
    }

    return data
  })

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
    {characters.length > 0 && <Cards characters={characters} />}
    <Footer />
  </>
)

export default Characters
