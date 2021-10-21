import smoke from "../../assets/images/bg-smoke-purple.jpg";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

export const Section = styled.section`
  background-image: url(${smoke});
  background-position: center;
  background-size: cover;

  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

export const PrimaryButton = styled(Button)`
  &.MuiButton-root {
    background-image: var(--color-linear);
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

export const Input = styled(TextField)`
  &.MuiTextField-root {
    input {
      color: #fff;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #261d2a inset;
      -webkit-text-fill-color: #fff;
    }

    fieldset {
      border: #7580f9 solid 1px;
      color: #a788b5;
    }

    label {
      color: #7580f9;
    }
  }
`;

export const IMG = styled.img`
  width: 133px;
  height: 123px;

  margin-bottom: 50px;
  cursor: pointer;
`;
