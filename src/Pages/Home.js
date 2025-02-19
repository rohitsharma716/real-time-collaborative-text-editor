import React,{useState} from 'react';
import { v4 as uuidv4}  from 'uuid';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const Home = () => {
   const Navigate = useNavigate();
   const [roomId , setRoomId] =useState("")
   const [userName,setUserName] = useState("") 
   
   
     const CreateNewId  = (e) =>{
         e.preventDefault();
         const id = uuidv4();
         setRoomId(id);
         toast('✅ New Room Created ')
     }
     const joinRoom =()=>{
            if(!roomId && !userName){
                toast.error("roomId  and userName is Not valid")
                return;
            }
            else if(!roomId){
                toast.error("Room Id is not valid")
                return;
             }
             else if(!userName){
                toast.error("UserName is not valid")
                return;
             }
           Navigate(`/editor/${roomId}`,{
            state:{
                 userName,
            }
           })  


     }
    const openEditor = (e) =>{
          if(e.code === "Enter"){
            joinRoom();
          }
    } 
  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <img className='homeLogo' src='/codesynclogo.svg' alt='code-syn-logo' />
            <h4 className='mainLabel'>Paste invitation ROOM ID </h4>
              <div className='inputGroup'>
                <input
                  type='text'
                  className='inputBox'
                  placeholder='ROOM ID'
                  onChange={(e) => setRoomId(e.target.value)}
                  value={roomId}
                  onKeyUp={openEditor}
                />
                <input
                  type='text'
                  className='inputBox'
                  placeholder='USERNAME'
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  onKeyUp={openEditor}
                />
                <button className='btn joinBtn' onClick={joinRoom}>Join</button>
                <span className='createInfo'>
                    If you don't have an invite then create &nbsp;
                    <a href='' onClick={CreateNewId} className='createNewBtn'>
                        new room
                    </a>

                </span>

              </div>
        </div>
    <footer>
        <h4>
            Built with ❤️ by &nbsp; {' '}
            <a  href='https://github.com/rohitsharma716'>ROHIT SHARMA</a>
        </h4>
    </footer>
    </div>
  )
}

export default Home