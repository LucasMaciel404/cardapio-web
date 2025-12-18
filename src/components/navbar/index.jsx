import styled from "styled-components";

export default function Navbar() {
  return (
    <MyNavbar>
      <h1>Costelão Paraiba</h1>
    </MyNavbar>
  );
}

const MyNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;
  padding: 0 20px;
  
  background-color: #e25454;

  color: white;
`;
