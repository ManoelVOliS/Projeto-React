import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { books } from "../Search/databaseSearch";

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
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
        border-color:rgb(255, 255, 255);
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    }
`;

// Container dos resultados em grid
const BooksGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 30px;
    width: 80%;
    max-width: 1000px;
`;

const BookCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    animation: ${fadeInUp} 0.5s ease-in-out;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const BookImage = styled.img`
    width: 120px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const BookTitle = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #333;
`;

function Search() {
    const [searchBooks, setSearchBooks] = useState([]);

    return (
        <SearchContainer>
            <SearchInput 
                type="search" 
                placeholder="Buscar..." 
                onBlur={event => {
                    const typingText = event.target.value.toLowerCase();
                    const resultSearch = books.filter(book => 
                        book.name.toLowerCase().includes(typingText)
                    );
                    setSearchBooks(resultSearch);
                }} 
            />
            
            <BooksGrid>
                {searchBooks.map(book => (
                    <BookCard key={book.name}>
                        <BookImage src={book.src || "https://via.placeholder.com/100x150"} alt={book.name} />
                        <BookTitle>{book.name}</BookTitle>
                    </BookCard>
                ))}
            </BooksGrid>
        </SearchContainer>
    );
}

export default Search;
