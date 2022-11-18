import styled from "styled-components";

export const ItemContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const Text = styled.h3`
    width: 250px;
    word-wrap: break-word;
    line-height: 30px;
`

export const InputCheckBox = styled.input`
    visibility: ${props => props.isCreationMode ? 'hidden' : 'visible'}
`