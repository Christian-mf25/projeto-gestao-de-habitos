import logoSelectNegativa from "../../assets/images/logo-select1-negativa.png";
import { Toolbar } from "./styles";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../Styled/style";
import {BiLogOut} from "react-icons/bi"

const Header = ({ showD = false, showM = false, showS = false }) => {
  const history = useHistory();

  return (
    <Toolbar>
      <div className="top_header">
        <img src={logoSelectNegativa} alt="logo-negativa" />
        <BiLogOut className="logout"/>
      </div>

      <div className="div_button">
        <div className="button_span">
          <button onClick={() => history.push("/dashboard")}>my habits</button>
          {showD === true ? <span></span> : null}
        </div>
        <div className="button_span">
          <button onClick={() => history.push("/mygroups")}>my groups</button>
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
