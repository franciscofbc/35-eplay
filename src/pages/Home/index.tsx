import { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
// import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

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

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  // const [promocoes, setPromocoes] = useState<Game[]>([])
  // const [emBreve, setEmBreve] = useState<Game[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
  //     .then((res) => res.json())
  //     .then((data) => setPromocoes(data))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
  //     .then((res) => res.json())
  //     .then((data) => setEmBreve(data))
  // }, [])

  const { data: promocoes } = useGetOnSaleQuery()
  const { data: emBreve } = useGetSoonQuery()

  if (promocoes && emBreve) {
    return (
      <>
        <Banner />
        <ProductList
          title="Promoções"
          background="gray"
          games={promocoes}
          id="promocoes"
        />
        <ProductList
          title="Em breve"
          background="black"
          games={emBreve}
          id="em-breve"
        />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Home
