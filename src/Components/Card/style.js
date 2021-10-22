import styled from "styled-components";
import buttonImg from "../../assets/images/config.png";

export const DivCard = styled.div`
  height: 150px;
  min-width: 330px;
  margin: 20px auto;
  margin-bottom: 0;
  background-color: var(--color-purple-card);
  border-radius: 5px;
  color: var(--color-text-primary);

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const ContainerEditGroupCard = styled.div`
  .hidden {
    display: none;
  }

  button {
    background-image: url(${buttonImg});
    background-repeat: no-repeat;
    background-size: 90% 90%;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20%;
    margin-top: 20px;
    background-color: transparent;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    button {
      right: 38%;
    }
  }
`;
