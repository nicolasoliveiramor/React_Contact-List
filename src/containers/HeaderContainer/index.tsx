import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Campo, Container } from '../../styles'
import { alteraTermo } from '../../store/reducers/filtro'
import { Header } from '../../components/Header'

export const HeaderContainer = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <>
      <Header />
      <Container>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        ></Campo>
      </Container>
    </>
  )
}
