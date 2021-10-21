import { useState } from "react";
import { EditGroupCard } from "../EditGroup";
import Group from "../Group";
import { ContainerEditGroupCard, DivCard } from "./style";
// import "./style.css";

// COMPONENTE PARA RENDERIZAR CADA CARD DOS HABITS / GROUPS / SEARCH-GROUPS
const Card = ({ item }) => {
  const [actived, setActived] = useState(false);

  const myClickTeste = () => {
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
      <DivCard onClick={() => myClickTeste()}>
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
