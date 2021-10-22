import { useState } from "react";
import { ParagraphCloseModalGroup } from "../EditGroup/style";
import GoalsCardPopupEdit from "../GoalsCardPopupEdit";
import "./style.css";
const GoalsCard = ({ goal, checkInFunction, deleteGoalFunction }) => {
  const [actived, setActived] = useState(false);

  const handleClickDetailsGoal = () => {
    setActived(true);
  };
  return (
    <div className="card_Goal">
      <div className="card_GoalHead">
        <h3>
          {goal.title.length >= 20
            ? `${goal.title.substring(0, 24)}...`
            : `${goal.title.substring(0, 24)}`}
        </h3>
        <ParagraphCloseModalGroup onClick={() => handleClickDetailsGoal()}>
          edit
        </ParagraphCloseModalGroup>
      </div>
      <p>{goal.difficulty}</p>
      <p>{goal.achieved}</p>
      <span>{goal.how_much_achieved}</span>
      {actived && (
        <GoalsCardPopupEdit
          goal={goal}
          checkInFunction={checkInFunction}
          deleteGoalFunction={deleteGoalFunction}
          setActived={setActived}
        />
      )}
    </div>
  );
};

export default GoalsCard;
