import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/contato'

type FiltroState = {
  termo?: string
  criterio: 'familia' | 'amigos' | 'conhecidos' | 'todos'
  valor?: enums.TipoContato
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos'
}

const filterSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alterarFiltro } = filterSlice.actions

export default filterSlice.reducer
