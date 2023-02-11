
import {Routes,Route, Link} from 'react-router-dom';
import Login from "./Components/RegLogin";
// import Navbar from './COMPONENTS/Navbar';
function App() {
  return (
    <div className="App">
  {/* <Navbar/> */}
     <Routes>
 
<Route path='/login' element={<Login/>}/>
     </Routes> 


    </div>
  );
}

export default App;
