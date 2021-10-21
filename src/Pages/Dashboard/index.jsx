import { useEffect, useState } from "react";
import AddHabit from "../../Components/AddHabit";
import Habits from "../../Components/Habits";
import Api from "../../Services/API";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import SearchHabit from "../../Components/SearchHabit";
import { Redirect } from "react-router";
import Header from "../../Components/Header";
import { Button, TextField } from "@material-ui/core";
import { HabitsPage } from "./styles";

const Dashboard = () => {
  const [habitsRes, setHabitsRes] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const token = JSON.parse(localStorage.getItem("@Productive:token"));
  // const [userId, setUserId] = useState("");
  let userId = "";
  if (token) {
    userId = jwtDecode(token, { payload: true });
  }
  console.log(token);
  console.log(userId.user_id);
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
        setButtonPopup(!buttonPopup),
        getHabits()
      )
    );
  };

  const getHabits = () => {
    Api.get("habits/personal/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setHabitsRes(res.data));
  };

  useEffect(() => {
    getHabits();
  }, []);
  return (
    <HabitsPage>
      {token ? (
        <div className="divHabits">
          <Header showD />
          <button
            className="addHabitButton"
            onClick={() => setButtonPopup(!buttonPopup)}
          >
            Adicionar hábito
          </button>
          <SearchHabit
            getHabits={getHabits}
            habitsRes={habitsRes}
            setIsSearching={setIsSearching}
          />
          <AddHabit trigger={buttonPopup} setTrigger={setButtonPopup}>
            <form onSubmit={handleSubmit(submitForm)}>
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
              <label for="category">Categoria</label>
              <select id="category" name="category" {...register("category")}>
                <option value="saude">Saúde</option>
                <option value="educacao">Educação</option>
                <option value="meditacao">Meditação</option>
                <option value="lazer">Lazer</option>
                <option value="outro">Outro</option>
              </select>
              <label for="difficulty">Dificuldade</label>
              <select
                id="difficulty"
                name="difficulty"
                {...register("difficulty")}
              >
                <option value="very_easy">Muito fácil</option>
                <option value="easy">Fácil</option>
                <option value="medium">Médio</option>
                <option value="hard">Difícil</option>
                <option value="very_hard">Muito difícil</option>
              </select>
              <label for="frequency">Frequência</label>
              <select
                id="frequency"
                name="frequency"
                {...register("frequency")}
              >
                <option value="daily">Diário</option>
                <option value="weekly">Semanal</option>
                <option value="bi_weekly">Uma vez a cada duas semanas</option>
                <option value="monthly">Uma vez ao mês</option>
              </select>
              <Button type="submit" variant="contained" color="primary">
                Adicionar
              </Button>
            </form>
          </AddHabit>
          {!isSearching && (
            <Habits getHabits={getHabits} habitsRes={habitsRes} />
          )}
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </HabitsPage>
  );
};

export default Dashboard;
