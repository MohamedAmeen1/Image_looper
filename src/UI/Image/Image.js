import React from 'react'
import './Image.css'
function Image(props) {
    return (
        <div onClick={props.clicked} className="image">
            <img width="168" height="250" alt="" src={props.src}></img>
        </div>
    )
}

export default Image
