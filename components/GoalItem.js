import React from 'react'
import styled from 'styled-components'

const ItemText = styled.Text`
  padding: 10px;
  margin: 5px 0;
  border: solid 1px black;
  background-color: #ccc;
`

const GoalItem = props => {
  return <ItemText>{props.title}</ItemText>
}

export default GoalItem
