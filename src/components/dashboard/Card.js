import useFetch from "../useFetch";
import CardDetails from "./CardDetails";

const Card = props => {
  const { data } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

  const filteredCoins = data.filter(coin => coin.id === props.name);

  const coinToDisplay = filteredCoins.map(coin => {
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

  return <>{coinToDisplay}</>;
};

export default Card;
