import { filter } from "dom-helpers";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Api from "../../Services/API";

const SearchHabit = ({ habitsRes, setIsSearching, getHabits }) => {
  const [userInput, setUserInput] = useState("");
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
      <form>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Search"
        />
      </form>
      <ul>
        {userInput.length > 0
          ? (setIsSearching(true),
            habitsRes
              .filter((item) =>
                item.title.toLowerCase().includes(userInput.toLowerCase())
              )
              .map((filter, index) => (
                <li key={index}>
                  <h3>{filter.title}</h3>
                  <p>{filter.category}</p>
                  <span>{filter.difficulty}</span>
                  <p>{filter.frequency}</p>
                  <p>{filter.how_much_achieved}</p>
                  <button onClick={() => checkIn(filter)}>Check-in</button>
                  <button onClick={() => deleteHabit(filter.id)}>
                    Deletar
                  </button>
                </li>
              )))
          : setIsSearching(false)}
      </ul>
    </div>
  );
};

export default SearchHabit;
