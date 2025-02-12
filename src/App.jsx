import Header from './components/Header';
import Search from './components/Search';
import NewsBooks from './components/NewsBooks';   
import styled from 'styled-components';

const AppContainer = styled.div`

    text-align: center;
    background-color: #ffffff;
    height: auto;
    width: auto;

`;

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search/>
      <NewsBooks/>
    </AppContainer>
  );
}

export default App;
