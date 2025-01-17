import styled from 'styled-components'
import { cores } from '../../styles'

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-color: ${cores.preta};
  // opacity: 0.73;
  background-color: rgba(0, 0, 0, 0.73);

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    // width: 40px;
    // height: 40px;
    // border: none;
  }

  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Items = styled.ul`
  display: flex;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 16px;
`

export const Item = styled.li`
  // margin-right: 16px;
  cursor: zoom-in;

  > img {
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  position: relative;

  &:hover {
    ${Action} {
      opacity: 1;
      // cursor: pointer;
      transition: opacity 0.5s ease;
    }
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    img {
      cursor: pointer;
      height: 16px;
      width: 16px;
    }

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
    // border: none;
  }
`
