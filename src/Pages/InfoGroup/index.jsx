import Goals from "../../Components/Goals";
import NewGoal from "../../Components/NewGoal";
import Activities from "../../Components/Activities";
import NewActivity from "../../Components/NewActivity";
import Header from "../../Components/Header";
import { Card } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { GroupContext } from "../../Providers/Group";
import jwt from "jwt-decode";
import Api from "../../Services/API";
import { toast } from "react-toastify";
import { CardActivity, GroupInfo, Allies, DescriptionGroup, Li } from "./style";
import { ContainerEditGroupCard, DivCard } from "../../Components/Card/style";
import { EditGroupCard } from "../../Components/EditGroup";

import { GiHealthNormal, GiMeditation } from "react-icons/gi";
import { FaBrain, FaGamepad } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";

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

  const icon = (item) => {
    return (
      <span>
        {item.category === "Saúde" ? (
          <GiHealthNormal />
        ) : item.category === "educacao" ? (
          <FaBrain />
        ) : item.category === "meditacao" ? (
          <GiMeditation />
        ) : item.category === "lazer" ? (
          <FaGamepad />
        ) : (
          <HiTemplate />
        )}
      </span>
    );
  };

  return (
    <>
      <Header showM />
      <ul>
        {data
          .filter((info) => info.id == id)
          .map((filt) => (
            <Li key={filt.id}>
              <GroupInfo>
                <div className="top">
                  <h3>{filt.name}</h3>
                  {filt.creator.id === userId.user_id ? (
                    <ContainerEditGroupCard className="div_infos_groups">
                      {actived && (
                        <EditGroupCard
                          setActived={setActived}
                          key={filt.id}
                          actived={actived}
                          item={filt}
                        />
                      )}
                      <button
                        className="buttonX"
                        onClick={() => setActived(true)}
                      ></button>
                    </ContainerEditGroupCard>
                  ) : (
                    <button onClick={() => deleteGroup(filt)}>SAIR</button>
                  )}
                </div>

                <div className="info">
                  <div>
                    <p>Categoria</p>
                    {icon(filt)}
                  </div>
                  <div>
                    <p>Participantes</p>
                    <p className="participants">
                      <BsFillPersonFill /> {filt.users_on_group.length}
                    </p>
                  </div>
                  <div>
                    <p>Metas</p>
                    <p className="target">
                      <FiTarget /> {filt.goals.length}
                    </p>
                  </div>
                </div>
              </GroupInfo>

              <DescriptionGroup>
                <h3 className="description_title">Descrição</h3>
                <p className="description">{filt.description}</p>
              </DescriptionGroup>

              <Allies>
                <p className="title">Aliados</p>
                {filt.users_on_group.map((user) => (
                  <p className="name">{user.username}</p>
                ))}
              </Allies>
            </Li>
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
