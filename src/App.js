import './App.css';
import { BrowserRouter, Routes ,Route}  from 'react-router-dom'
import Home from './Pages/Home';
import EditPage from './Pages/EditPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
     <div>
      <Toaster 
      position='top-right'
    >
 </Toaster>
     </div>
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}> </Route>
        <Route path='/editor/:roomId'  element={<EditPage/>}></Route>

      </Routes>
      </BrowserRouter>
    
    </>
    
  );
}

export default App;
