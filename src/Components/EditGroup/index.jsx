import { useGroup } from "../../Providers/Group";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../Services/API";
import "./style.css";
import { ContainerEditGroup } from "./style";

export const EditGroupCard = ({ setEdit, id, actived, item, setActived }) => {
  const { handleEditGroup } = useGroup();
  const token = localStorage.getItem("@Productive:token");

  const schema = yup.object().shape({
    name: yup.string(),
    description: yup.string(),
    category: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSaveEdition = (values) => {
    handleEditGroup(values, id);
    setEdit(false);
  };

  /* Api.get(`/groups/${id}/`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => console.log(response))
    .catch((err) => console.log(err)); */

  console.log(actived);

  return (
    <>
      <div
        onSubmit={handleSubmit(onSaveEdition)}
        className={actived ? "editGroupTrue" : "editGroupFalse"}
      >
        <div>
          <div>
            <div>{item.name}</div>
            <div onClick={() => setActived(false)}>X</div>
          </div>

          <div>
            <input placeholder="Nova descrição" {...register("description")} />
            <button type="submit">Salvar</button>
            <button>Excluir Grupo</button>
          </div>
        </div>
      </div>
    </>
  );
};
