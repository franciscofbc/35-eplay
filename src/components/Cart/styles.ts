import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  // content: '';
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // display: flex;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.cinza};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  // display: flex;
  // flex-direction: column;
  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.branca};
    text-align: center;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};
  margin-top: 32px;
  margin-bottom: 16px;
`
export const CartItem = styled.li`
  display: flex;
  // align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid ${cores.cinzaClaro};
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
    // margin-bottom: 16px;
  }

  h3 {
    font-weight: bold;
    color: ${cores.branca};
    font-size: 16px;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.branca};
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    // align-self: flex-end;

    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;

    position: absolute;
    top: 8px;
    right: 0;
  }
`
