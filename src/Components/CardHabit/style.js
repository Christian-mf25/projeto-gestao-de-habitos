import styled from "styled-components";
import img from "../../assets/images/config.png";

export const DivCard = styled.div`
  display: flex;
  height: 180px;
  width: 330px;
  margin: 20px auto;
  background-color: var(--color-purple-card);
  border-radius: 5px;
  color: var(--color-text-primary);

  .divContainer {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      padding: 0;
    }
  }

  .gear {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 90% 90%;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
  }

  .dificulty {
    padding-left: 10px;
  }

  li {
    background-color: var(--color-purple-card);
    height: 143px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0;

    section {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: flex-start;
      justify-content: space-around;
			margin-bottom: 5px;
			height: 100%;
    }

    h3 {
      padding-left: 10px;
      width: 175px;
			margin: 3px 0;
    }

    p {
      min-width: 150px;
    }

    span {
      padding: 5px;
      margin: 17px 15px 0 15px;
      border-radius: 5px;
      font-size: 3rem;
      color: #7580f9;
      background-color: #8183e72b;

      display: flex;
    }
  }

  @media screen and (min-width: 768px) {
    width: 365px;
  }
`;

export const Container = styled.div`
  height: 7px;
  width: 93%;
  position: relative;
  margin-left: 9.5px;

  @media screen and (min-width: 768px) {
    width: 95%;
    margin-left: 9.5px;
  }
`;

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
`;

export const Background = styled(BaseBox)`
  background: #fff;
  width: 100%;
`;

export const Progress = styled(BaseBox)`
  background-image: var(--color-linear);
  width: ${({ percent }) => (percent * 100) / 30}%;
`;
