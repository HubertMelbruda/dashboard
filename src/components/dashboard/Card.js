import { FaBtc } from "react-icons/fa";
import useFetch from "../useFetch";
import CardDetails from "./CardDetails";

const Card = props => {
  const { data } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

  // const coinData = data.filter(coin => coin == {props.name} )

  const filteredCoins = data.map(coin => {
    if (coin.id === props.name) {
      return coin;
    }
  });

  const filteredCoins1 = data.filter(coin => coin.id === props.name);

  const coinToDisplay = filteredCoins1.map(coin => {
    return (
      <CardDetails
        key={coin.id}
        id={coin.id}
        image={coin.image}
        name={coin.name}
        price={coin.current_price}
      />
    );
  });

  return (
    <>{coinToDisplay}</>

    // <div className="card grow">
    //   <div className="card-header">
    //     <p>Ethereum</p>
    //   </div>
    //   <div className="card-body">
    //     <div className="card-icon">
    //       <FaBtc className="icon" />
    //     </div>
    //     <div className="card-price">
    //       <h4>2559 $</h4>
    //     </div>
    //   </div>
    //   <div className="card-footer">
    //     <p>Card Stats</p>
    //   </div>
    // </div>
  );
};

export default Card;
