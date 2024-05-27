import React from 'react'

function SecondaryButton({ButtonText}) {
  return (
    <button
    type="button"
    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
    {ButtonText}
    </button>
    
  )
}

export default SecondaryButton