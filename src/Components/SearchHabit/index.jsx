import { TextField } from "@material-ui/core";
import { useState } from "react";
import CardHabit from "../CardHabit";
import { SearchHabitsDiv } from "./styles";
import { Input } from "../../Components/Styled/style";

const SearchHabit = ({ habitsRes, setIsSearching }) => {
  const [userInput, setUserInput] = useState("");

  return (
    <SearchHabitsDiv>
      <form>
        <Input
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
                <div key={index}>
                  <CardHabit item={filter} />
                </div>
              )))
          : habitsRes?.map((item, index) => (
              <div key={index}>
                <CardHabit item={item} />
              </div>
            ))}
      </ul>
    </SearchHabitsDiv>
  );
};

export default SearchHabit;
