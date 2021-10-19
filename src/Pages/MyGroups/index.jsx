import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Auth";
import { GroupContext } from "../../Providers/Group";
import { useHistory, Link } from "react-router-dom";
import Group from "../../Components/Group";
import { Dialog } from "@mui/material";
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
          <Link className="link" to="/mygroups">
            <button>Encontrar</button>
          </Link>
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
