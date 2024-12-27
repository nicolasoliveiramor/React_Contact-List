import * as enums from '../../utils/enums/contato'
import { FilterHeader } from '../../components/FilterHeader'
import { Container } from '../../styles'

export const FilterHeaderContainer = () => {
  return (
    <Container>
      <FilterHeader
        valor={enums.TipoContato.AMIGOS}
        criterio="amigos"
        legenda="amigos"
      />
      <FilterHeader
        valor={enums.TipoContato.CONHECIDOS}
        criterio="conhecidos"
        legenda="conhecidos"
      />
      <FilterHeader
        valor={enums.TipoContato.FAMILIA}
        criterio="familia"
        legenda="familia"
      />
      <FilterHeader criterio="todos" legenda="todos" />
    </Container>
  )
}
