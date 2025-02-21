import React, { useEffect, useRef, useState } from 'react'
import Clients from '../components/Clients'
import Editor from '../components/Editor'
import { initSocket } from '../socket';
import ACTIONS from '../Actions';
const EditPage = () => {
   const socketRef =  useRef(null);

   useEffect( () => {
          const  init = async() => {
                socketRef.current = await initSocket();
                socketRef.current.emit(ACTIONS.JOIN);
          }
          init();
   },[])
   const [clients,  setClients] = useState([
       {socketId:1, username : "rohit sharma"},
       {socketId: 2 , username: "kunal jii "},
       {socketId: 3, username:"riya sharma "}
   ])
  return (
    <div className='mainWrap'>
        <div className='aside'>
          <div className='asideInner'>
            <div className='logo'>
                  <img 
                   className='logoImage'
                   src='/codesynclogo.svg'
                   alt='logo'
                  
                  />
            </div>
                  <h3>Connected</h3>
                  <div className='clientsList'>
                     {
                      clients.map((client) => (
                          <Clients key={client.socketId} username={client.username} />
                      ))
                     }
                  </div>
          </div>
          <button className='btn copyBtn'>copy ROOM ID</button>
          <button className='btn leaveBtn'>Leave</button>

        </div>
     
         <div  className='editorWrap'> 
          <div className=' editWrap'>
                  <Editor/>
          </div>
         </div>

    </div>
  )
}

export default EditPage