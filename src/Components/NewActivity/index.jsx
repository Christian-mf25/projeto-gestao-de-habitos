import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../Services/API";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Div } from "./style";
import { Input, PrimaryButton, SecondaryButton } from "../Styled/style";
import { IoAddSharp } from "react-icons/io5";

const NewActivity = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const token = JSON.parse(localStorage.getItem("@Productive:token"));
  const { id } = useParams();

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = ({ title, realization_time }) => {
    Api.post(
      `activities/`,
      {
        title: title,
        realization_time: realization_time,
        group: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((_) => {
        toast.success("Atividade criada");
        setButtonPopup(!buttonPopup);
      })
      .catch(() => {
        toast.error("Algo errado aconteceu");
      });
  };

  return (
    <>
      <Div>
        {buttonPopup ? (
          <form onSubmit={handleSubmit(submitFunction)}>
            {errors?.title?.message}
            <Input label="Titulo" size="small" {...register("title")} />
            <Input
              className="data"
              type="datetime-local"
              placeholder="Tempo de Realização"
              size="small"
              {...register("realization_time")}
            />
            <div className="atv-btn">
              <PrimaryButton size="small" type="submit">
                Criar
              </PrimaryButton>
              <SecondaryButton onClick={() => setButtonPopup(!buttonPopup)}>
                Cancelar
              </SecondaryButton>
            </div>
          </form>
        ) : (
          <IoAddSharp onClick={() => setButtonPopup(!buttonPopup)} />
        )}
      </Div>
    </>
  );
};
export default NewActivity;
