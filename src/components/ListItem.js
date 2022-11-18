import styled from "styled-components";

const ListItem = ({value, index, isChecked, handleCheck}) => {

    return (
        <ItemContainer>
            <input value={index} type='checkbox' onChange={handleCheck} checked={isChecked}/>
            <Text>{value.name}</Text>
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