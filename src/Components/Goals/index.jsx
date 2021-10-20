import {useEffect, useState} from "react";
import Api from "../../Services/API"
import {useParams} from "react-router-dom";
import { toast } from "react-toastify";

const Goals = () => {
    const {id} = useParams();
    const [goals, setGoals] = useState([]);
    const token = JSON.parse(localStorage.getItem("@Productive:token"));
    const checkIn = (goal) => {
        if (goal.how_much_achieved < 50) {
          goal.how_much_achieved += 1;
        } else {
          goal.achieved = true;
        }
        Api.patch(`/goals/${goal.id}/`,
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
        <ul>
            {goals
            .map(goal =>
                <li key={goal.id}>
                    <h3>{goal.title}</h3>
                    <p>{goal.difficulty}</p>
                    <p>{goal.achieved}</p>
                    <span>{goal.how_much_achieved}</span>
                    <button onClick={() => checkIn(goal)}>Check-in</button>
                    <button onClick={() => deleteGoal(goal.id)}>Deletar</button>
                </li>)}
        </ul>
    );
}
export default Goals;