import { useSelector } from "react-redux"
import { ItemContainer, InputCheckBox, Text } from '../StyledComponents/StyledComponentListItem';

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