import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .popup-inner {
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: #4e116a;
  }

  .popup-header {
    display: flex;
    justify-content: space-between;
  }

  .cancel-btn {
    height: 25px;
    color: rgba(255, 255, 255, 0.5);
    background-color: transparent;
    border: none;
  }
`;
