import { GiHealthNormal, GiMeditation } from "react-icons/gi";
import { GroupsContext } from "../../Providers/SearchGroups";
import { Input } from "../../Components/Styled/style";
import { GroupContext } from "../../Providers/Group";
import { FaBrain, FaGamepad } from "react-icons/fa";
import Header from "../../Components/Header";
import { useContext, useState } from "react";
import { HiTemplate } from "react-icons/hi";
import { SectionFlex, Li } from "./style";
import { toast } from "react-toastify";
import Api from "../../Services/API";
import { Redirect } from "react-router-dom";

const SearchGroups = () => {
  const { groups } = useContext(GroupsContext);
  const { data } = useContext(GroupContext);
  const [input, setInput] = useState("");
  const token = JSON.parse(localStorage.getItem("@Productive:token")) || "";

  const subscribe = (id) => {
    Api.post(`/groups/${id}/subscribe/`, id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => toast.success("subscribed!"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      {token ? (
        <div>
          <Header showS />
          <SectionFlex>
            <Input
              value={input}
              label="Search Group"
              size="small"
              variant="outlined"
              margin="dense"
              onChange={(e) => setInput(e.target.value)}
            ></Input>
            <ul>
              {input.length > 0
                ? groups
                    .filter((result) =>
                      result.name.toLowerCase().includes(input.toLowerCase())
                    )
                    .map((filter, index) => (
                      <Li key={index}>
                        <span>
                          {filter.category === "Saúde" ? (
                            <GiHealthNormal />
                          ) : filter.category === "Educação" ? (
                            <FaBrain />
                          ) : filter.category === "Meditação" ? (
                            <GiMeditation />
                          ) : filter.category === "Lazer" ? (
                            <FaGamepad />
                          ) : (
                            <HiTemplate />
                          )}
                        </span>
                        <div>
                          <h3>{filter.name}</h3>
                          <p>{filter.description}</p>
                          <button
                            variant="contained"
                            onClick={() => subscribe(filter.id)}
                          >
                            Subscribe
                          </button>
                        </div>
                      </Li>
                    ))
                : groups
                    .filter(
                      (el) => !data?.find((element) => element.id === el.id)
                    )
                    .map((result, index) => (
                      <Li key={index}>
                        <span>
                          {result.category === "Saúde" ? (
                            <GiHealthNormal />
                          ) : result.category === "Educação" ? (
                            <FaBrain />
                          ) : result.category === "Meditação" ? (
                            <GiMeditation />
                          ) : result.category === "Lazer" ? (
                            <FaGamepad />
                          ) : (
                            <HiTemplate />
                          )}
                        </span>
                        <div>
                          <h3>{result.name}</h3>
                          <p>{result.description}</p>
                          <button
                            variant="contained"
                            onClick={() => subscribe(result.id)}
                          >
                            Subscribe
                          </button>
                        </div>
                      </Li>
                    ))}
            </ul>
          </SectionFlex>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};
export default SearchGroups;