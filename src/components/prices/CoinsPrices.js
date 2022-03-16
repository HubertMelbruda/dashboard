import useFetch from "../useFetch";
import CoinsDetai from "./CoinsDetails";

const CoinPrices = () => {
  const {
    data: coins,
    isLoading,
    error,
  } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

  // const coinDetails = coins.map(coin => {
  //   <CoinsDetai key={coin.symbol} id={coin.id} />;
  // });

  return (
    <div className="card grow">
      <div className="card-header">
        <p>Cryptocurrency Prices</p>
      </div>
      <div className="card-body">
        <div className="table-head">
          <div className="id">#</div>
          <div className="coin-name">Coin</div>
          <div className="price">Price</div>
        </div>
      </div>
      <div className="card-footer">
        <p>Card footer </p>
      </div>
    </div>
  );
};

export default CoinPrices;
