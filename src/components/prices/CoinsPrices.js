import useFetch from "../useFetch";
import CoinsDetails from "./CoinsDetails";

const CoinPrices = () => {
  const { data, isLoading, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
  );

  // console.log(data);

  const coinDetails = data.map(coin => {
    return (
      <CoinsDetails
        key={coin.id}
        id={coin.market_cap_rank}
        image={coin.image}
        name={coin.name}
        price={coin.current_price}
        percentage24h={coin.price_change_percentage_24h}
        volume24h={coin.total_volume}
        marketCap={coin.market_cap}
        ath={coin.ath}
      />
    );
  });

  return (
    <div className="card ">
      <div className="card-header">
        <p>Cryptocurrency Prices</p>
      </div>
      <div className="card-body">
        <div className="table">
          <div className="table-head">
            <div className="id">#</div>
            <div className="coin-name">Coin</div>
            <div className="price">Price</div>
            <div className="percentage-24h">24h Change</div>
            <div className="volume-24h">24 h Volume</div>
            <div className="market-cap">Market</div>
            <div className="ath">ATH</div>
          </div>
          {data && <div>{coinDetails}</div>}
        </div>
      </div>
      <div className="card-footer">
        <p>Card footer </p>
      </div>
    </div>
  );
};

export default CoinPrices;
