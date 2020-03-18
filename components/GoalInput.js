import React, { useState } from 'react'
import { Button, Modal } from 'react-native'
import styled from 'styled-components'

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

const GoalInput = props => {
  const [goal, setGoal] = useState('')

  const handleGoalInputChange = text => {
    setGoal(text)
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <InputGroup>
        <AppTextInput onChangeText={handleGoalInputChange} value={goal} placeholder='Course Goal' />
        <Button title='ADD' onPress={() => props.onAddGoal(goal)} />
      </InputGroup>
    </Modal>
  )
}
export default GoalInput
