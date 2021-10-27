import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";

export const UserInfosCard = styled.div`
    color: var(--color-title);
    height: 300px;
    width: 350px;
    border-radius: 5px;
    background-color: var(--color-purple-card);
    box-sizing: border-box;

    svg {
        font-size: 55px;
    }

    h3 {
        margin-top: 12px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 280px;
    }
    form > div {
        width: 280px;
    }

    form .area_buttons {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    form .area_buttons button{
        margin-right: 0;
    }
    form .area_buttons button span{
        display: none;
    }

`;