import React from 'react'
import { Button } from './styles'

const button = props => (
    <Button className={props.className} onClick={e => props.onClick(e.target.innerHTML)}>{props.value}</Button>
)

export default button