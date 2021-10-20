import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../Services/API";
import { toast } from "react-toastify";
import {useParams} from "react-router-dom";
import {useState} from "react";

const NewGoal = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const token = JSON.parse(localStorage.getItem("@Productive:token"));
    const {id} = useParams();

    const schema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        difficulty: yup.string().required("Campo obrigatório"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const submitFunction = ({ title, difficulty}) => {
        Api.post(
        `goals/`,
        {
            title: title,
            difficulty: difficulty,
            how_much_achieved: 0,
            group: id,
        },
        {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        }
        )
        .then((_) => {
            toast.success("Meta criada");
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
          <label for="difficulty">Dificuldade</label>
              <select
                id="difficulty"
                name="difficulty"
                {...register("difficulty")}
              >
                <option value="fácil">Fácil</option>
                <option value="médio">Médio</option>
                <option value="difícil">Difícil</option>
              </select>
          <button type="submit">Criar</button>
        </form>
        : <button onClick={() => setButtonPopup(!buttonPopup)}>
            Adicionar Meta
        </button>
        }
      </div>
    </>
  );
};
export default NewGoal;