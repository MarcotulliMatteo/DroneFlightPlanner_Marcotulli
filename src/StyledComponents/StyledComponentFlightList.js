import styled from "styled-components";

export const Container = styled.div`
    border-right: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 350px;
`

export const ListContainer = styled.div`
    padding: 30px;
    flex: 7;
    max-height: 470px;
    overflow-y: auto;
`

export const SearchContainer = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 30px;
`

export const FightSearchInput = styled.input`
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid lightgray;
`

export const CreationContainer = styled.div`
    flex: 1.3;
    display: flex;
    flex-direction: column;
`

export const NewPlannedFlightNameInput = styled.input`
    padding: 10px;
    visibility: ${props => props.isVisible ? 'visible': 'hidden'};
`

export const Text = styled.p`
    color: gray;
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const CreateNewButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: orange;
    border-bottom-left-radius: 10px;
    border: none;
    color: white;
    font-size: 18px;
    display: ${props => props.isCreationMode ? 'none': 'inline'};
`

export const SaveButton = styled.button`
    width: 50%;
    height: 100%;
    background-color: darkgreen;
    border-bottom-left-radius: 10px;
    border: none;
    color: white;
    font-size: 18px;
    display: ${props => props.isCreationMode ? 'inline': 'none'};
`

export const CancelButton = styled.button`
    width: 50%;
    height: 100%;
    background-color: red;
    border: none;
    color: white;
    font-size: 18px;
    display: ${props => props.isCreationMode ? 'inline': 'none'};
`