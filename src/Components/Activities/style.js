import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  color: var(--color-title);
  width: 100%;

  .bRrcmr.MuiTextField-root {
    width: 95%;
  }

  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    margin: 0 auto;
    margin-bottom: 30px;
  }

  h3,
  p {
    padding: 0 30px;
  }

  li {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
    border-top: solid 1px var(--color-text);
    width: 100%;
    height: 120px;
    position: relative;

    button {
      margin: 0 30px;
    }

    div {
      svg {
        position: absolute;
        right: 15px;
        bottom: 20px;
        font-size: 20px;
        cursor: pointer;
      }
    }
    h3 {
      margin: 0;
    }
  }
`;
