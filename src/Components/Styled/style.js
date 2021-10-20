import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import smoke from "../../assets/images/bg-smoke-purple.jpg";

export const Section = styled.section`
  background-image: url(${smoke});
  background-position: center;
  background-size: cover;

  height: 100vh;
  width: 100vw;
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
  }
`;

export const Input = styled(TextField)`
	
	&.MuiTextField-root{
		
		input{
			color: #fff;
		}
		
		fieldset{
			border:#7580f9 solid 1px;
			color: #a788b5,
		}

		label{
			color: #7580f9;
		}

	}

`