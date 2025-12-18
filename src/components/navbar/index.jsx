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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding-top: 0%;
  
  background-color: #EEE;

  color: white;
`;
