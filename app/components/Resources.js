import React from  'react'
import UserList from './UserList'  
/*Simplest react component*/
export default () => {
  return (
    <div className="super">
      <label>Form</label>
        <form action="">
          <textarea name="" id="" cols="30" rows="10">
          Only auth can see this!
          </textarea>
        </form>
    </div>
  )
}