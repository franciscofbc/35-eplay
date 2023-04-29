import ProductList from '../../components/ProductList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Residente Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ficção',
    description: 'Description...',
    title: 'Zelda',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 3,
    category: 'Ação',
    description: 'Description...',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  },
  {
    id: 4,
    category: 'Terror',
    description: 'Description...',
    title: 'Diablo',
    system: 'Windows',
    infos: ['15%', 'R$ 150,00'],
    image: diablo
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Residente Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 6,
    category: 'Ficção',
    description: 'Description...',
    title: 'Zelda',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 7,
    category: 'Ação',
    description: 'Description...',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  },
  {
    id: 8,
    category: 'Terror',
    description: 'Description...',
    title: 'Diablo',
    system: 'Windows',
    infos: ['15%', 'R$ 150,00'],
    image: diablo
  }
]

const Categories = () => {
  return (
    <>
      <ProductList title="RPG" background="gray" games={promocoes} />
      <ProductList title="Ação" background="black" games={emBreve} />
      <ProductList title="Aventura" background="gray" games={promocoes} />
      <ProductList title="FPS" background="black" games={emBreve} />
    </>
  )
}

export default Categories
