import { toast } from "react-toastify";
import Api from "../../Services/API";
import * as C from "./styles";

const Group = ({ group, actived }) => {
  const token = JSON.parse(localStorage.getItem("@Productive:token"));
  // const [actived, setActived] = useState(false);

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

  return (
    <C.Container>
      <C.ContainerInfoCard>
        <div>
          <div className="groupHeader">
            <h3>{group.name}</h3>
          </div>
          <p>
            Description:
            <br />
            {group.description}
          </p>
        </div>
      </C.ContainerInfoCard>
      <br />
      <p>{group.category}</p>

      {/* <button onClick={deleteGroup}>Deletar</button>
      <button>Editar grupo</button> */}
    </C.Container>
  );
};

export default Group;
