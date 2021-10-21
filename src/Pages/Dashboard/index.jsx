import { useEffect, useState } from "react";
import AddHabit from "../../Components/AddHabit";
import Habits from "../../Components/Habits";
import Api from "../../Services/API";
import SearchHabit from "../../Components/SearchHabit";
import { Redirect } from "react-router";
import Header from "../../Components/Header";
import { HabitsPage } from "./styles";

const Dashboard = () => {
  const [habitsRes, setHabitsRes] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
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
    <HabitsPage>
      {token ? (
        <div>
          <Header showD />
          <button
            className="addHabitButton"
            onClick={() => setButtonPopup(!buttonPopup)}
          >
            Adicionar hábito
          </button>
          <SearchHabit
            getHabits={getHabits}
            habitsRes={habitsRes}
            setIsSearching={setIsSearching}
          />
          <AddHabit
            setButtonPopup={setButtonPopup}
            trigger={buttonPopup}
            setTrigger={setButtonPopup}
          ></AddHabit>
          {!isSearching && <Habits />}
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </HabitsPage>
  );
};

export default Dashboard;
