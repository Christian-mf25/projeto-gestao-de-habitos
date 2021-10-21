import { useEffect, useState } from "react";
import AddHabit from "../../Components/AddHabit";
import Habits from "../../Components/Habits";
import Api from "../../Services/API";
import SearchHabit from "../../Components/SearchHabit";
import { Redirect } from "react-router";
import Header from "../../Components/Header";
import { ColorDiv, HabitsContainerDiv, HabitsPage } from "./styles";

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
        <HabitsContainerDiv>
          <Header showD />
          <ColorDiv>
            <SearchHabit
              getHabits={getHabits}
              habitsRes={habitsRes}
              setIsSearching={setIsSearching}
              setButtonPopup={setButtonPopup}
              buttonPopup={buttonPopup}
            />
            <AddHabit
              setButtonPopup={setButtonPopup}
              trigger={buttonPopup}
              setTrigger={setButtonPopup}
            ></AddHabit>
            {!isSearching && <Habits />}
          </ColorDiv>
        </HabitsContainerDiv>
      ) : (
        <Redirect to="/login" />
      )}
    </HabitsPage>
  );
};

export default Dashboard;
