import styled from 'styled-components';

const Box = styled.div`
  position: absolute;
  width: 300px;
  top: 160px;
  left: 50%;
  height: 150px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  transform: translateX(-50%);
  overflow: hidden;
`;
const Title = styled.h3`
  display: block;
  padding: 10px 0;
  background-color: teal;
  color: white;
  margin-bottom: 30px;
`;
const Text = styled.p`
  text-transform: capitalize;
  width: 80%;
  margin: 0 auto;
  line-height: 1.6rem;
`;
const Tost = ({ message }) => {
  return (
    <Box>
      <Title>Info</Title>
      <Text>{message}</Text>
    </Box>
  );
};

export default Tost;
