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
import Card from "../../Components/Card/";
import "./style.css";

const Groups = () => {
  const history = useHistory();

  const { group, setGroup } = useContext(GroupContext);
  const [insertModal, setInsertModal] = useState(false);
  const { data } = useContext(GroupContext);
  const [input, setInput] = useState("");

  const token = JSON.parse(localStorage.getItem("@Productive:token"));

  const handleClickInsertModal = () => {
    setInsertModal(!insertModal);
    Api.get("/groups/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => setGroup(response.data))
      .catch((err) => console.log(err));
  };
  const handleClickCloseModal = () => {
    setInsertModal(false);
    Api.get("/groups/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => setGroup(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <C.Container>
      <Header />
      {token ? (
        <div>
          <input
            value={input}
            placeholder="Search Group"
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button onClick={handleClickInsertModal}>Criar grupo</button>
          <ul className="box_list_groups">
            {input.length > 0
              ? data
                  .filter((result) =>
                    result.name.toLowerCase().includes(input.toLowerCase())
                  )
                  .map((filter, index) => (
                    <li className="list_groups" key={index}>
                      <Card item={filter} />
                    </li>
                  ))
              : data?.map((item, index) => (
                  <li className="list_groups" key={index}>
                    <Card item={item} />
                  </li>
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