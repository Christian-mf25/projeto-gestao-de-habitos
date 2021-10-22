import styled from "styled-components";

export const Div = styled.div`
  position: relative;

  form {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    position: absolute;
    background-color: var(--color-purple-card);
    height: 109px;
    width: 100%;
    z-index: 2;

    .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
      width: 40%;
    }

    .data {
      width: 55%;
    }

    .gmXmOo.MuiButton-root {
      width: 50%;
    }
  }
  svg {
    font-size: 30px;
    color: var(--color-text);
    position: absolute;
    right: 17px;
    top: 9px;
    cursor: pointer;
  }

  .atv-btn {
    display: flex;
    justify-content: space-around;
    width: 100%;
    button {
      width: 50%;
      margin: 10px 20px;
    }
  }
`;
