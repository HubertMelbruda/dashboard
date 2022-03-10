import chart from "../../assets/img/chart.jpg";

const Charts = () => {
  return (
    <div className="card">
      <div className="card-header">
        <p>Charts</p>
      </div>
      <div className="card-body">
        <div className="chart">
          <img src={chart} alt="chart" />
        </div>
      </div>
      <div className="card-footer">Card Footer</div>
    </div>
  );
};

export default Charts;
