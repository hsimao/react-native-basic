import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'
import styled from 'styled-components'

const AppContainer = styled.View`
  padding: 50px;
`

const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const AppTextInput = styled.TextInput`
  border: solid 1px black;
  width: 80%;
  padding: 10px;
`
const ItemConteinar = styled.FlatList`
  margin-top: 20px;
`
const ItemText = styled.Text`
  padding: 10px;
  margin: 5px 0;
  border: solid 1px black;
  background-color: #ccc;
`

export default function App() {
  const [goal, setGoal] = useState('')
  const [goalList, setGoalList] = useState([])

  const handleGoalInputChange = text => {
    setGoal(text)
  }

  const handleAddGoal = () => {
    const id = new Date().getTime().toString()
    setGoalList(currentGoalList => [...currentGoalList, { id, value: goal }])
    setGoal('')
  }

  return (
    <AppContainer>
      <InputGroup>
        <AppTextInput onChangeText={handleGoalInputChange} value={goal} placeholder='Course Goal' />
        <Button title='ADD' onPress={handleAddGoal} />
      </InputGroup>
      <ItemConteinar
        keyExtractor={(item, index) => item.id}
        data={goalList}
        renderItem={itemData => <ItemText>{itemData.item.value}</ItemText>}
      ></ItemConteinar>
    </AppContainer>
  )
}
