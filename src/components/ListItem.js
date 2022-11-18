import styled from "styled-components";
import { useSelector } from "react-redux"

const ListItem = ({value, index, isChecked, handleCheck}) => {
    const plannedFlightStore = useSelector(state => state.plannedFlightReducer);

    return (
        <ItemContainer>
            <InputCheckBox key={index} value={index} type='checkbox' onChange={handleCheck} checked={isChecked} isCreationMode={plannedFlightStore.isCreationMode}/>
            <Text key={index}>{value.name}</Text>
        </ItemContainer>
    )
}

export default ListItem;

const ItemContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const Text = styled.h3`
    width: 250px;
    word-wrap: break-word;
    line-height: 30px;
`

const InputCheckBox = styled.input`
    visibility: ${props => props.isCreationMode ? 'hidden' : 'visible'}
`