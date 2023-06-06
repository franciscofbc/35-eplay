import styled from 'styled-components'
import { breakPoints, cores } from '../../styles'

export const Links = styled.ul`
  display: flex;

  @media (max-width: ${breakPoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a,
  span {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  h1 {
    line-height: 0; //h1 tem por padrao
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .imgNavDesk {
    display: flex;
    align-items: center;
  }

  .navDesk {
    margin-left: 40px;
    @media (max-width: ${breakPoints.tablet}) {
      display: none;
    }
  }
`
export const NavMobile = styled.nav`
  &.is-open {
    display: block;
  }

  &.is-closed {
    display: none;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakPoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`
export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    span {
      display: none;
    }
  }
`
export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${cores.branca};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakPoints.tablet}) {
    display: none;
  }
`
