import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: promocoes, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: emBreve, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductList
        title="Promoções"
        background="gray"
        games={promocoes}
        id="promocoes"
        isLoading={isLoadingSale}
      />
      <ProductList
        title="Em breve"
        background="black"
        games={emBreve}
        id="em-breve"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
