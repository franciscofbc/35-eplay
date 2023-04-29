import Product from '../Product'
import { Container, List, Titulo } from './styles'
import Game from '../../models/Game'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductList = ({ title, background, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Titulo>{title}</Titulo>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              title={game.title}
              description={game.description}
              system={game.system}
              category={game.category}
              image={game.image}
              infos={game.infos}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
