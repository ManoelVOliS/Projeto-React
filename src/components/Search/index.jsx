import styled from "styled-components";
import { useState } from "react";

const SearchContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
    flex-direction: column; /* Organizar o conteúdo em coluna */
`;

const SearchInput = styled.input`
    width: 300px;
    height: 40px;
    padding: 10px 15px;
    border: 2px solid #ccc;
    border-radius: 20px;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease-in-out;

    &:focus {
        border-color: #61dafb;
        box-shadow: 0 0 8px rgba(97, 218, 251, 0.6);
    }
`;

const SearchText = styled.p`
    margin-top: 20px;
    font-size: 1.2rem;
    color: #333; /* Cor do texto */
    font-weight: bold;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:empty {
        display: none; /* Ocultar o texto caso esteja vazio */
    }
`;

function Search() {
    const [searchText, setSearchText] = useState("");

    return (
        <SearchContainer>
            <SearchInput 
                type="search" 
                placeholder="Buscar..." 
                onBlur={event => setSearchText(event.target.value)} 
            />
            <SearchText>{searchText}</SearchText>
        </SearchContainer>
    );
}

export default Search;
