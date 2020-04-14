import React from 'react'
import './display.css'

const numberSize = (number) => {
    const n = number.toString()
    if (n.length < 18) {
        return ''
    } else if (n.length >= 18 && n.length < 36) {
        return 'medium'
    } else {
        return 'mini'
    }
}

export default props =>
    <div data-testid="calculator-display" className={`calculator-display ${numberSize(props.value)}`}>{props.value}</div>
