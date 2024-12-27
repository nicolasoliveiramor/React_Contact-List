import { useSelector } from 'react-redux'

import { MainContainer } from '../../styles'

import { Contacts } from '../../components/Contacts/index'
import { RootReducer } from '../../store'

export const MainListContainer = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContato = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (
        criterio === 'familia' ||
        criterio === 'amigos' ||
        criterio === 'conhecidos'
      ) {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.tipoContato === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContato()

  return (
    <MainContainer>
      <ul>
        {contatos.map((c) => (
          <li key={c.titulo}>
            <Contacts
              id={c.id}
              titulo={c.titulo}
              tipoContato={c.tipoContato}
              telefone={c.telefone}
              email={c.email}
              redes={c.redes}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
