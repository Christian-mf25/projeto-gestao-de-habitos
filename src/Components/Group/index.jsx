import { toast } from "react-toastify";
import Api from "../../Services/API";
import * as C from "./styles";

const Group = ({ group }) => {
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

  const handleClick = (group) => {
    Api.patch(`/groups/${group.id}`);
  };

  return (
    <C.Container onClick={() => handleClick(group)}>
      <h1>
        Nome: {group.name} id:{group.id}
      </h1>
      <p>Categoria: {group.category}</p>
      <p>Descrição: {group.description}</p>

      <button onClick={deleteGroup}>Deletar</button>
      <button>Editar grupo</button>
    </C.Container>
  );
};

export default Group;
