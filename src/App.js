import Chat from './component/Chat.js';
import Sidebar from './component/Sidebar.js';
import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';


function App() {
  return (
    <Router>
      
      <div className="App">
          <div className='app-body'>

        {/* SideBar*/}
        
          <Sidebar/>


        {/*Chat*/} 
        <Routes>
          
        <Route 
            exact path='/'
           element={ <Chat/>}
          />
        

        <Route 
            path='/room/:roomId'
            element={<Chat/>}
            />
        
        </Routes>
 

      </div>
    </div>
      
    </Router>

  );
}

export default App;
