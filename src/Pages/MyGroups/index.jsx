import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Auth";
import { GroupContext } from "../../Providers/Group";
import { GroupsContext } from "../../Providers/SearchGroups";
import { useHistory, Link } from "react-router-dom";
import Group from "../../Components/Group";
import { Dialog } from "@material-ui/core";
import * as C from "./styles.js";
import NewGroup from "../../Components/NewGroup";
import Api from "../../Services/API";
import { toast } from "react-toastify";
import Header from "../../Components/Header";
import jwt_decode from "jwt-decode";

const Groups = () => {
  const history = useHistory();

  const { auth } = useContext(AuthContext);
  const { group, setGroup } = useContext(GroupContext);
  const [insertModal, setInsertModal] = useState(false);
  const { data } = useContext(GroupsContext);
  const [input, setInput] = useState("");

  const token = JSON.parse(localStorage.getItem("@Productive:token"));
  const decodedId = jwt_decode(token);

  useEffect(() => {
    Api.get("/groups/", {
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
      {!auth ? (
        <div>
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
                      <h3>{filter.name}no</h3>
                      <p>{filter.description}</p>
                      <span>{filter.category}</span>
                    </li>
                  ))
              : data?.map((item, index) => {
                  return (
                    <div key={index}>
                      {item.users_on_group.map((user, i) => {
                        if (user.id === decodedId.user_id) {
                          return (
                            <li key={user.id}>
                              <Group group={item} />
                            </li>
                          );
                        }
                      })}
                    </div>
                  );
                })}
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

          <ul>
            {data?.map((item, index) => {
              return (
                <div key={index}>
                  {/* console.log(item.users_on_group) */}
                  {item.users_on_group.map(
                    (user, i) =>
                      user.id === decodedId.user_id && (
                        <>
                          {/* {console.log("entrou")}
                          <li key={user.id}>
                            {console.log(user.id)}
                            <Group group={user} />;
                          </li> */}
                        </>
                      )
                  )}
                  {/* <li key={item.id}>
                    <Group group={item} />;
                  </li> */}
                </div>
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
