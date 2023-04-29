class Game {
  title: string
  description: string
  system: string
  category: string
  image: string
  id: number
  infos: string[]

  constructor(
    title: string,
    description: string,
    system: string,
    category: string,
    image: string,
    id: number,
    infos: string[]
  ) {
    this.title = title
    this.description = description
    this.system = system
    this.category = category
    this.image = image
    this.id = id
    this.infos = infos
  }
}

export default Game
