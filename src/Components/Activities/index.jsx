import { useEffect, useState } from "react";
import Api from "../../Services/API";
import { useParams } from "react-router-dom";
import EditActivity from "../EditActivity";
import { toast } from "react-toastify";
import { Input, PrimaryButton } from "../Styled/style";
import { Ul } from "./style";
import { FaTrashAlt } from "react-icons/fa";

const Activities = () => {
  const { id } = useParams();
  const [activities, setActivities] = useState([]);
  const [input, setInput] = useState([]);
  const [update, setUpdate] = useState(false);
  const token = JSON.parse(localStorage.getItem("@Productive:token"));

  const deleteActivity = (id) => {
    Api.delete(`activities/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      toast.success("Atividade removida");
    });
  };

  useEffect(() => {
    Api.get(`activities/?group=${id}&page=1`)
      .then((response) => setActivities(response.data.results))
      .catch((err) => console.log(err));
  });

  return (
    <Ul>
      <h3>Activities</h3>
      <Input
        value={input}
				size="small"
        label="Search a Activity"
        onChange={(e) => setInput(e.target.value)}
      />
      {input.length > 0
        ? activities
            .filter((item) =>
              item.title.toLowerCase().includes(input.toLowerCase())
            )
            .map((activity) => (
              <li key={activity.id}>
                <h3>{activity.title}</h3>
                <p>{activity.realization_time}</p>
                <div>
                  {update ? (
                    <EditActivity activity={activity} setUpdate={setUpdate} />
                  ) : (
                    <PrimaryButton size="small" onClick={() => setUpdate(!update)}>
                      Editar Atividade
                    </PrimaryButton>
                  )}
                  <FaTrashAlt onClick={() => deleteActivity(activity.id)} />
                </div>
              </li>
            ))
        : activities.map((activity) => (
            <li key={activity.id}>
              <h3>{activity.title}</h3>
              <p>{activity.realization_time}</p>
              <div>
                {update === activity.id ? (
                  <EditActivity activity={activity} setUpdate={setUpdate} />
                ) : (
                  <PrimaryButton onClick={() => setUpdate(activity.id)}>
                    Editar Atividade
                  </PrimaryButton>
                )}
                <FaTrashAlt onClick={() => deleteActivity(activity.id)} />
              </div>
            </li>
          ))}
    </Ul>
  );
};
export default Activities;
