import styled from "styled-components";

export const NewGroupCont = styled.div`
  width: 265px;
  height: 300px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-purple-card);

  .top {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    svg {
      font-size: 30px;
      color: var(--color-title);
    }
  }

  .btn-div {
    display: flex;
  }

  h1 {
    width: 100%;
    margin: 0;
    color: var(--color-text-primary);
  }

  .text {
    padding-top: 10px;
    div {
      input {
        height: 80px;
      }
    }
  }

  button {
    margin: 10px;
  }

  .cont-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;

      input,
      select,
      label {
        width: 200px;
        padding: 5px;
        background-color: transparent;
        color: var(--color-text-primary);
      }
      label {
        text-align: center;
        color: var(--color-text-primary);
      }
    }
  }
`;
