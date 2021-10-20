import {useEffect, useState} from "react";
import Api from "../../Services/API"
import {useParams} from "react-router-dom";
const Goals = () => {
    const {id} = useParams()
    const [goals, setGoals] = useState([])
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
                    <div>{goal.group}</div>
                </li>)}
        </ul>
    );
}
export default Goals;