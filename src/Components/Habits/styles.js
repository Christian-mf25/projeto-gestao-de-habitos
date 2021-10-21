import styled from "styled-components";
import img from "../../assets/images/config.png";

export const HabitsContainer = styled.div`
  .divHabit {
    background-color: #4e116a;
    width: 80%;
    border-radius: 5px;

    .editButton {
      background-image: url(${img});
      width: 50px;
      height: 20px;
      background-color: transparent;
      border: none;
    }
  }

  .check-in {
    background-image: linear-gradient(
      to right,
      #a40ff2 0%,
      #6d95fb 51%,
      #0bd6f7 100%
    );
    width: 123px;
    height: 40px;
    border-radius: 5px;
    color: #fff;
    border: none;
    margin-right: 10px;
  }

  .delete {
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: none;
    color: #fff;
    background-color: rgba(117, 128, 249, 0.2);
  }
`;
