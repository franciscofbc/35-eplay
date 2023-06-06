import ProductList from '../../components/ProductList'

import {
  useGetSimulationGamesQuery,
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: acao, isLoading: isLoadingAcao } = useGetActionGamesQuery()
  const { data: esportes, isLoading: isLoadingEsportes } =
    useGetSportGamesQuery()
  const { data: RPG, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: luta, isLoading: isLoadingLuta } = useGetFightGamesQuery()
  const { data: simulacao, isLoading: isLoadingSimulacao } =
    useGetSimulationGamesQuery()

  return (
    <>
      <ProductList
        title="Ação"
        background="black"
        games={acao}
        id="acao"
        isLoading={isLoadingAcao}
      />
      <ProductList
        title="Esportes"
        background="gray"
        games={esportes}
        id="esportes"
        isLoading={isLoadingEsportes}
      />
      <ProductList
        title="RPG"
        background="black"
        games={RPG}
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductList
        title="Luta"
        background="gray"
        games={luta}
        id="luta"
        isLoading={isLoadingLuta}
      />
      <ProductList
        title="Simulacao"
        background="black"
        games={simulacao}
        id="simulacao"
        isLoading={isLoadingSimulacao}
      />
    </>
  )
}

export default Categories
