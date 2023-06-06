import { parseToBrl } from '../../utils'

import Loader from '../Loader'
import Product from '../Product'

import { Container, List, Titulo } from './styles'
// import Game from '../../models/Game'

export type Props = {
  title: string
  background: 'gray' | 'black'
  // games: Game[]
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductList = ({ title, background, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }
    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <Titulo>{title}</Titulo>
        <List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  title={game.name}
                  description={game.description}
                  system={game.details.system}
                  category={game.details.category}
                  image={game.media.thumbnail}
                  infos={getGameTags(game)}
                  id={game.id}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
