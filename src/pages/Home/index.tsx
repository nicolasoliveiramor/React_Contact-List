import { BotaoAdicionar } from '../../components/BotaoAdicionar'
import { FilterHeaderContainer } from '../../containers/FilterHeaderContainer'
import { HeaderContainer } from '../../containers/HeaderContainer'
import { MainListContainer } from '../../containers/MainListContainer'

export const Home = () => (
  <>
    <HeaderContainer />
    <FilterHeaderContainer />
    <MainListContainer />
    <BotaoAdicionar />
  </>
)
