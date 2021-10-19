import { useEffect, useState } from "react";
import { useAuth } from "../../Providers/Auth";
import { useHistory, Link } from "react-router-dom";
import Group from "../../Components/Group";
import { Dialog } from "@mui/material";
import { useGroups } from "../../Providers/Groups";
import * as C from "./styles.js";
import NewGroup from "../../Components/NewGroup";
import Api from "../../Services/API";
import { toast } from "react-toastify";

const Groups = () => {
  const history = useHistory();

  const { auth } = useAuth();
  const { groups, setGroups } = useGroups();
  const [insertModal, setInsertModal] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    Api.get("/groups/subscriptions/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => setGroups(response.data))
      .catch((_) => toast.error("Algo deu errado."));
  }, [insertModal]);

  const handleClickInsertModal = () => setInsertModal(!insertModal);
  const handleClickCloseModal = () => setInsertModal(false);

  return (
    <C.Container>
      {auth ? (
        <div>
          <Link className="link" to="/allGroups">
            <button className="button" variant={"contained"}>
              Encontrar
            </button>
          </Link>
          <button
            className="button"
            variant={"contained"}
            onClick={handleClickInsertModal}
          >
            Novo grupo
          </button>
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
            {groups?.map((group) => {
              return (
                <li key={group.id}>
                  <Group group={group} />;
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
