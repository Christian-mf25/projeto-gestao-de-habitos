import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Auth";
import { GroupContext } from "../../Providers/Group";
import { GroupsContext } from "../../Providers/SearchGroups";
import { useHistory } from "react-router-dom";
import Group from "../../Components/Group";
import { Dialog } from "@material-ui/core";
import * as C from "./styles.js";
import NewGroup from "../../Components/NewGroup";
import Api from "../../Services/API";
import { toast } from "react-toastify";
import Header from "../../Components/Header";

const Groups = () => {
  const history = useHistory();

  const { auth } = useContext(AuthContext);
  const { group, setGroup } = useContext(GroupContext);
  const [insertModal, setInsertModal] = useState(false);
  const { data } = useContext(GroupsContext);
  const [input, setInput] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    Api.get("/groups/subscriptions/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => setGroup(response.data))
      .catch((_) => toast.error("Algo deu errado."));
  }, [insertModal]);

  const handleClickInsertModal = () => setInsertModal(!insertModal);
  const handleClickCloseModal = () => setInsertModal(false);

  return (
    <C.Container>
      <Header />
      {auth ? (
        <div>
          <input
            value={input}
            placeholder="Search Group"
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <ul>
            {input.length > 0
              ? data
                  .filter((result) =>
                    result.name.toLowerCase().includes(input.toLowerCase())
                  )
                  .map((filter, index) => (
                    <li key={index}>
                      <h3>{filter.name}</h3>
                      <p>{filter.description}</p>
                      <span>{filter.category}</span>
                    </li>
                  ))
              : data.map((result, index) => (
                  <li key={index}>
                    <h3>{result.name}</h3>
                    <p>{result.description}</p>
                    <span>{result.category}</span>
                  </li>
                ))}
          </ul>
          <button onClick={handleClickInsertModal}>Criar grupo</button>
          <div>
            <Dialog
              open={insertModal}
              onClose={handleClickCloseModal}
              aria-labelledby="responsive-dialog-title"
            >
              {insertModal && (
                <NewGroup handleClickInsertModal={handleClickCloseModal} />
              )}
            </Dialog>
          </div>

          <ul>
            {group?.map((item) => {
              return (
                <li key={item.id}>
                  <Group group={item} />;
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        history.push("/login")
      )}
    </C.Container>
  );
};

export default Groups;
