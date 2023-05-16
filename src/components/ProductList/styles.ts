import styled from 'styled-components'
import { Props } from '.'
import { breakPoints, cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'gray' ? cores.cinza : cores.preta};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'gray' ? cores.preta : cores.cinza};
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // column-gap: 24px;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breakPoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
