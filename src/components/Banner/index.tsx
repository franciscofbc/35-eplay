import { useEffect, useState } from 'react'
import { Imagem, Precos, Titulo } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { useGetFeaturedGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils'

const Banner = () => {
  // const [game, setGame] = useState<Game>()
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!isLoading) {
    // console.log(game)
  }

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
  //     .then((res) => res.json())
  //     .then((data) => setGame(data))
  // }, [])

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{parseToBrl(game?.prices.old)}</span>
            <br />
            por apenas {parseToBrl(game?.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game?.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
