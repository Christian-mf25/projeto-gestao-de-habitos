import Api from "../../Services/API";
import {toast} from "react-toastify";
import {useState} from "react";

const EditActivity = ({activity, setUpdate}) => {
    const [title, setTitle] = useState("")
    const token = JSON.parse(localStorage.getItem("@Productive:token"));
    const updateActivity = (activity) => {
        Api.patch(`/activities/${activity.id}/`,
          {
            title: title,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        ).then(() => {
          toast.success("Atividade editada!");
          setUpdate("");
        });
    };

    return (
        <>
            <input value={title} placeholder="Edit activity" onChange={(e) => setTitle(e.target.value)} ></input>
            <button onClick={() => updateActivity(activity)}>Edit</button>
        </>
    )
}

export default EditActivity;