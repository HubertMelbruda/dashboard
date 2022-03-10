import Card from "../components/dashboard/Card";
import Charts from "../components/dashboard/Charts";

const Dashboard = () => {
  return (
    <div className="page-container">
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
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
