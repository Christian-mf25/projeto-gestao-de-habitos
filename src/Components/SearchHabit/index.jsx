import { TextField } from "@material-ui/core";
import { useState } from "react";
import { toast } from "react-toastify";
import Api from "../../Services/API";
import CardHabit from "../CardHabit";

const SearchHabit = ({ habitsRes, setIsSearching, getHabits }) => {
  const [userInput, setUserInput] = useState("");
  const token = JSON.parse(localStorage.getItem("@Productive:token"));

  const checkIn = (item) => {
    if (item.how_much_achieved < 30) {
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
    <div>
      <form>
        <TextField
          label="Search"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
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
          : habitsRes?.map((item, index) => (
              <div key={index}>
                <CardHabit item={item} />
              </div>
            ))}
      </ul>
    </div>
  );
};

export default SearchHabit;
