import React from 'react'
import "./Inputcontrol1.css"
function Inputcontrol({label, ...props}) {
  return (
    <div className='container4'>
        {label && <label>{label}</label>}
        <input type="text" {...props} />
    </div>
  )
}

export default Inputcontrol;