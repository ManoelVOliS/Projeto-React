import Logo from '../Logo';
import Menu from '../Menu';
import styled from 'styled-components';

const HeaderContainer = styled.header`


`;

function Header() {
    return (
        <HeaderContainer>
        <Logo/>
        <Menu/>
      </HeaderContainer>    
    );
}

export default Header;