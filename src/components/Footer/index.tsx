import { Container, FooterSection, Link, Links, Titulo } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <Titulo>Categorias</Titulo>
          <Links>
            <li>
              <Link to="/categories#rpg">RPG</Link>
            </li>
            <li>
              <Link to="/categories#acao">Ação</Link>
            </li>
            <li>
              <Link to="/categories#luta">Luta</Link>
            </li>
            <li>
              <Link to="/categories#esportes">Esportes</Link>
            </li>
            <li>
              <Link to="/categories#simulacao">Simulação</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <Titulo>Acesso rápido</Titulo>
          <Links>
            <li>
              <Link to="/#promocoes">Promoções</Link>
            </li>
            <li>
              <Link to="/#em-breve">Em breve</Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - &copy; EPLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}

export default Footer
