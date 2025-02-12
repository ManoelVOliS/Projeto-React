import styled from "styled-components";

export const Title = styled.h1`
    font-size: ${(props) => props.size || '2rem'}; /* Removido array desnecessário */
    color: ${(props) => props.color || '#333'};
    margin-bottom: 30px;
`;
