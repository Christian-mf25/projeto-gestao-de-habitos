import { useState } from "react";
import { EditHabitsCard } from "../EditHabitsCard";
import { Background, DivCard, Container, Progress } from "./style";
import { GiHealthNormal, GiMeditation } from "react-icons/gi";
import { FaBrain, FaGamepad } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";

// COMPONENTE PARA RENDERIZAR CADA CARD DOS HABITS / GROUPS / SEARCH-GROUPS
const CardHabit = ({ item }) => {
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
            <span>
              {item.category === "Saúde" ? (
                <GiHealthNormal />
              ) : item.category === "Educação" ? (
                <FaBrain />
              ) : item.category === "Meditação" ? (
                <GiMeditation />
              ) : item.category === "Lazer" ? (
                <FaGamepad />
              ) : (
                <HiTemplate />
              )}
            </span>
            <section>
              <div className="divContainer">
                {/* <button className="add"></button> */}
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
            </section>
          </li>
        </>
      </DivCard>
    </>
  );
};

export default CardHabit;
