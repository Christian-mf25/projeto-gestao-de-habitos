import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Api from "../../Services/API";
import { toast } from "react-toastify";

const NewGroup = () => {
  const [, /*selected*/ setSelected] = useState("");
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

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelected(value);
  };

  const submitFunction = ({ name, category, description }) => {
    const user = { name, category, description };

    Api.post(`groups/`, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        toast.success("Grupo criado");
      })
      .catch((err) => {
        toast.error("Algo errado aconteceu");
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(submitFunction)}>
          <div>
            <input
              type="text"
              placeholder="Título"
              {...register("name")}
              required
            />
          </div>
          <p>Categoria</p>
          <div>
            <div onChange={(event) => handleSelectChange(event)}>
              <input
                type="radio"
                name="radio"
                value=""
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                required
              />
              <label>
                <p>Saúde</p>
              </label>
            </div>

            <div onChange={(event) => handleSelectChange(event)}>
              <input
                type="radio"
                name="radio"
                value=""
                {...register("category")}
                required
              />
              <label>
                <p>Estudos</p>
              </label>
            </div>

            <div onChange={(event) => handleSelectChange(event)}>
              <input
                type="radio"
                name="radio"
                value="focus"
                {...register("category")}
                required
              />
              <label>
                <p>Alimentação</p>
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="description">Descreva seu grupo:</label>
            <textarea
              {...register("description")}
              id="description"
              required
              placeholder="Descreva seu grupo"
            ></textarea>
          </div>
          <div>
            <button type="submit">Criar</button>
            <button>Cancelar</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default NewGroup;
