import { configureStore } from '@reduxjs/toolkit'

import filtroReducer from './reducers/filtro'
import contatoReducer from './reducers/contatos'

export const store = configureStore({
  reducer: {
    contato: contatoReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
