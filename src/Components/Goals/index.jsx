import { useEffect, useState } from "react";
import Api from "../../Services/API";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import GoalsCard from "../GoalsCard/index.jsx";
import "./style.css";
import NewGoal from "../NewGoal";

const Goals = () => {
  const { id } = useParams();
  const [goals, setGoals] = useState([]);
  const token = JSON.parse(localStorage.getItem("@Productive:token"));
  const checkIn = (goal) => {
    if (goal.how_much_achieved < 50) {
      goal.how_much_achieved += 1;
    } else {
      goal.achieved = true;
    }
    Api.patch(
      `/goals/${goal.id}/`,
      {
        how_much_achieved: goal.how_much_achieved,
        achieved: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(() => {
      toast.success("Check-in realizado!");
    });
  };
  const deleteGoal = (id) => {
    Api.delete(`goals/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      toast.success("Meta removida");
    });
  };

  useEffect(() => {
    Api.get(`goals/?group=${id}&page=1`)
      .then((response) => setGoals(response.data.results))
      .catch((err) => console.log(err));
  });

  return (
    <div className="section_Goals">
      <div className="section_internalGoals">
        <div className="section_internalHeaderGoals">
          Metas
          <NewGoal />
        </div>
        {goals.map((goal) => (
          <>
            <GoalsCard
              key={goal.id}
              goal={goal}
              checkInFunction={checkIn}
              deleteGoalFunction={deleteGoal}
            />
          </>
        ))}
      </div>
    </div>
  );
};
export default Goals;
