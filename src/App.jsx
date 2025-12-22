import { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/navbar";
import Switch from "./components/switch";
import Card from "./components/Card";
import menu from "./../menu";

function App() {
  const [category, setCategory] = useState("combos");

  function getItems() {
    switch (category) {
      case "combos":
        return menu.combos;

      case "bebidas":
        // juntando tudo que é bebida
        return [
          ...menu.cervejas_600ml,
          ...menu.bebidas_nao_alcoolicas.lata,
          ...menu.bebidas_nao_alcoolicas.um_litro,
          ...menu.bebidas_nao_alcoolicas.um_meio_litro,
          ...menu.bebidas_nao_alcoolicas.dois_litros,
          ...menu.bebidas_nao_alcoolicas.outros,
          ...menu.sucos,
        ];

      case "carnes":
        return menu.porcoes;

      default:
        return [];
    }
  }

  return (
    <div className="App">
      <Navbar />

      <MyBody>
        <Switch onChange={setCategory} />

        <List>
          {getItems().map((item, index) => (
            <Card key={index}>
              {{
                text: item.nome,
                description: item.descricao || "",
                price: `R$ ${item.preco.toFixed(2)}`,
              }}
            </Card>
          ))}
        </List>
      </MyBody>
    </div>
  );
}

const MyBody = styled.div`
  padding: 20px;
  width: 100vw;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

export default App;
