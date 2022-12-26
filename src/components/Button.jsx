import React from 'react'

export default function Button({children,type,version,isDisabled}) {
  return (
    <button type={type} className= {`btn btn-${version}`} disabled={isDisabled}>{children}</button>
  )
}
