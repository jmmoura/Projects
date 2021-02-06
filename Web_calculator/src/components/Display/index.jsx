import React from 'react'
import { Display, Text } from './styles'

const display = props => (
    <Display><Text>{props.value}</Text></Display>
)

export default display