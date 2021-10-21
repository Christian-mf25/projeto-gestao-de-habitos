import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../Services/API";
import "./style.css";
import {
  ContainerEditGroup,
  DivNameGroup,
  TextFieldDescriptionGroup,
  ContainedGroup,
  SecondaryButton,
} from "./style";
import { PrimaryButton } from "../../Components/Styled/style";

import { ParagraphCloseModalGroup } from "./style";

export const EditGroupCard = ({ setEdit, id, actived, item, setActived }) => {
  const token = JSON.parse(localStorage.getItem("@Productive:token"));

  const schema = yup.object().shape({
    name: yup.string(),
    description: yup.string(),
    category: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const patchGroup = (data, event) => {
    Api.patch(
      `/groups/${item.id}/`,
      {
        description: `${data.description}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(() => {
        toast.success("Descrição atualizada!");
      })
      .catch((err) => console.log("erro", err));
    setActived(false);
  };

  const deleteGroup = () => {
    Api.delete(`/groups/${item.id}/unsubscribe/`, {
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
      <div
        /* onSubmit={handleSubmit(onSaveEdition)} */
        className={
          actived ? "editGroupTrue editGroup" : "editGroupFalse editGroup"
        }
      >
        <ContainerEditGroup>
          <DivNameGroup>
            {item.name}
            <ParagraphCloseModalGroup onClick={() => setActived(false)}>
              X
            </ParagraphCloseModalGroup>
          </DivNameGroup>
          <br />
          <ContainedGroup>
            <div>
              <p>Category:</p>
              <p>{item.category}</p>
              <br />
              <br />

              <form onSubmit={handleSubmit(patchGroup)}>
                <TextFieldDescriptionGroup
                  key={item.id}
                  id="outlined-helperText"
                  label="Description"
                  defaultValue={item.description || ""}
                  {...register("description")}
                />
                {/* <button type="submit">Salvar</button> */}
                <div className="area_buttons">
                  <PrimaryButton type="submit" name="VictorVarela">
                    Salvar
                  </PrimaryButton>
                </div>
              </form>
              <SecondaryButton
                name="AnnaLuiza"
                type="submit"
                onClick={() => deleteGroup()}
              >
                Excluir Grupo
              </SecondaryButton>
            </div>
          </ContainedGroup>
        </ContainerEditGroup>
      </div>
    </>
  );
};
