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
    background-size: 100% 100%;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 12%;
    margin-top: 20px;
    background-color: transparent;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }

  @media (min-width: 425px) {
    button {
      right: 16%;
    }
  }

  @media (min-width: 473px) {
    button {
      right: 18%;
    }
  }

  @media (min-width: 768px) {
    button {
      right: 28%;
    }
  }

  @media (min-width: 1024px) {
    button {
      right: 34%;
    }
  }

  @media (min-width: 1040px) {
    button {
      right: 38%;
    }
  }

  @media (min-width: 2560px) {
    button {
      right: 43%;
    }
  }
`;
