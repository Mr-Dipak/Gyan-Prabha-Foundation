import React from 'react'
let defaultClass ="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
function Button({ButtonText,className=defaultClass}) {
  return (
    <button
    type="button"
    className={className}
  >
    {ButtonText}
  </button>
  )
}

export default Button