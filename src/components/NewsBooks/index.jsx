import styled from "styled-components";
import { Title } from "../Title";
import CardRecomend from "../CardRecomend";
import { databaseNewsBooks } from "./databaseNewsBooks";

const NewsBooksContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
`;

const BooksGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    justify-items: center;
    width: 100%;
`;

const BookCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-10px);
    }
`;

const BookImage = styled.img`
    width: 150px;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 10px;
`;

const BookTitle = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #20232a;
    text-align: center;
`;

const CardContainerWrapper = styled.div`
  margin-top: 50px; /* Adiciona espaçamento acima do CardRecomend */
  width: 100%;
  display: flex;
  justify-content: center;
`;


function NewsBooks() {
    return (
        <NewsBooksContainer>
            <Title>News</Title>
            <BooksGrid>
                {databaseNewsBooks.map((book, index) => (
                    <BookCard key={index}>
                        <BookImage src={book.src || "https://via.placeholder.com/100x150"} alt={book.name} />
                        <BookTitle>{book.name}</BookTitle>
                    </BookCard>
                ))}
            </BooksGrid>
            <CardContainerWrapper>
                <CardRecomend
                    title="Maybe you will be interested"
                    subtitle="Name of book"
                    description="Description of book"
                />
            </CardContainerWrapper>
        </NewsBooksContainer>
    );
}


export default NewsBooks;
