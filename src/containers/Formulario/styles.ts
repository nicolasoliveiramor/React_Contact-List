import styled from 'styled-components'
import { Campo, MainContainer } from '../../styles'
import { BotaoSalvar } from '../../components/Contacts/styles'

export const MainContainerForm = styled(MainContainer)`
  justify-content: center;
  max-height: 90vh;
`

export const Form = styled.form`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
`

export const FormCampo = styled(Campo)`
  margin-bottom: 16px;
`

export const BotaoCadastrar = styled(BotaoSalvar)`
  margin: 16px 0;
`

export const Opcoes = styled.div`
  margin-bottom: 16px;
  margin: 0 40px;
  text-align: center;

  p {
    margin-bottom: 16px;
  }

  label {
    margin: 6px;
  }
`

export const Opcao = styled.div`
  max-height: 30px;
  display: inline;
  text-transform: capitalize;

  @media (max-width: 330px) {
    max-height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
`
