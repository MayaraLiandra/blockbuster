import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  background: ${(props) => props.theme['snow']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem;
  color: ${(props) => props.theme['gray-900']};
  border-bottom: 2px solid ${(props) => props.theme['gray-700']};
`

export const Main = styled.div`
  display: flex;
  flex: 1;
`

export const NavBar = styled.nav`
  width: 12rem;
  display: flex;
  flex-direction: column;
  border-right: 2px solid ${(props) => props.theme['gray-700']};
  background-color: ${(props) => props.theme['gray-700']};

  a {
    padding: 1rem;
    border: 2px solid ${(props) => props.theme['gray-700']};
    text-decoration: none;
    color: ${(props) => props.theme['white']};

    &.active {
      background-color: ${(props) => props.theme['pink-300']};
      font-weight: bold;
    }

    &:hover {
      background-color: ${(props) => props.theme['pink-300']};
    }
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`
