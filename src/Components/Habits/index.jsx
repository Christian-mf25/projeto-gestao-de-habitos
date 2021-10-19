import { toast } from "react-toastify";
import Api from "../../Services/API";

const Habits = ({ getHabits, habitsRes }) => {
  const achieved = habitsRes.filter((item) => item.achieved === true);
  const notAchieved = habitsRes.filter((item) => item.achieved === false);
  const token = JSON.parse(localStorage.getItem("@Productive:token"));

  const checkIn = (item) => {
    if (item.how_much_achieved < 50) {
      item.how_much_achieved += 1;
    } else {
      item.achieved = true;
    }
    Api.patch(
      `habits/${item.id}/`,
      {
        how_much_achieved: item.how_much_achieved,
        achieved: item.achieved,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(() => {
      toast.success("Hábito editado");
      getHabits();
    });
  };

  const deleteHabit = (id) => {
    Api.delete(`habits/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      toast.success("Hábito removido");
      getHabits();
    });
  };

  return (
    <div>
      <p>Atuais:</p>
      {notAchieved.map((item) => (
        <div key={item.id}>
          <p>Nome: {item.title}</p>
          <p>Categoria: {item.category}</p>
          <p>Frequencia: {item.frequency}</p>
          <p>Alcançado: {item.how_much_achieved}</p>
          <button onClick={() => checkIn(item)}>Check-in</button>
          <button onClick={() => deleteHabit(item.id)}>Deletar</button>
        </div>
      ))}
      <p>Concluídos</p>
      {achieved.map((item) => (
        <div key={item.id}>
          <p>Nome: {item.title}</p>
          <p>Categoria:{item.category}</p>
          <p>Frequencia: {item.frequency}</p>
        </div>
      ))}
    </div>
  );
};

export default Habits;
