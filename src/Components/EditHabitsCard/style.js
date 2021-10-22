import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const ContainerEditGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-title);
  height: 300px;
  width: 300px;
  border-radius: 5px;
  background-color: var(--color-purple-card);

  .editGroupFalse {
    display: none;
  }
  .editGroupTrue {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .check-in {
    background-image: linear-gradient(to right, #a40ff2, #6d95fb, #0bd6f7);
    border: none;
    border-radius: 5px;
    width: 123px;
    height: 40px;
    color: #fff;
    margin: 10px;
  }

  .delete {
    background-color: rgba(117, 128, 249, 0.2);
    border-radius: 5px;
    border: none;
    width: 123px;
    height: 40px;
    color: rgba(245, 245, 245, 0.5);
    margin: 10px;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px;
    padding-left: 40px;

    p {
      padding-bottom: 10px;
    }
  }

  .btn-div {
    display: flex;
  }

  .goal {
    width: 200px;
    display: flex;
    justify-content: space-between;
    p {
      padding: 5px 20px 5px 0;
    }
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 250px;
  }
`;

export const DivNameGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--color-text);
  padding: 10px;
  box-sizing: border-box;
`;

export const ParagraphCloseModalGroup = styled.p`
  width: 30px;
  margin: 0;
  text-align: center;
  cursor: pointer;
`;
