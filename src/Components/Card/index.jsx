import { useState } from "react";
import { useHistory } from "react-router";
import { EditGroupCard } from "../EditGroup";
import Group from "../Group";
import { ContainerEditGroupCard, DivCard } from "./style";

// COMPONENTE PARA RENDERIZAR CADA CARD DOS HABITS / GROUPS / SEARCH-GROUPS
const Card = ({ item }) => {
  const [actived, setActived] = useState(false);
  const history = useHistory();

  const handleSendToGroupPage = (id) => {
    history.push(`/group/${id}`);
  };
  return (
    <ContainerEditGroupCard>
      {actived && (
        <EditGroupCard
          setActived={setActived}
          key={item.id}
          actived={actived}
          item={item}
        />
      )}
      <button className="buttonX" onClick={() => setActived(true)}></button>
      <DivCard onClick={() => handleSendToGroupPage(item.id)}>
        <>
          <div key={item.id}>
            <Group group={item} actived={actived} />
          </div>
        </>
      </DivCard>
    </ContainerEditGroupCard>
  );
};

export default Card;
