import "./styles.css";

const EditHabit = (props) => {
  return props.trigger ? (
    <div className="editPopup">
      <div className="editPoup-inner">
        <button onClick={() => props.setIsEditing(false)} className="close-btn">
          X
        </button>
        <p>Nome: {props.item.title}</p>
        <p>Categoria: {props.item.category}</p>
        <p>Frequencia: {props.item.frequency}</p>
        <p>Meta: 50</p>
        <p>Atual: {props.item.how_much_achieved}</p>
        <>OI</>
        {/* <button className="check-in" onClick={() => checkIn(props.item)}>
              Check-in
            </button>
            <button className="delete" onClick={() => deleteHabit(props.item.id)}>
              Deletar
            </button> */}
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default EditHabit;
