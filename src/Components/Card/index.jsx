import { useState } from "react";
import { EditGroupCard } from "../EditGroup";
import Group from "../Group";
import { DivCard } from "./style";
import "./style.css";

// COMPONENTE PARA RENDERIZAR CADA CARD DOS HABITS / GROUPS / SEARCH-GROUPS
const Card = ({ item }) => {
  const [actived, setActived] = useState(false);

  const myClickTeste = () => {
    setActived(true);
  };
  console.log("item", item);
  return (
    <>
      <EditGroupCard actived={actived} setActived={setActived} item={item} />
      <DivCard onClick={() => myClickTeste()}>
        <>
          <div key={item.id}>
            <Group group={item} />
          </div>
        </>
      </DivCard>
    </>
  );
};

export default Card;
