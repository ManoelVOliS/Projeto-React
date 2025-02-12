import styled from 'styled-components';
import Logo from '../Logo'; // Importando a logo

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: #20232a;
  padding: 20px 40px;
  width: 100vw;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma leve sombra */
`;

const LogoWrapper = styled.div`
  margin-right: 40px; /* Espaçamento entre a logo e o menu */
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.li`
  padding: 10px 20px;
  font-size: 1rem;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color:rgb(255, 255, 255);
    color: #20232a;
    box-shadow: 0 4px 8px rgba(226, 227, 228, 0.6); /* Sombra ao passar o mouse */
    transform: translateY(-5px);
  }
`;

const textOptions = ['Home', 'Books', 'Authors', 'Genres', 'News'];

function Menu() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo /> {/* A logo ficará ao lado esquerdo */}
      </LogoWrapper>
      <NavList>
        {textOptions.map((text, index) => (
          <NavItem key={index}>{text}</NavItem>
        ))}
      </NavList>
    </HeaderContainer>
  );
}

export default Menu;
