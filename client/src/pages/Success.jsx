import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e0ffff;
`;
const Title = styled.h1`
  font-size: 20px;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
  background-color: teal;
  color: white;
`;

const Success = () => {
  return (
    <Container>
      <Title> Your Bill Is Success.Thank Your For Your Choose !!</Title>
      <Link to="/">
        <Button>Go to Homepage</Button>
      </Link>
    </Container>
  );
};

export default Success;
