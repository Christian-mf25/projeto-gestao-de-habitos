import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../Services/API";
import { toast } from "react-toastify";
import { TextField } from "@material-ui/core";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { Container, TertiaryButton } from "./styles";
import { PrimaryButton, SecondaryButton } from "./styles";

const AddHabit = (props) => {
  const [value, setValue] = useState();
  const token = JSON.parse(localStorage.getItem("@Productive:token"));
  let userId = "";
  if (token) {
    userId = jwtDecode(token, { payload: true });
  }

  const schema = yup
    .object()
    .shape({ title: yup.string().required("Campo obrigatório") });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = ({ title, category, difficulty, frequency }) => {
    Api.post(
      "habits/",
      {
        title: title,
        category: category,
        difficulty: difficulty,
        frequency: frequency,
        achieved: false,
        how_much_achieved: 0,
        user: userId.user_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(
      (_) => (
        // eslint-disable-next-line no-sequences
        toast.success("Hábito adicionado com sucesso!"),
        props.setButtonPopup(!props.buttonPopup),
        update()
      )
    );
  };

  const update = () => {
    setValue({});
  };

  return props.trigger ? (
    <Container>
      <div className="popup-inner">
        <div className="popup-header">
          <h3>Criar novo hábito</h3>
          <button
            onClick={() => {
              update();
              props.setTrigger(false);
            }}
            className="cancel-btn"
          >
            X
          </button>
        </div>
        <form className="radioContainer" onSubmit={handleSubmit(submitForm)}>
          <TextField
            label="Title"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <div className="radioOptions">
            <div className="toggle">
              <h3>Categoria</h3>
              <div>
                <input
                  {...register("category")}
                  name="category"
                  type="radio"
                  value="Saúde"
                />
                <label>Saúde</label>
              </div>
              <div>
                <input
                  {...register("category")}
                  name="category"
                  type="radio"
                  value="Educação"
                />
                <label>Educação</label>
              </div>
              <div>
                <input
                  {...register("category")}
                  name="category"
                  type="radio"
                  value="Meditação"
                />
                <label>Meditação</label>
              </div>
              <div>
                <input
                  {...register("category")}
                  name="category"
                  type="radio"
                  value="Lazer"
                />
                <label>Lazer</label>
              </div>
              <div>
                <input
                  {...register("category")}
                  name="category"
                  type="radio"
                  value="Outro"
                />
                <label>Outro</label>
              </div>
            </div>
            <div className="toggle">
              <h3>Dificuldade</h3>
              <div>
                <input
                  {...register("difficulty")}
                  name="difficulty"
                  type="radio"
                  value="very_easy"
                />
                <label>Very Easy</label>
              </div>
              <div>
                <input
                  {...register("difficulty")}
                  name="difficulty"
                  type="radio"
                  value="easy"
                />
                <label>Easy</label>
              </div>
              <div>
                <input
                  {...register("difficulty")}
                  name="difficulty"
                  type="radio"
                  value="medium"
                />
                <label>Medium</label>
              </div>
              <div>
                <input
                  {...register("difficulty")}
                  name="difficulty"
                  type="radio"
                  value="hard"
                />
                <label>Hard</label>
              </div>
              <div>
                <input
                  {...register("difficulty")}
                  name="difficulty"
                  type="radio"
                  value="very_hard"
                />
                <label>Very Hard</label>
              </div>
            </div>
            <div className="toggle">
              <h3>Com qual frequência?</h3>
              <div>
                <input
                  {...register("frequency")}
                  name="frequency"
                  type="radio"
                  value="Diário"
                />
                <label>Diário</label>
              </div>
              <div>
                <input
                  {...register("frequency")}
                  name="frequency"
                  type="radio"
                  value="Semanal"
                />
                <label>Semanal</label>
              </div>
              <div>
                <input
                  {...register("frequency")}
                  name="frequency"
                  type="radio"
                  value="Mensal"
                />
                <label>Mensal</label>
              </div>
            </div>
          </div>
          <PrimaryButton className="addBtn" type="submit">
            Criar
          </PrimaryButton>
          <TertiaryButton
            className="cancelBtn"
            onClick={() => {
              props.setTrigger(!props.trigger);
            }}
          >
            Cancelar
          </TertiaryButton>
        </form>
      </div>
    </Container>
  ) : (
    ""
  );
};

export default AddHabit;
