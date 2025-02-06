import styled from 'styled-components';
import Logo from '../Logo'; // Importando a logo

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: #20232a;
  padding: 10px 20px;
  width: 100vw;
  height: auto;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-around; /* Distribui os itens igualmente */
  align-items: center;
`;

const NavItem = styled.li`
  padding: 10px 15px;
  font-size: 1rem;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #61dafb;
    color: #20232a;
    transform: scale(1.1);
    border-radius: 5px;
  }
`;

const textOptions = ['Home', 'Books', 'Authors', 'Genres', 'News'];

function Menu() {
  return (
    <HeaderContainer>
      <Logo /> {/* A logo ficará ao lado esquerdo */}
      <NavList>
        {textOptions.map((text, index) => (
          <NavItem key={index}>{text}</NavItem>
        ))}
      </NavList>
    </HeaderContainer>
  );
}

export default Menu;
