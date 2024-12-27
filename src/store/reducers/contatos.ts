import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Contato } from '../../models/Contato'
import * as enums from '../../utils/enums/contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      titulo: 'Rita',
      tipoContato: enums.TipoContato.FAMILIA,
      telefone: 11944668062,
      email: 'ritaaparecida@gmail.com',
      redes: 'facebook'
    },
    {
      id: 2,
      titulo: 'Mateus',
      tipoContato: enums.TipoContato.AMIGOS,
      telefone: 11940028922,
      email: 'mateusoliveiramor05@gmail.com',
      redes: 'facebook'
    },
    {
      id: 3,
      titulo: 'Nicolas',
      tipoContato: enums.TipoContato.CONHECIDOS,
      telefone: 11944668062,
      email: 'nicolasoliveiramor05@gmail.com',
      redes: 'facebook'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExistente = state.itens.find(
        (contato) =>
          contato.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (contatoJaExistente) {
        alert('Já existe um contato com este nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions

export default contatoSlice.reducer
