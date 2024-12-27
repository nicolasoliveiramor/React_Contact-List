import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoRemover, Titulo } from '../../components/Contacts/styles'
import {
  Form,
  FormCampo,
  Opcoes,
  Opcao,
  MainContainerForm,
  BotaoCadastrar
} from './styles'
import { cadastrar } from '../../store/reducers/contatos'
import * as enums from '../../utils/enums/contato'

export const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [tipoContato, setTipoContato] = useState(enums.TipoContato.FAMILIA)
  const [titulo, setTitulo] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [redes, setRedes] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        telefone,
        email,
        redes,
        tipoContato
      })
    )
    navigate('/')
  }

  return (
    <MainContainerForm>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <FormCampo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <FormCampo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="text"
          placeholder="Telefone"
        />
        <FormCampo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="Email"
        />
        <FormCampo
          value={redes}
          onChange={(evento) => setRedes(evento.target.value)}
          type="text"
          placeholder="Redes Sociais"
        />
        <Opcoes>
          <p>Tipo do contato</p>

          {Object.values(enums.TipoContato).map((tipoContato) => (
            <Opcao key={tipoContato}>
              <input
                type="radio"
                id={tipoContato}
                name="tipoContato"
                value={tipoContato}
                onChange={(evento) =>
                  setTipoContato(evento.target.value as enums.TipoContato)
                }
                defaultChecked={tipoContato === enums.TipoContato.FAMILIA}
              />
              <label htmlFor={tipoContato}>{tipoContato}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
        <BotaoRemover type="button" onClick={() => navigate('/')}>
          Voltar
        </BotaoRemover>
      </Form>
    </MainContainerForm>
  )
}
