import Product from '../Product'
import { Container, List, Titulo } from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ title, background }: Props) => {
  return (
    <Container>
      <div className="container">
        <Titulo>{title}</Titulo>
        <List>
          <Product />
          <Product />
          <Product />
          <Product />
        </List>
      </div>
    </Container>
  )
}

export default ProductList
