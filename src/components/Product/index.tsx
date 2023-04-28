import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="//placehold.it/222x250" alt="" />
      <Titulo>Nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>SO</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        doloremque maxime mollitia excepturi, placeat consequatur veritatis
        repudiandae totam. Sapiente ipsam repudiandae voluptates corporis
        similique impedit eos ad excepturi, ipsa fugiat.
      </Descricao>
    </Card>
  )
}

export default Product
