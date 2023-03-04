import { getAllDataCharacter, getOneDataCharacters } from '../../lib/fetchCharacters'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'

export async function getStaticPaths() {
  const paths = await getOneDataCharacters('name').then((data) =>
    data.map((item) => ({ params: { name: item.name.replace(/\s+/g, '') } }))
  )

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const character = await getAllDataCharacter(context.params.name)

  return {
    props: {
      character,
    },
  }
}

const Character = ({ character }) => (
  <>
    <Header title={character.name} />
    <Card character={character} />
    <Footer />
  </>
)

export default Character
