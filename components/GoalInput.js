import React, { useState } from 'react'
import { Button, Modal } from 'react-native'
import styled from 'styled-components'

const InputGroup = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const AppTextInput = styled.TextInput`
  border: solid 1px black;
  width: 80%;
  padding: 10px;
  margin-bottom: 16px;
`

const Tools = styled.View`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  width: 80%;
`

const ToolBtn = styled.View`
  width: 40%;
`

const GoalInput = props => {
  const [goal, setGoal] = useState('')

  const handleGoalInputChange = text => {
    setGoal(text)
  }

  const handleAddGoal = () => {
    props.onAddGoal(goal)
    setGoal('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <InputGroup>
        <AppTextInput onChangeText={handleGoalInputChange} value={goal} placeholder='Course Goal' />
        <Tools>
          <ToolBtn>
            <Button title='CANCEL' color='red' onPress={props.onCancel} />
          </ToolBtn>
          <ToolBtn>
            <Button title='ADD' onPress={handleAddGoal} />
          </ToolBtn>
        </Tools>
      </InputGroup>
    </Modal>
  )
}
export default GoalInput
