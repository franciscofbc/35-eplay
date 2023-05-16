import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
// import residentEvil from '../../assets/images/resident.png'
import { Game } from '../Home'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  // const [game, setGame] = useState<Game>()

  const { data: game } = useGetGameQuery(id!)

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setGame(data))
  // }, [id])

  if (!game) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <Hero game={game} />
      <Section background="black" title="Sobre o jogo">
        <p>{game.description}</p>
      </Section>
      <Section background="gray" title="Mais detalhes">
        <p>
          <b>Plataforma: </b>
          {game.details.system}
          <br />
          <b>Desenvolvedor: </b>
          {game.details.developer}
          <br />
          <b>Editora: </b>
          {game.details.publisher}
          <br />
          <b>Idiomas: </b>O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
