import { FaBtc } from "react-icons/fa";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <p>Ethereum</p>
      </div>
      <div className="card-body">
        <div className="card-icon">
          <FaBtc className="icon" />
        </div>
        <div className="card-price">
          <h4>2559 $</h4>
        </div>
      </div>
      <div className="card-footer">
        <p>Card Stats</p>
      </div>
    </div>
  );
};

export default Card;
