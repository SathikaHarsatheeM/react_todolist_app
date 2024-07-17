import React from 'react'
import ItemsList from './ItemsList';


const Content = ({items,handleCheck,handleDelete}) => {
  
  return (
   <main>
      {(items.length)? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          />
     ) :
    (
      <p style={{marginTop:'2rem', color: 'rgb(157, 4, 131)'}}><i>Your list is empty!</i></p>
    )}
   </main>
  )
}

export default Content
//FaTrashAlt