import { useContext, useEffect, useState } from "react";
import { GroupContext } from "../../Providers/Group";
import { useHistory } from "react-router-dom";
import Group from "../../Components/Group";
import { Dialog } from "@material-ui/core";
import * as C from "./styles.js";
import NewGroup from "../../Components/NewGroup";
import Api from "../../Services/API";
import Header from "../../Components/Header";
import { EditGroupCard } from "../../Components/EditGroup";

const Groups = () => {
  const history = useHistory();

  const { group, setGroup } = useContext(GroupContext);
  const [insertModal, setInsertModal] = useState(false);
  const { data } = useContext(GroupContext);
  const [input, setInput] = useState("");

  const token = JSON.parse(localStorage.getItem("@Productive:token"));

  useEffect(() => {
    Api.get("/groups/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => setGroup(response.data))
      .catch((err) => console.log(err));
  }, [insertModal]);

  const handleClickInsertModal = () => setInsertModal(!insertModal);
  const handleClickCloseModal = () => setInsertModal(false);

  return (
    <C.Container>
      <Header />
      {token ? (
        <div>
          <EditGroupCard />
          <button onClick={handleClickInsertModal}>Criar grupo</button>
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
              : data?.map((item, index) => (
                  <div key={index}>
                    <li key={item.id}>
                      <Group group={item} />
                    </li>
                  </div>
                ))}
          </ul>
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
        </div>
      ) : (
        history.push("/login")
      )}
    </C.Container>
  );
};

export default Groups;
