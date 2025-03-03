import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      {auth?.user ? <h3>Welcome, {auth.user.username}!</h3> : <p>Loading user data...</p>}
    </div>
  );
};

export default Dashboard;
