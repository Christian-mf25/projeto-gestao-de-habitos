import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../Services/API";
import { toast } from "react-toastify";
import {useParams} from "react-router-dom";
import {useState} from "react";

const NewActivity = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const token = JSON.parse(localStorage.getItem("@Productive:token"));
    const {id} = useParams();

    const schema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        realization_time: yup.string().required("Campo obrigatório"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const submitFunction = ({ title, realization_time}) => {
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
      <div>
        {buttonPopup ?
        <form onSubmit={handleSubmit(submitFunction)}>
          {errors?.title?.message}
          <input placeholder="Titulo" {...register("title")} />
          <input type="datetime-local" placeholder="Tempo de Realização" {...register("realization_time")} />
          <button type="submit">Criar</button>
        </form>
        : <button onClick={() => setButtonPopup(!buttonPopup)}>
            Adicionar Atividade
        </button>
        }
      </div>
    </>
  );
};
export default NewActivity;