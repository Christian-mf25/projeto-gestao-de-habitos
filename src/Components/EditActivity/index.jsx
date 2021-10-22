import Api from "../../Services/API";
import { toast } from "react-toastify";
import { useState } from "react";
import { Input, PrimaryButton } from "../Styled/style";
import { Div } from "./style";

const EditActivity = ({ activity, setUpdate }) => {
  const [title, setTitle] = useState("");
  const token = JSON.parse(localStorage.getItem("@Productive:token"));
  const updateActivity = (activity) => {
    Api.patch(
      `/activities/${activity.id}/`,
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
    <Div>
      <Input
        size="small"
        value={title}
        label="Edit activity"
        onChange={(e) => setTitle(e.target.value)}
      />
      <PrimaryButton onClick={() => updateActivity(activity)}>
        Edit
      </PrimaryButton>
    </Div>
  );
};

export default EditActivity;
