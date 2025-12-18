import styled from "styled-components"
import Navbar from "./components/navbar"
import Switch from "./components/switch"
function App() {

  return (
    <div className="App">
      <Navbar/>
      <MyBody>
        <Switch/>
      </MyBody>
      
    </div>
  )
}

const MyBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  width: 100vw;
`;

export default App
