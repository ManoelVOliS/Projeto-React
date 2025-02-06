import logo from '../../image/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    align-items: center;          
    background-color: #3f444e;
    padding: 10px 10px;
    width: 6vw;
    height: auto;
    border-radius: 100px;
`;

const LogoImage = styled.img`
    width: 80px;
    margin-top: 5px;
    margin-bottom: -20px;
`;

const LogoText = styled.p`
    margin-top: 20px;
    margin-bottom: 5px;
`;

function Logo(){
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='Logo'/>
            <LogoText><strong>Books</strong> Dev</LogoText>
        </LogoContainer>
    );
}

export default Logo;
