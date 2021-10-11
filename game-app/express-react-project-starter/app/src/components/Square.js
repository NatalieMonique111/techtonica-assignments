import React from 'react'

const style={
    background: 'white',
    border: '1.5px solid navy',
    fontSize: '20px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}
// de-structuring props.value and props.onClick
const Square = ({value,onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
)

export default Square;