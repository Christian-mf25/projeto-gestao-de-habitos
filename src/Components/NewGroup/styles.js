import styled from "styled-components";

export const NewGroupCont = styled.div`
  width: 265px;
  height: 300px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-purple-card);

  option {
    background-color: var(--color-purple-card);
  }

  select {
    width: 210px;
    padding: 5px;
    background-color: transparent;
    color: var(--color-title);
    border-radius: 4px;
  }

  .top {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--color-title) svg {
      color: var(--color-title);
      font-size: 30px;
    }

    svg {
      color: var(--color-title);
    }
  }

  .btn-div {
    width: 210px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    button {
      width: 45%;
      margin-top: 10px;
    }
  }

  h1 {
    font-size: 18px;
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
      label {
        width: 200px;
        padding: 5px;
        background-color: transparent;
        color: var(--color-title);
      }
      label {
        text-align: left;
        padding-left: 0;
      }
    }
  }
`;
