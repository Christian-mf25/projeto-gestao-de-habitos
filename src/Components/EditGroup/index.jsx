import { useGroup } from "../../Providers/Group";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../Services/API";

export const EditGroupCard = ({ setEdit, id }) => {
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

  Api.get(`/groups/${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(({name, description, category}) = response.data)
      .catch((err) => console.log(err));


  return (
    <>
      <div onSubmit={handleSubmit(onSaveEdition)}>
        <div>
          <input placeholder="Novo nome" {...register("name")} />
          <input placeholder="nova categoria" {...register("category")} />
          <input placeholder="Nova descrição" {...register("description")} />
          <button type="submit">Editar</button>
        </div>
      </div>
    </>
  );
};
