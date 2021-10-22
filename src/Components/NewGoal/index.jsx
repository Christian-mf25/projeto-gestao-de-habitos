import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../Services/API";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import {
  ContainerEditGroup,
  DivNameGroup,
  ParagraphCloseModalGroup,
} from "../EditGroup/style";
import { Input, PrimaryButton, SecondaryButton } from "../Styled/style";
import { IoAddSharp } from "react-icons/io5";

const NewGoal = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const token = JSON.parse(localStorage.getItem("@Productive:token"));
  const { id } = useParams();
  const [input, setInput] = useState("");

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = ({ title, difficulty }) => {
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
        setButtonPopup(false);
      })
      .catch(() => {
        toast.error("Algo errado aconteceu");
      });
  };

  return (
    <>
      <div>
        {buttonPopup ? (
          <div className="container_PopupCreateGoals">
            <ContainerEditGroup>
              <DivNameGroup>
                Adicionar Meta
                <ParagraphCloseModalGroup onClick={() => setButtonPopup(false)}>
                  X
                </ParagraphCloseModalGroup>
              </DivNameGroup>
              <div className="container_PopupCreateGoals-Form">
                <form
                  className="form_PopupCreateGoals"
                  onSubmit={handleSubmit(submitFunction)}
                >
                  {errors?.title?.message}
                  <Input
                    label="Título"
                    size="small"
                    variant="outlined"
                    margin="dense"
                    placeholder="Título"
                    onChange={(e) => setInput(e.target.value)}
                    {...register("title")}
                  />
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

                  <div className="btn-div">
                    <PrimaryButton type="submit">Criar</PrimaryButton>
                    <SecondaryButton
                      type="button"
                      onClick={() => setButtonPopup(false)}
                    >
                      Cancelar
                    </SecondaryButton>
                  </div>
                </form>
              </div>
            </ContainerEditGroup>
          </div>
        ) : (
          <div className="container_modalAdicionarMeta">
            <IoAddSharp onClick={() => setButtonPopup(!buttonPopup)} />
          </div>
        )}
      </div>
    </>
  );
};
export default NewGoal;
