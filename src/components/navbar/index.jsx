import styled from "styled-components";

export default function Navbar() {
  return (
    <MyNavbar>
      <h1>Costelão Paraiba</h1>
    </MyNavbar>
  );
}

const MyNavbar = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #a3a3a3;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
