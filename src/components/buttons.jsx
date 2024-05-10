import React from "react";

function Buttons(props) {
  const operator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=')
  }

  return (
    <button className={`button ${operator(props.children) ? 'operator' : ''}`.trimEnd()} onClick={() => props.handleClick(props.children)}>
      {props.children}
    </button>
  )
}

export default Buttons