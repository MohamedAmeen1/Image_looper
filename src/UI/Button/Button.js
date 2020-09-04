import React from 'react'
import './Button.css'
function Button(props) {
    return (
        <div>
            <button className="button" id={props.id} style={{backgroundColor:(props.selected)?"#66ccff":"#66ff99"}} onClick={props.clicked}>{props.children}</button>
        </div>
    )
}

export default Button
