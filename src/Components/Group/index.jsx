import { toast } from "react-toastify";
import Api from "../../Services/API";
import * as C from "./styles";
import { GiHealthNormal, GiMeditation } from "react-icons/gi";
import { FaBrain, FaGamepad } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";

const Group = ({ group, actived }) => {
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
        <span>
          {group.category === "Saúde" ? (
            <GiHealthNormal />
          ) : group.category === "Educação" ? (
            <FaBrain />
          ) : group.category === "Meditação" ? (
            <GiMeditation />
          ) : group.category === "Lazer" ? (
            <FaGamepad />
          ) : (
            <HiTemplate />
          )}
        </span>
        <div className="info">
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
    </C.Container>
  );
};

export default Group;
