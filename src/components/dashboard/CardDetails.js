const CardDetails = (props) => {
  const {id, image, name, price} = props
  return ( 
    <div className="card grow" key={id}>
      <div className="card-header">
        <p>{name}</p>
      </div>
      <div className="card-body">
        <div className="card-icon">
          <img src={image} alt="coin-img" />
        </div>
        <div className="card-price">
          <h4>$ {price}</h4>
        </div>
      </div>
      <div className="card-footer">
        <p>Card Stats</p>
      </div>
    </div>
   );
}
 
export default CardDetails;