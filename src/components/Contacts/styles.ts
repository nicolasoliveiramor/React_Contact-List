import styled from 'styled-components'

import { variaveisCores } from '../../styles/variaveis'

type TagsProps = {
  tipoContato: 'familia' | 'amigos' | 'conhecidos'
}

const retornaCorDeFundo = (props: TagsProps): string => {
  switch (props.tipoContato) {
    case 'familia':
      return variaveisCores.verde

    case 'amigos':
      return variaveisCores.verdeEscuro

    case 'conhecidos':
      return variaveisCores.cinzaEscuro

    default:
      return variaveisCores.branco
  }
}

export const TiposContato = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: auto;
  max-width: 600px;
  width: 100%;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 8px;
  padding: 1.5em;
  margin: 2em 0;

  @media (min-width: 320px) and (max-width: 430px) {
    height: 370px;
    max-width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const InfoContato = styled.div`
  width: 350px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  @media (max-width: 430px) {
    max-width: 90%;
    align-items: center;
    text-align: center;
  }
`

export const DadosContato = styled.div`
  display: flex;
  height: 150px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  label {
    height: 30px;
    margin: 8px 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  @media (max-width: 430px) {
    align-items: center;
    text-align: center;
  }
`
export const BotoesContato = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;

  @media (max-width: 430px) {
    margin-top: 8px;
    flex-direction: row;
  }
`

export const PrioridadeContato = styled.span<TagsProps>`
  width: auto;
  padding: 6px 12px;
  display: inline-block;
  text-align: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  color: #fff;
  font-size: 0.9em;

  @media (max-width: 320px) {
    font-size: 0.9em;
  }
`

export const Titulo = styled.p`
  font-weight: bold;
  margin: 12px 0;
  font-size: 2em;
`

export const Botao = styled.button`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
  font-weight: bold;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  @media (max-width: 430px) {
    padding: 12px;
    margin-top: 8px;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveisCores.verde};

  &:hover {
    transition: all ease-in 200ms;
    background-color: ${variaveisCores.verdeEscuro};
  }
`

export const BotaoRemover = styled(Botao)`
  background-color: ${variaveisCores.vermelho};

  &:hover {
    transition: all ease-in 200ms;
    background-color: ${variaveisCores.vermelhoEscuro};
  }
`

export const BotaoEditar = styled(Botao)`
  background-color: #222;

  &:hover {
    transition: all ease-in 200ms;
    background-color: #000;
  }
`
