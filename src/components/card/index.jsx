import styled from "styled-components";

export default function Card({ children }) {
  return (
    <MyCard>
      <div className="row">
        <div className="col col-md-8">
          <div className="row">
            <h3>{children.text}</h3>
          </div>
          <div className="row">
            <p>{children.description}</p>
          </div>
        </div>
        <div className="col col-md-4 price-section">
          <h4>{children.price}</h4>
        </div>
      </div>
    </MyCard>
  );
}

const MyCard = styled.div`
  border-radius: 8px;
  background-color: #eee;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  border-bottom: 3px solid black;
  padding: 10px 30px;
  .price-section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
