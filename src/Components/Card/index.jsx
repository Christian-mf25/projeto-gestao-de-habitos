import { useState } from "react";
import { EditGroupCard } from "../EditGroup";
import Group from "../Group";
import { ContainerEditGroupCard, DivCard } from "./style";

// COMPONENTE PARA RENDERIZAR CADA CARD DOS HABITS / GROUPS / SEARCH-GROUPS
const Card = ({ item }) => {
  const [actived, setActived] = useState(false);

  const handleClickEditCard = () => {
    setActived(true);
  };
  return (
    <ContainerEditGroupCard>
      <EditGroupCard
        key={item.id}
        actived={actived}
        setActived={setActived}
        item={item}
      />
      <DivCard onClick={() => handleClickEditCard()}>
        <>
          <div key={item.id}>
            <Group group={item} />
          </div>
        </>
      </DivCard>
    </ContainerEditGroupCard>
  );
};

export default Card;
