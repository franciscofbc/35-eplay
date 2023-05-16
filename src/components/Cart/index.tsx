import Button from '../Button'

import { CartContainer, Overlay, Prices, Quantity, SideBar } from './styles'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <SideBar>
        <ul>
          <li>
            <h3>nome do jogo</h3>
          </li>
        </ul>
        <Quantity>2 jogo(s) no carrinho</Quantity>
        <Prices>
          Total de R$ 381,80 <span>em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
