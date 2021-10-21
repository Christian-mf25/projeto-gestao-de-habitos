import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../Services/API";
import { toast } from "react-toastify";
import { NewGroupCont } from "./styles";
import { Input, PrimaryButton, SecondaryButton } from "../Styled/style";
import { AiOutlineClose } from "react-icons/ai";

const NewGroup = ({ handleClickInsertModal }) => {
  const token = JSON.parse(localStorage.getItem("@Productive:token"));

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = ({ name, category, description }) => {
    Api.post(
      `groups/`,
      {
        name: name,
        category: category,
        description: description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((_) => {
        toast.success("Grupo criado");
      })
      .catch((err) => {
        toast.error("Algo errado aconteceu");
      });
  };

  return (
    <NewGroupCont>
      <div className="cont-div">
        <div className="top">
          <h1>Adicionar grupo</h1>
          <span>
            <AiOutlineClose type="button" onClick={handleClickInsertModal} />
          </span>
        </div>
        <form onSubmit={handleSubmit(submitFunction)}>
          {errors?.title?.message}
          <Input placeholder="Titulo" {...register("name")} />
          <label for="category">Categoria</label>
          <select id="category" name="category" {...register("category")}>
            <option value="saude">Saúde</option>
            <option value="educacao">Educação</option>
            <option value="meditacao">Meditação</option>
            <option value="lazer">Lazer</option>
            <option value="outro">Outro</option>
          </select>
          <Input
            className="text"
            placeholder="Descrição"
            {...register("description")}
          />
          <div className="btn-div">
            <PrimaryButton type="submit">Criar</PrimaryButton>
            <SecondaryButton type="button" onClick={handleClickInsertModal}>
              Cancelar
            </SecondaryButton>
          </div>
        </form>
      </div>
    </NewGroupCont>
  );
};
export default NewGroup;
