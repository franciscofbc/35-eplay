import styled from 'styled-components'
import { breakPoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  display: block;
  height: 480px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  // background-size: cover;
  background-size: 100%;

  @media (max-width: ${breakPoints.tablet}) {
    background-size: cover;
  }

  padding-top: 16px;

  position: relative;
  &::after {
    position: absolute;
    background-color: ${cores.preta};
    // opacity: 56%;
    opacity: 0.56;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    content: '';
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preta};
  // width: 280px;
  max-width: 280px;
  font-weight: bold;
  h2 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
