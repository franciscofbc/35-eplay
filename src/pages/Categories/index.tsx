import { useState, useEffect } from 'react'
import ProductList from '../../components/ProductList'
// import Game from '../../models/Game'
// import resident from '../../assets/images/resident.png'
// import diablo from '../../assets/images/diablo.png'
// import starWars from '../../assets/images/star_wars.png'
// import zelda from '../../assets/images/zelda.png'

import { Game } from '../Home'
import {
  useGetSimulationGamesQuery,
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

// const promocoes: Game[] = [
//   {
//     id: 1,
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
//     title: 'Residente Evil 4',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250,00'],
//     image: resident
//   },
//   {
//     id: 2,
//     category: 'Ficção',
//     description: 'Description...',
//     title: 'Zelda',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250,00'],
//     image: zelda
//   },
//   {
//     id: 3,
//     category: 'Ação',
//     description: 'Description...',
//     title: 'Star Wars',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250,00'],
//     image: starWars
//   },
//   {
//     id: 4,
//     category: 'Terror',
//     description: 'Description...',
//     title: 'Diablo',
//     system: 'Windows',
//     infos: ['15%', 'R$ 150,00'],
//     image: diablo
//   }
// ]

// const emBreve: Game[] = [
//   {
//     id: 5,
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
//     title: 'Residente Evil 4',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250,00'],
//     image: resident
//   },
//   {
//     id: 6,
//     category: 'Ficção',
//     description: 'Description...',
//     title: 'Zelda',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250,00'],
//     image: zelda
//   },
//   {
//     id: 7,
//     category: 'Ação',
//     description: 'Description...',
//     title: 'Star Wars',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250,00'],
//     image: starWars
//   },
//   {
//     id: 8,
//     category: 'Terror',
//     description: 'Description...',
//     title: 'Diablo',
//     system: 'Windows',
//     infos: ['15%', 'R$ 150,00'],
//     image: diablo
//   }
// ]

const Categories = () => {
  // const [acao, setAcao] = useState<Game[]>([])
  // const [esportes, setEsportes] = useState<Game[]>([])
  // const [RPG, setRPG] = useState<Game[]>([])
  // const [luta, setLuta] = useState<Game[]>([])
  // const [simulacao, setSimulacao] = useState<Game[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
  //     .then((res) => res.json())
  //     .then((data) => setAcao(data))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
  //     .then((res) => res.json())
  //     .then((data) => setEsportes(data))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
  //     .then((res) => res.json())
  //     .then((data) => setRPG(data))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
  //     .then((res) => res.json())
  //     .then((data) => setLuta(data))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
  //     .then((res) => res.json())
  //     .then((data) => setSimulacao(data))
  // }, [])

  const { data: acao } = useGetActionGamesQuery()
  const { data: esportes } = useGetSportGamesQuery()
  const { data: RPG } = useGetRpgGamesQuery()
  const { data: luta } = useGetFightGamesQuery()
  const { data: simulacao } = useGetSimulationGamesQuery()

  if (acao && esportes && RPG && luta && simulacao) {
    return (
      <>
        <ProductList title="Ação" background="black" games={acao} id="acao" />
        <ProductList
          title="Esportes"
          background="gray"
          games={esportes}
          id="esportes"
        />
        <ProductList title="RPG" background="black" games={RPG} id="rpg" />
        <ProductList title="Luta" background="gray" games={luta} id="luta" />
        <ProductList
          title="Simulacao"
          background="black"
          games={simulacao}
          id="simulacao"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
