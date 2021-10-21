import { TextField } from "@material-ui/core";
import styled from 'styled-components';

export const ContainerEditGroup = styled.div`
    color: var(--color-title);
    height: 300px;
    width: 350px;
    border-radius: 5px;
    background-color: var(--color-purple-card);
    
    box-sizing: border-box;
`

export const ContainedGroup = styled.div`
    padding-left: 20px;
`

export const DivNameGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--color-text);
    padding: 10px;
    box-sizing: border-box;
`

export const ParagraphCloseModalGroup = styled.p`
    width: 30px;
    margin: 0;
    text-align: center;
`

export const TextFieldDescriptionGroup = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#7580f9',
            color: '#a788b5',
        },
    },
    '& .MuiInputBase-input': {
        borderRadius: 5,
        fontSize: 16,
        color: '#a788b5',
    },
    'label': {
        color: '#7580f9'
    }
})