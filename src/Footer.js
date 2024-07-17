import React from 'react'

const Footer = ({length}) => {
    
  return (
    <footer> <i>{length} list {length<=1? "item" : "items"} </i></footer>
  )
}

export default Footer