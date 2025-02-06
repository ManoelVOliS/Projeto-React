import logo from '../../image/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    align-items: center;          
    background-color: #3f444e;
    padding: 10px 10px;
    width: 10vw;
    height: auto;
`;

const LogoImage = styled.img`
    width: 80px;
    margin-top: 5px;
    margin-bottom: -15px;
`;

function Logo(){
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='Logo'/>
            <p><strong>Books</strong> Dev</p>
        </LogoContainer>
    );
}

export default Logo;
