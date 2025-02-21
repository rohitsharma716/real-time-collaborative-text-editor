import React from 'react'
// import Avatar from 'react-avatar'
import Avatar from 'react-avatar';


const Clients = ({username}) => {
   
  return (
    <div>
        <div className='client'>
            <Avatar name={username}  size={50} round='14px' /> 
      
             <span className='userName'>{username}</span>
              </div>
    </div>
  )
}

export default Clients;