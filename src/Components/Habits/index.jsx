import { useState } from "react";
import { toast } from "react-toastify";
import Api from "../../Services/API";
import EditHabit from "../EditHabit";
import { HabitsContainer } from "./styles";

const Habits = ({ getHabits, habitsRes }) => {
  const achieved = habitsRes.filter((item) => item.achieved === true);
  const notAchieved = habitsRes.filter((item) => item.achieved === false);
  const [isEditing, setIsEditing] = useState(false);
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
      toast.success("Check-in realizado!");
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
    <HabitsContainer>
      <p>Atuais:</p>

      {/* {notAchieved.map((item) => (
        <div className="divHabit" key={item.id}>
          <EditHabit
            item={item}
            setIsEditing={setIsEditing}
            trigger={isEditing}
          />
          <button
            className="editButton"
            onClick={() => setIsEditing(true)}
          ></button>
          <p>{item.title}</p>
          <p>Frequency: {item.frequency}</p>
          <p>Alcançado: {item.how_much_achieved}</p>
        </div>
      ))}
      <p>Concluídos</p>
      {achieved.map((item) => (
        <div key={item.id}>
          <p>Nome: {item.title}</p>
          <p>Categoria:{item.category}</p>
          <p>Frequencia: {item.frequency}</p>
        </div>
      ))} */}
    </HabitsContainer>
  );
};

export default Habits;
