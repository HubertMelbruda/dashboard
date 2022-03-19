import Card from "../components/dashboard/Card";
import Charts from "../components/dashboard/Charts";

const Dashboard = () => {
  return (
    <div className="page-container">
      <div className="cards">
        <Card name="bitcoin" />
        <Card name="ethereum" />
        <Card name="ripple" />
        <Card name="solana" />
      </div>
      <hr />
      <div className="body">
        <Charts />
        <Charts />
      </div>
    </div>
  );
};

export default Dashboard;
