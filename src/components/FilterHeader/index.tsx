import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/contato'
import { alterarFiltro } from '../../store/reducers/filtro'

import * as S from './styles'

export type Props = {
  legenda: string
  criterio: 'familia' | 'amigos' | 'conhecidos' | 'todos'
  valor?: enums.TipoContato
}

export const FilterHeader = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const { filtro, contato } = useSelector((state: RootReducer) => state)

  const verificaSeEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio

    const mesmoValor = filtro.valor === valor

    return mesmoValor && mesmoCriterio
  }

  const filtrar = () => {
    dispatch(alterarFiltro({ valor, criterio }))
  }

  const contaTarefas = () => {
    const contatosFiltrados =
      criterio === 'todos'
        ? contato.itens
        : contato.itens.filter((item) => item.tipoContato === valor)

    return contatosFiltrados.length > 0 ? contatosFiltrados.length : undefined
  }

  const contador = contaTarefas()
  const ativo = verificaSeEstaAtivo()

  const temValor = contador && contador > 0

  return (
    <>
      <S.Filtro>
        <S.BotaoFiltro ativo={ativo} onClick={filtrar}>
          {legenda}
        </S.BotaoFiltro>
        <S.Contador ativo={temValor}>{contador}</S.Contador>
      </S.Filtro>
    </>
  )
}
