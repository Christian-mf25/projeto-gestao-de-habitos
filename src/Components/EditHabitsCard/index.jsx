import Api from "../../Services/API";
import "./style.css";
import { ContainerEditGroup, DivNameGroup } from "./style";

import { ParagraphCloseModalGroup } from "./style";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export const EditHabitsCard = ({ setEdit, id, actived, item, setActived }) => {
  const token = JSON.parse(localStorage.getItem("@Productive:token"));
  const [value, setValue] = useState();

  const checkIn = (item) => {
    if (item.how_much_achieved < 50) {
      item.how_much_achieved += 1;
    } else {
      item.achieved = true;
    }
    Api.patch(
      `habits/${item.id}/`,
      {
        how_much_achieved: item.how_much_achieved,
        achieved: item.achieved,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(() => {
      toast.success("Check-in realizado!");
      handleRefresh();
    });
  };

  const deleteHabit = (id) => {
    Api.delete(`habits/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      toast.success("Hábito removido");
      handleRefresh();
    });
  };

  const handleRefresh = () => {
    setValue({});
  };

  return (
    <>
      <div className={actived ? "editGroupTrue" : "editGroupFalse"}>
        <ContainerEditGroup>
          <DivNameGroup>
            {item.title}
            <ParagraphCloseModalGroup onClick={() => setActived(false)}>
              X
            </ParagraphCloseModalGroup>
          </DivNameGroup>
          <br />
          <div>
            <p>Category: {item.category}</p>
            <p>Meta: 30</p>
            <p>Atual: {item.how_much_achieved}</p>
            <button
              onClick={() => checkIn(item)}
              className="check-in"
              type="submit"
            >
              Check-in
            </button>
            <button onClick={() => deleteHabit(item.id)} className="delete">
              Delete
            </button>
          </div>
        </ContainerEditGroup>
      </div>
    </>
  );
};
