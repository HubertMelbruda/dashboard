const CoinsDetails = props => {
  const { id, image, name, price, percentage24h, volume24h, marketCap, ath } =
    props;

  return (
    <div className="coin-row" key={id}>
      <div className="id">{id}</div>
      <div className="coin-name grow">
        <img src={image} alt="coin-img" />
        {name}
      </div>
      <div className="price">
        ${" "}
        {price.toLocaleString(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 8,
        })}
      </div>
      <div className="percentage-24h">
        {percentage24h.toLocaleString(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}
        %
      </div>
      <div className="volume-24h">$ {volume24h.toLocaleString()}</div>
      <div className="market-cap">$ {marketCap.toLocaleString()}</div>
      <div className="ath">$ {ath.toLocaleString()}</div>
    </div>
  );
};

export default CoinsDetails;
