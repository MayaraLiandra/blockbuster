import { NavLink, Outlet } from 'react-router-dom'
import { Content, Main, NavBar, Header, LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header>
        <h1>Blockbuster</h1>
      </Header>
      <Main>
          <Content>
          <Outlet />
        </Content>
        <NavBar>
          <NavLink to={'/'} end title="Cliente">
            <p>Cadastrar Cliente</p>
          </NavLink>
          <NavLink to={'/aluguel'} end title="Aluguel">
            <p>Alugar Filme</p>
          </NavLink>
          <NavLink to={'/filmes'} end title="Filmes">
            <p>Gerenciar Filmes</p>
          </NavLink>
        </NavBar>
      </Main>
    </LayoutContainer>
  )
}
