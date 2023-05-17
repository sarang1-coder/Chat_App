import Chat from './component/Chat.js';
import Slidebar from './component/Sidebar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='app-body'>

        {/* SideBar*/}
          <Slidebar/>

        {/*Chat*/}  
          <Chat/>
      </div>
    </div>
  );
}

export default App;
