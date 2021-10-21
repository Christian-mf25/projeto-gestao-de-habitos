import {useEffect, useState} from "react";
import Api from "../../Services/API"
import {useParams} from "react-router-dom";

const Activities = () => {
    const {id} = useParams();
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        Api.get(`activities/?group=${id}&page=1`)
          .then((response) => setActivities(response.data.results))
          .catch((err) => console.log(err));
    });

    return (
        <ul>
            {activities
            .map(activity =>
                <li key={activity.id}>
                    <h3>{activity.title}</h3>
                    <p>{activity.realization_time}</p>
                </li>)}
        </ul>
    );
}
export default Activities;