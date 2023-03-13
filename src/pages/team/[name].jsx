import { getAllDataCharacter, getDataCharacters } from '../../lib/fetchCharacters'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'

export async function getStaticPaths() {
  const paths = await getDataCharacters('name').then((data) => {
    if (!data || data.error) {
      return []
    }

    return data.map((item) => ({ params: { name: item.name.replace(/\s+/g, '') } }))
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const name = context.params.name

  const character = await getAllDataCharacter(name).then((data) => {
    if (!data || data.error) {
      return []
    }

    return data
  })

  return {
    props: {
      character,
    },
  }
}

const Character = ({ character }) => (
  <>
    <Header title={character.name} />
    {Object.keys(character).length > 0 && <Card character={character} />}
    <Footer />
  </>
)

export default Character
