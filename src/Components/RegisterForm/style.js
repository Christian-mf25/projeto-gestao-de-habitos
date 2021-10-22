import styled from "styled-components";

export const DivColor = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  background-color: var(--color-background);

  height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
    display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  background-color: #261d2a;
  
  width: 80%;
  
  border-radius: 10px;
  padding: 20px;
  
  color: var(--color-text-primary);

  @media (min-width: 426px){
    width: 50%;
  }

  @media (min-width: 769px){
    width: 330px;
  }
  `;

export const Form = styled.form`
display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  grid-gap: 0.7rem;

  .forgot-password {
    text-align: right;
    color: var(--color-text-primary);
		margin: 7px 0 10px 0;
		font-size: 0.8rem;
  }

  p { 
		margin: 15px 0;
		font-size: 0.9rem;
    text-align: center;
    color: var(--color-text-primary);
  }

  div.MuiFormControl-root {
    width: 100%;
    margin: 0;
  }
`;
