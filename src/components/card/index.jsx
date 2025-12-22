import styled from "styled-components";

export default function Card({ children }) {
  console.log(children);
  return (
    <MyCard>
      <div className="content">
        <h3 className="title">{children.text}</h3>
        <p className="description">{children.description}</p>
      </div>

      <div className="price">{children.price}</div>
      {children.serve && (
        <div className="serve">
        <span className="icon">👥</span>
        <span>{children.serve} pessoas</span>
      </div>
      )}
    </MyCard>
  );
}

const MyCard = styled.div`
  z-index: 1;
  position: relative;

  border-radius: 8px;
  background-color: #eee;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  border-bottom: 3px solid #cc3434;
  padding: 12px 40px 12px 12px;

  .title {
    font-size: 20px;
    word-wrap: break-word;
    max-width: 200px;
    margin: 0;
  }

  .description {
    color: #666;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 4px 0 0;
    max-width: 200px;
  }

  /* 💰 preço no canto superior direito */
  .price {
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: bold;
    white-space: nowrap;
  }

  /* 👥 quantidade no canto inferior direito */
  .serve {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: #555;
    white-space: nowrap;
  }

  .icon {
    font-size: 14px;
  }
`;
