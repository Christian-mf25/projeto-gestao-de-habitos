import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
	overflow: auto;

  .popup-inner {
    position: relative;
    width: 100%;
    max-width: 640px;
    background-color: #4e116a;
    border-radius: 5px;
  }

  .popup-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid var(--color-text);
  }

  .radioOptions {
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
  }

  form {
    padding: 30px 15px;

    .toggle {
      display: flex;
      flex-direction: column;
      grid-gap: 1rem;
      align-items: flex-start;
    }
  }

  h3 {
    margin-left: 15px;
  }

  .cancel-btn {
    height: 25px;
    color: rgba(255, 255, 255, 0.5);
    background-color: transparent;
    border: none;
    margin-top: 15px;
    margin-right: 15px;
  }

  .addBtn {
    margin-right: 20px;
    margin-top: 10px;
    padding: 7px 20px;
  }

  .cancelBtn {
    margin-top: 10px;
    padding: 7px 20px;
  }

  @media only screen and (min-width: 768px) {
    .cancel-btn {
      margin-right: 25px;
    }
  }
`;

export const PrimaryButton = styled(Button)`
  &.MuiButton-root {
    background-image: linear-gradient(90deg, #a40ff2, #6d95fb, #0bd6f7);
    color: var(--color-text-primary);
  }
`;

export const SecondaryButton = styled(Button)`
  &.MuiButton-root {
    background-color: #363153;
    color: var(--color-text-primary);

    :hover {
      background-color: #363153;
      filter: brightness(0.9);
    }
  }
`;

export const TertiaryButton = styled(Button)`
  &.MuiButton-root {
    background-color: #7580f9;
    color: var(--color-text-primary);

    :hover {
      background-color: #7580f9;
      filter: brightness(0.9);
    }
  }
`;
