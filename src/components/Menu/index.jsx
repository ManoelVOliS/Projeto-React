import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column; /* Organiza os itens na vertical */
  align-items: center;
  background-color: #20232a;
  padding: 10px;
  width: 10vw; /* Ajustei para evitar sobreposição de texto */
  height: auto; /* Altura dinâmica conforme os itens adicionados */
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavItem = styled.li`
  padding: 15px;
  font-size: 1rem;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  width: 70%;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #61dafb;
    color: #20232a;
    transform: scale(1.1);
  }
`;

const textOptions = ['Home', 'Books', 'Authors', 'Genres', 'News'];

function Menu() {
  return (
    <HeaderContainer>
      <NavList>
        {textOptions.map((text, index) => (
          <NavItem key={index}>{text}</NavItem>
        ))}
      </NavList>
    </HeaderContainer>
  );
}

export default Menu;
