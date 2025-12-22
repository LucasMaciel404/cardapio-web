import styled from "styled-components";
import logoImage from "../../assets/logo-paraiba.png";

export default function Navbar() {
  return (
    <MyNavbar>
      <img src={logoImage} alt="Logo" />
    </MyNavbar>
  );
}

const MyNavbar = styled.nav`
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;

  width: 100%;
  height: 100px;
  padding-top: 0%;
  
  background-color: #eee;
  color: white;
  
  border-bottom: 2px solid black;
`;
