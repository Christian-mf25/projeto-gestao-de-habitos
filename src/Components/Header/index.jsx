import logoSelectNegativa from "../../assets/images/logo-select1-negativa.png";
import { Toolbar } from "./styles";
import { useHistory } from "react-router-dom";
import { BiLogOut, BiUser } from "react-icons/bi";
import { useContext, useState } from "react";
import { GroupContext } from "../../Providers/Group";
import UserInfos from "../UserInfos/index";

const Header = ({ showD = false, showM = false, showS = false }) => {
  const history = useHistory();
  const { consultApi, setConsultApi } = useContext(GroupContext);
  const [userInfoPopup, setUserInfoPopup] = useState(false);
  console.log(consultApi);

  const LogOut = () => {
    localStorage.clear();
    history.push("/login");
  };

  const userInfo = () => {
    setUserInfoPopup(!userInfoPopup);
  };

  return (
    <Toolbar>
      <div className="top_header">
        <BiUser onClick={() => userInfo()} />
        <img
          src={logoSelectNegativa}
          alt="logo-negativa"
          onClick={() => history.push("/")}
        />
        <BiLogOut onClick={LogOut} className="logout" />
      </div>

      {userInfoPopup && (
        <UserInfos
          userInfoPopup={userInfoPopup}
          setUserInfoPopup={setUserInfoPopup}
        />
      )}
      <div className="div_button">
        <div className="button_span">
          <button onClick={() => history.push("/dashboard")}>my habits</button>
          {showD === true ? <span></span> : null}
        </div>
        <div className="button_span">
          <button
            onClick={() => {
              setConsultApi(!consultApi);
              history.push("/mygroups");
            }}
          >
            my groups
          </button>
          {showM === true ? <span></span> : null}
        </div>
        <div className="button_span">
          <button onClick={() => history.push("/searchgroups")}>
            search groups
          </button>
          {showS === true ? <span></span> : null}
        </div>
      </div>
    </Toolbar>
  );
};

export default Header;
