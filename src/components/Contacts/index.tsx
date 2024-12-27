import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Contato } from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'
import { CampoEditavel } from '../../styles'

import * as S from './styles'

type Props = Contato

export const Contacts = ({
  tipoContato,
  titulo,
  telefone: telefoneOriginal,
  email: emailOriginal,
  redes: redesOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)

  const [telefone, setTelefone] = useState(0)
  const [email, setEmail] = useState('')
  const [redes, setRedes] = useState('')

  useEffect(() => {
    setTelefone(telefoneOriginal)

    setEmail(emailOriginal)

    setRedes(redesOriginal)
  }, [telefoneOriginal, emailOriginal, redesOriginal])

  const cancelaTarefa = () => {
    setEstaEditando(false)

    setTelefone(telefoneOriginal)

    setEmail(emailOriginal)

    setRedes(redesOriginal)
  }

  return (
    <S.TiposContato>
      <S.InfoContato>
        <S.PrioridadeContato tipoContato={tipoContato}>
          {tipoContato}
        </S.PrioridadeContato>
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
        <S.DadosContato>
          <label>
            <span> &#128222;</span>:
            {estaEditando ? (
              <CampoEditavel
                type="string"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                disabled={!estaEditando}
              />
            ) : (
              <a href={`tel:${telefone}`}> {telefone}</a>
            )}
          </label>
          <label>
            <span>&#128231;</span>:
            {estaEditando ? (
              <CampoEditavel
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!estaEditando}
              />
            ) : (
              <a href={`mailto:${email}`}> {email}</a>
            )}
          </label>
          <label>
            <span>&#128187;</span>:
            {estaEditando ? (
              <CampoEditavel
                type="link"
                value={redes}
                onChange={(e) => setRedes(e.target.value)}
                disabled={!estaEditando}
              />
            ) : (
              <a href={redes}>{redes}</a>
            )}
          </label>
        </S.DadosContato>
      </S.InfoContato>
      <S.BotoesContato>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({ titulo, telefone, email, redes, tipoContato, id })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoRemover onClick={cancelaTarefa}>Cancelar</S.BotaoRemover>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BotoesContato>
    </S.TiposContato>
  )
}
