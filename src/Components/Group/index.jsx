import { toast } from "react-toastify";
import Api from "../../Services/API";
import * as C from "./styles";
import saude from "../../assets/images/hospital-category.png";

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

  return (
    <C.Container>
      <C.ContainerInfoCard>
        {/* <div>
          <figure>
            <img src={image} alt=""></img>
          </figure>
        </div> */}
        <div>
          <h3>{group.name}</h3>
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
