import { DivCardAdd } from "./style";

// COMPONENTE PARA RENDERIZAR O CARD PARA CRIAR UM HABIT OU UM NOVO GROUP
const CardAdd = ({ onClickFunction, children, ...rest }) => {
  return (
    <DivCardAdd type="button" onClick={onClickFunction} {...rest}>
      {children}
    </DivCardAdd>
  );
};

export default CardAdd;
