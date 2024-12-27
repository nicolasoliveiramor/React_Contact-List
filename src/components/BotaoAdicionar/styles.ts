import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { variaveisCores } from '../../styles/variaveis'

export const Circulo = styled(Link)`
  height: 60px;
  width: 60px;
  background-color: ${variaveisCores.verdeEscuro};
  color: #fff;
  position: fixed;
  bottom: 20px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`
