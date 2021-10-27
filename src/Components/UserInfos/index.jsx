import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../Services/API";
import { UserInfosCard } from "./style";
import { toast } from "react-toastify";
import "./style.css";
import {
  PrimaryButton,
  SecondaryButton,
  TextFieldDescriptionGroup,
} from "../EditGroup/style";

import jwt_decode from "jwt-decode";
import { BiUserCircle } from "react-icons/bi";

const UserInfos = ({ userInfoPopup, setUserInfoPopup }) => {
  const token = JSON.parse(localStorage.getItem("@Productive:token"));
  const userId = jwt_decode(token);

  const [resultApiProfile, setResultApiProfile] = useState("");

  Api.get(`/users/${userId.user_id}/`).then((response) =>
    setResultApiProfile(response.data.username)
  );

  const schema = yup.object().shape({
    name: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const updateUserProfile = (data) => {
    Api.patch(
      `/users/${userId.user_id}/`,
      {
        username: `${data.username}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((_) => toast.success("Nome de usuário alterado com sucesso"))
      .catch((err) => toast.error("Nome de usuário não está disponível"));
  };

  const closeUserInfoPopup = () => {
    setUserInfoPopup(!userInfoPopup);
  };

  return (
    <div className="containerUserInfos">
      <UserInfosCard>
        <div className="divBox_user">
          <BiUserCircle />
          <h3>{resultApiProfile}</h3>
          <form onSubmit={handleSubmit(updateUserProfile)}>
            <TextFieldDescriptionGroup
              id="outlined-helperText"
              label="Username"
              defaultValue={resultApiProfile}
              {...register("username")}
            />
            {/* <button type="submit">Salvar</button> */}
            <div className="area_buttons">
              <PrimaryButton className="btn_editCardGroup" type="submit">
                Salvar
              </PrimaryButton>
              <SecondaryButton
                className="btn_editCardGroup"
                onClick={() => closeUserInfoPopup()}
              >
                Cancelar
              </SecondaryButton>
            </div>
          </form>
        </div>
      </UserInfosCard>
    </div>
  );
};

export default UserInfos;
