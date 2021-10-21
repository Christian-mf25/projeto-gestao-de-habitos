import styled from "styled-components";

export const SearchHabitsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 265px;
    div {
      width: 100%;
      label {
        color: var(--color-text-primary);
      }
    }
  }

  .addHabitButton {
    max-width: 265px;
  }

  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    form {
      width: 365px;
    }

    .addHabitButton {
      max-width: 365px;
    }
  }
`;
