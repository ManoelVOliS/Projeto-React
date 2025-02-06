import Header from './components/Header';
import styled from 'styled-components';

const AppContainer = styled.div`

    text-align: center;
    background-color: #ffffff;
    height: 100vh;
    width: 100vw;

`;

function App() {
  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  );
}

export default App;
