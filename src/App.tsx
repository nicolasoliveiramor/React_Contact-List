import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './store'

import { Home } from './pages/Home'
import { Cadastro } from './pages/Cadastro'
import { EstiloGlobal } from './styles'
import { MainListContainer } from './containers/MainListContainer'
import { HeaderContainer } from './containers/HeaderContainer'
import { FilterHeaderContainer } from './containers/FilterHeaderContainer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={rotas}>
        <HeaderContainer />
        <FilterHeaderContainer />
        <MainListContainer />
      </RouterProvider>
    </Provider>
  )
}
export default App
