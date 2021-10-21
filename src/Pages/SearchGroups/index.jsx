import Header from "../../Components/Header";
import { GroupsContext } from "../../Providers/SearchGroups";
import { useContext, useState } from "react";
import Api from "../../Services/API";
import { toast } from "react-toastify";
import { GroupContext } from "../../Providers/Group";
import { Input } from "../../Components/Styled/style";
import { SectionFlex, Li } from "./style";

import { GiHealthNormal, GiMeditation } from "react-icons/gi";
import { FaBrain, FaGamepad } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";

const SearchGroups = () => {
  const { groups } = useContext(GroupsContext);
  const { data } = useContext(GroupContext);
  const [input, setInput] = useState("");
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("@Productive:token") || "";
    return JSON.parse(localToken);
  });
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
                .filter((el) => !data?.find((element) => element.id === el.id))
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
    </>
  );
};
export default SearchGroups;
