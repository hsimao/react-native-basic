import React from 'react'
import { TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native'
import styled from 'styled-components'

const ItemText = styled.Text`
  padding: 10px;
  margin: 5px 0;
  border: solid 1px black;
  background-color: #ccc;
`

// <TouchableHighlight underlayColor='#ccc' onPress={props.onDelete}>
//   <ItemText>{props.title}</ItemText>
// </TouchableHighlight>

// Android 原生按鈕水波效果, ios 不能用
// TouchableNativeFeedback
// <TouchableNativeFeedback activeOpacity={0.5} onPress={props.onDelete}>
//   <ItemText>{props.title}</ItemText>
// </TouchableNativeFeedback>

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <ItemText>{props.title}</ItemText>
    </TouchableOpacity>
  )
}

export default GoalItem
