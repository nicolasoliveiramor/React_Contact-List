import styled from 'styled-components'

export type Props = {
  ativo?: boolean | number
}

export const Filtro = styled.ul`
  display: flex;
  padding: 2em 0;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1em;
  }

  li {
    margin: 2em 0;
  }
`

export const BotaoFiltro = styled.button<Props>`
  margin-left: 16px;
  margin-right: 4px;
  border: none;
  border-bottom: 2px solid ${(props) => (props.ativo ? '#000' : '#eee')};
  transition: all ease-in-out 150ms;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`

export const Contador = styled.span<Props>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #eee;
  background-color: ${(props) => (props.ativo ? ' #000' : 'transparent')};
`
