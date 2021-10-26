import Goals from "../../Components/Goals";
import Activities from "../../Components/Activities";
import NewActivity from "../../Components/NewActivity";
import Header from "../../Components/Header";
import { CardActivity } from "./style";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GroupContext } from "../../Providers/Group";

const InfoGroup = () => {
  const { id } = useParams();
  const { data } = useContext(GroupContext);

  return (
    <>
      <Header showM />
      <ul>
      {data
      .filter(info => info.id == id)
      .map(filt => (
        <li key={filt.id}>
          {filt.name}
          {filt.creator.username}
          Categoria: {filt.category}
          Participantes: {filt.users_on_group.length}
          Metas: {filt.goals.length}
          Descrição: {filt.description}
          Aliados: {filt.users_on_group
          .map(user => user.username)}
        </li>
      ))}
      </ul>


      <Goals />

      <CardActivity>
        <NewActivity />
        <Activities />
      </CardActivity>
    </>
  );
};

export default InfoGroup;