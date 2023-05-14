import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled(Link)`
  background-color: ${cores.cinza};
  padding: 8px;
  border-radius: 8px;
  position: relative;
  // margin-bottom: 16px;
  text-decoration: none;
  color: ${cores.branca};
  display: block;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
