import React, { useState } from 'react'
import Decimal from 'decimal.js'

import { MainContainer, Container } from './styles'

import Button from '../components/Button'
import Header from '../components/Header'
import Display from '../components/Display'
import Keyboard from '../components/Keyboard'

const Calculator = () => {

    let [displayValue, setDisplayValue] = useState('')
    let [clearDisplay, setClearDisplay] = useState(false)
    let [operation, setOperation] = useState(null)
    let [values, setValues] = useState([0, 0])
    let [current, setCurrent] = useState(0)

    const addDigit = digit => {
        const currentValue = displayValue === '0' || clearDisplay ? '' : displayValue
        setDisplayValue(currentValue + digit)
        setClearDisplay(false)

        const currentValues = [...values]
        currentValues[current] = parseFloat(currentValue + digit)
        setValues(currentValues)
    }

    const addFloatPoint = digit => {
        if (displayValue.toString().includes('.') && !clearDisplay) {
            return
        }

        if (displayValue === '' || clearDisplay) {
            setDisplayValue('0' + digit)
        } else {
            setDisplayValue(displayValue + digit)
        }
        setClearDisplay(false)
    }

    const addOperation = op => {
        if (current === 0) {
            if (op === '=') {
                return
            }
            setOperation(op)
            setCurrent(1)
            setClearDisplay(true)
        } else {
            const equals = op === '='
            const currentOperation = operation
            let evaluate = null
            
            const n = new Decimal(values[0])
            switch (currentOperation) {
                case '+':
                    evaluate = n.plus(values[1]).valueOf()
                    break
                case '-':
                    evaluate = n.minus(values[1]).valueOf()
                    break
                case '/':
                    evaluate = n.dividedBy(values[1]).valueOf()
                    break
                case '*':
                    evaluate = n.times(values[1]).valueOf()
                    break
                default:
                    evaluate = n.valueOf()
                    break
            }
            
            setDisplayValue(evaluate)
            setClearDisplay(!equals)
            setOperation(equals ? null : op)
            setValues([parseFloat(evaluate), 0])
            setCurrent(equals? 0 : 1)
        }
        
    }

    const clearMemory = () => {
        setDisplayValue('')
        setClearDisplay(false)
        setOperation(null)
        setValues([0, 0])
        setCurrent(0)
    }

    const keys = ['CE', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '=']

    const listButtons = keys.map((value, index) => {
        switch (value) {
            case 'CE':
                return <Button key={index} className='ce' value={value} onClick={() => clearMemory()} />
            case '.':
                return <Button key={index} value={value} onClick={(key) => addFloatPoint(key)} />
            case '0':
                return <Button key={index} className='zero' value={value} onClick={(key) => addDigit(key)} />
            default:
                if (isNaN(parseInt(value))) {
                    return <Button key={index} className='operation' value={value} onClick={(key) => addOperation(key)} />
                } else {
                    return <Button key={index} value={value} onClick={(key) => addDigit(key)} />
                }
        }
    })

    return(
        <MainContainer>
            <Header />
            <Container>
                <Display value={displayValue} />
                <Keyboard value={listButtons} />
            </Container>
        </MainContainer>
    )
}

export default Calculator