import { useEffect, useState } from "react";
import Habits from "../../Components/Habits";
import Api from "../../Services/API";

const Dashboard = () => {
  const [habitsRes, setHabitsRes] = useState([]);
  const token = JSON.parse(localStorage.getItem("@Productive:token"));

  const getHabits = () => {
    Api.get("habits/personal/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setHabitsRes(res.data));
  };

  useEffect(() => {
    getHabits();
  }, []);
  return (
    <>
      Dashboard
      <Habits habitsRes={habitsRes} />
    </>
  );
};

export default Dashboard;
