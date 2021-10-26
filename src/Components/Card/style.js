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

	div{
		height: 100%;
	}

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const ContainerEditGroupCard = styled.div`
  .hidden {
    display: none;
  }
	position: relative;

  button {
    background-image: url(${buttonImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    margin-top: 20px;
    background-color: transparent;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }
`;
