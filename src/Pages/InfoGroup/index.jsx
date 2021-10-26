import Goals from "../../Components/Goals";
import NewGoal from "../../Components/NewGoal";
import Activities from "../../Components/Activities";
import NewActivity from "../../Components/NewActivity";
import Header from "../../Components/Header";
import { CardActivity } from "./style";
import { Card } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { GroupContext } from "../../Providers/Group";
import jwt from "jwt-decode";
import Api from "../../Services/API";
import { toast } from "react-toastify";
import {ContainerEditGroupCard, DivCard} from "../../Components/Card/style";
import {EditGroupCard} from "../../Components/EditGroup"

const InfoGroup = () => {
  const { id } = useParams();
  const { data } = useContext(GroupContext);
  const token = JSON.parse(localStorage.getItem("@Productive:token"));
  const userId = jwt(token);
  const [actived, setActived] = useState(false);
  
  const deleteGroup = (filt) => {
    Api.delete(`/groups/${filt.id}/unsubscribe/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        toast.success("Grupo Apagado!");
      })
      .catch((err) => console.log("erro", err));

    setActived(false);
  };

  return (
    <>
      <Header showM />
      <ul>
      {data
      .filter(info => info.id == id)
      .map(filt => (
        <li key={filt.id}>
          {filt.name}
          {filt.creator.id === userId.user_id 
          ?
          <ContainerEditGroupCard>
            {actived && (
            <EditGroupCard
            setActived={setActived}
            key={filt.id}
            actived={actived}
            item={filt}
          />
            )}
          <button className="buttonX" onClick={() => setActived(true)}></button>
          </ContainerEditGroupCard>
          : 
          <button onClick={() =>deleteGroup(filt)}>SAIR</button>
          }
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