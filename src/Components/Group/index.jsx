import { useHistory } from "react-router";
import { toast } from "react-toastify";
import Api from "../../Services/API";
import * as C from "./styles";

const Group = ({ group }) => {
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("@Productive:token"));

  const deleteGroup = () => {
    Api.delete(`groups/${group.id}/unsubscribe/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        toast.success("Grupo removido");
      })
      .catch((err) => {
        toast.error("Algo errado aconteceu");
      });
  };

  // const handleClick = (group) => {
  //   history.push(`/groups/${group.id}`);
  // };

  return (
    <C.Container>
      <h3>{group.name}</h3>
      <p>Description: {group.description}</p>
      <p>{group.category}</p>

      <button onClick={deleteGroup}>Deletar</button>
      <button>Editar grupo</button>
    </C.Container>
  );
};

export default Group;
