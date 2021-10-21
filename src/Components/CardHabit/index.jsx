import { useState } from "react";
import { EditHabitsCard } from "../EditHabitsCard";
import { Background, DivCard, Container, Progress } from "./style";

// COMPONENTE PARA RENDERIZAR CADA CARD DOS HABITS / GROUPS / SEARCH-GROUPS
const CardHabit = ({ item, setButtonPopup }) => {
  const [actived, setActived] = useState(false);

  const myClickTeste = () => {
    setActived(true);
  };

  return (
    <>
      <EditHabitsCard actived={actived} setActived={setActived} item={item} />
      <DivCard onClick={() => myClickTeste()}>
        <>
          <li key={item.id}>
            <div className="divContainer">
              <button className="add"></button>
              <div className="title">
                <h3>{item.title}</h3>
                <p>Frequency: {item.frequency}</p>
              </div>
              <button className="gear"></button>
            </div>
            <p className="dificulty">Difficulty: {item.difficulty}</p>
            <Container>
              <Background />
              <Progress percent={item.how_much_achieved} />
            </Container>
          </li>
        </>
      </DivCard>
    </>
  );
};

export default CardHabit;
