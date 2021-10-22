import {
  ContainerEditGroup,
  DivNameGroup,
  ParagraphCloseModalGroup,
} from "../EditGroup/style";
import { PrimaryButton, SecondaryButton } from "../Styled/style";
import "./style.css";
import { ContainerEditGoal } from "./style.js";
const GoalsCardPopupEdit = ({
  goal,
  checkInFunction,
  deleteGoalFunction,
  setActived,
}) => {
  return (
    <div className="popup_Goal">
      <ContainerEditGoal className="containerEditHabit">
        <DivNameGroup>
          Adicionar Meta
          <ParagraphCloseModalGroup onClick={() => setActived(false)}>
            X
          </ParagraphCloseModalGroup>
        </DivNameGroup>
        <div className="container_checkinGoal">
          <h3>{goal.title}</h3>
          <h5>{goal.difficulty}</h5>
          <div className="btn-divGoalEdit">
            <PrimaryButton type="button" onClick={() => checkInFunction(goal)}>
              Check-in
            </PrimaryButton>
            <SecondaryButton
              type="button"
              onClick={() => deleteGoalFunction(goal.id)}
            >
              Deletar
            </SecondaryButton>
          </div>
        </div>
      </ContainerEditGoal>
    </div>
  );
};

export default GoalsCardPopupEdit;
