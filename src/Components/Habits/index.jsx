import { toast } from 'react-toastify';
import Api from '../../Services/API';

const Habits = ({ personalHabits }) => {
  const achieved = personalHabits.filter((item) => item.achieved === true);
  const notAchieved = personalHabits.filter((item) => item.achieved === false);
  //   const token =

  const checkIn = (id) => {
    Api.patch(`habits/${id}`, {
      headers: {
        // Authorization: `Bearer ${token}`
      },
    }).then(() => {
      toast.success('Hábito editado');
    });
  };

  const deleteHabit = (id) => {
    Api.delete(`habits/${id}`, {
      headers: {
        // Authorization: `Bearer ${token}`
      },
    }).then(() => {
      toast.success('Hábito removido');
    });
  };

  return (
    <div>
      <p>Atuais:</p>
      {notAchieved.map((item) => (
        <div key={item.id}>
          <p>Nome: {item.title}</p>
          <p>Categoria:{item.category}</p>
          <p>Frequencia: {item.frequency}</p>
          <p>Alcançado: {item.how_much_achieved}</p>
          <button onClick={() => checkIn(item.id)}>Check-in</button>
          <button onClick={() => deleteHabit(item.id)}>Deletar</button>
        </div>
      ))}
      <p>Concluídos</p>
      {achieved.map((item) => (
        <div key={item.id}>
          <p>Nome: {item.title}</p>
          <p>Categoria:{item.category}</p>
          <p>Frequencia: {item.frequency}</p>
        </div>
      ))}
    </div>
  );
};

export default Habits;
