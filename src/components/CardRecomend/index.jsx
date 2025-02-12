import PropTypes from "prop-types";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.h4`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 15px;
  text-align: center;
`;

const Image = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const MoreButton = styled.button`
  padding: 10px 20px;
  background-color: #61dafb;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #21a1f1;
  }
`;

function CardRecomend({ title, subtitle, description, src }) {   
    return (
      <CardContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        <Image src={src || "https://via.placeholder.com/100x150"} alt={title} />
        <MoreButton>More</MoreButton>
      </CardContainer>  
    );
}

// Validação das props
CardRecomend.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default CardRecomend;
