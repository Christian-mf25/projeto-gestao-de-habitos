import "./styles.css";

const AddHabit = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button onClick={() => props.setTrigger(false)} className="cancel-btn">
          Cancelar
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddHabit;
