import { FaBtc } from "react-icons/fa";

const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-icon">
          <FaBtc className="icon" />
        </div>
        <div className="card-data">
          <p className="card-name">BitCoin</p>
          <h4 className="card-price">2559 $</h4>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-stats">Card Stats</div>
      </div>
    </div>
  );
};

export default Card;
