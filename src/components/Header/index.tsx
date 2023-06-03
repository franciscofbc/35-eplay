import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  const menu = () => {
    return (
      <S.Links>
        <S.LinkItem>
          <Link
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
            to="/categories"
          >
            Categorias
          </Link>
          {/* <a href="#">Categorias</a> */}
        </S.LinkItem>
        <S.LinkItem>
          <a href="#">Novidades</a>
        </S.LinkItem>
        <S.LinkItem>
          <a href="#">Promoções</a>
        </S.LinkItem>
      </S.Links>
    )
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span />
          <span />
          <span />
        </S.Hamburguer>
        <div className="imgNavDesk">
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <div className="navDesk">{menu()}</div>
        </div>
        <S.CartButton onClick={openCart}>
          {items.length} <span>- produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : 'is-closed'}>
        {menu()}
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
