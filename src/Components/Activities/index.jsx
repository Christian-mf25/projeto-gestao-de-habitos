import {useEffect, useState} from "react";
import Api from "../../Services/API"
import {useParams} from "react-router-dom";
import EditActivity from "../EditActivity"

const Activities = () => {
    const {id} = useParams();
    const [activities, setActivities] = useState([]);
    const [input, setInput] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        Api.get(`activities/?group=${id}&page=1`)
          .then((response) => setActivities(response.data.results))
          .catch((err) => console.log(err));
    });

    return (
        <ul>
            <input value={input} placeholder="Search a Activity" onChange={(e) => setInput(e.target.value)} ></input>
            {input.length > 0 ?
            activities.filter(item => item.title.toLowerCase().includes(input.toLowerCase()))
            .map(activity =>
                <li key={activity.id}>
                    <h3>{activity.title}</h3>
                    <p>{activity.realization_time}</p>
                    {update ?
                      <EditActivity activity={activity} setUpdate={setUpdate}/>
                     : <button onClick={() => setUpdate(!update)}>
                    Editar Atividade
                    </button>}
                </li>)
            :
            activities
            .map(activity =>
                <li key={activity.id}>
                    <h3>{activity.title}</h3>
                    <p>{activity.realization_time}</p>
                    {update === activity.id ?
                      <EditActivity activity={activity} setUpdate={setUpdate}/>
                     : <button onClick={() => setUpdate(activity.id)}>
                    Editar Atividade
                    </button>}
                </li>)}
        </ul>
    );
}
export default Activities;