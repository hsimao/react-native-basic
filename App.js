import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'
import styled from 'styled-components'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

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

export default function App() {
  const [goalList, setGoalList] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const handleAddGoal = goalTitle => {
    const id = new Date().getTime().toString()
    setGoalList(currentGoalList => [...currentGoalList, { id, value: goalTitle }])
  }

  const handleRemoveGoal = goalId => {
    setGoalList(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  return (
    <AppContainer>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={handleAddGoal} />
      <ItemConteinar
        keyExtractor={(item, index) => item.id}
        data={goalList}
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} onDelete={() => handleRemoveGoal(itemData.item.id)} />
        )}
      ></ItemConteinar>
    </AppContainer>
  )
}
