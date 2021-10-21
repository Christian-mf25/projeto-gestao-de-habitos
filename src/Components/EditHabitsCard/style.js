import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const ContainerEditGroup = styled.div`
  color: var(--color-title);
  height: 300px;
  width: 300px;
  border-radius: 5px;
  background-color: var(--color-purple-card);

  .check-in {
    background-image: linear-gradient(to right, #a40ff2, #6d95fb, #0bd6f7);
    border: none;
    border-radius: 5px;
    width: 123px;
    height: 40px;
    color: #fff;
    margin-right: 10px;
    margin-left: 20px;
    margin-top: 20px;
  }

  .delete {
    background-color: rgba(117, 128, 249, 0.2);
    border-radius: 5px;
    border: none;
    width: 123px;
    height: 40px;
    color: rgba(245, 245, 245, 0.5);
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
`;
