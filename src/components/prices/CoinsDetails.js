const CoinsDetails = props => {
  const { id, image, name, price, percentage24h, volume24h, marketCap } = props;

  return (
    <div className="coin-row" key={id}>
      <div className="id">{id}</div>
      <div className="coin-name">
        <img src={image} alt="coin-img" />
        {name}
      </div>
      <div className="price">{price}</div>
      <div className="percentage-24h">{percentage24h}</div>
      <div className="volume-24h">{volume24h}</div>
      <div className="market-cap">{marketCap}</div>
    </div>
  );
};

export default CoinsDetails;
