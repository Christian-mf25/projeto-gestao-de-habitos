import { useEffect, useState } from "react";
import AddHabit from "../../Components/AddHabit";
import Habits from "../../Components/Habits";
import Api from "../../Services/API";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import SearchHabit from "../../Components/SearchHabit";
// import { AuthContext } from "../../Providers/Auth";
import { useHistory } from "react-router";
import Header from "../../Components/Header";

const Dashboard = () => {
  // const { auth } = useContext(AuthContext);
  const history = useHistory();
  const [habitsRes, setHabitsRes] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const token = localStorage.getItem("@Productive:token");
  let userId = "";
  if (token) {
    userId = jwt_decode(token);
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
    <div>
      {token ? (
        <div>
          <Header showD />
          <SearchHabit
            getHabits={getHabits}
            habitsRes={habitsRes}
            setIsSearching={setIsSearching}
          />
          Dashboard
          <button onClick={() => setButtonPopup(!buttonPopup)}>
            Adicionar hábito
          </button>
          <AddHabit trigger={buttonPopup} setTrigger={setButtonPopup}>
            <form onSubmit={handleSubmit(submitForm)}>
              {errors?.title?.message}
              <input placeholder="Titulo" {...register("title")} />
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
              <button type="submit">Adicionar</button>
            </form>
          </AddHabit>
          {!isSearching && (
            <Habits getHabits={getHabits} habitsRes={habitsRes} />
          )}
        </div>
      ) : (
        history.push("/login")
      )}
    </div>
  );
};

export default Dashboard;
