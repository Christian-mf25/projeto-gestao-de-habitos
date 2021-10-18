import logoSelectNegativa from "../../assets/images/logo-select1-negativa.png";
import { Toolbar } from "./styles";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState("false");

  return (
    <Toolbar>
      <div>
        <img src={logoSelectNegativa} alt="logo-negativa" />
      </div>
      <div className="div_button">
        <div className="button_span">
          <button onClick={() => setShow(true)}>my habits</button>
          {show ? <span></span> : null}
        </div>
        <div className="button_span">
          <button>my groups</button>
        </div>
        <div className="button_span">
          <button>search groups</button>
        </div>
      </div>
    </Toolbar>
  );
};

export default Header;
