import { createGlobalStyle, styled } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: Roboto, sans-serif;
  }

`

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #eee;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const MainContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`

export const Campo = styled.input`
  display: block;
  width: 254px;
  padding: 16px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
`

export const CampoEditavel = styled(Campo)`
  display: inline;
  border: solid 1px black;
  width: 112;
  padding: 4px;
  margin-left: 4px;
`
