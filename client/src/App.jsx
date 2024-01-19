import './theme.css'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import ChatBox from "./components/chatbox/ChatBox.jsx"

function App() {
  const handleClick = ()=>{
    const historyBar= document.querySelector(".historyBar");
    historyBar.style.position = historyBar.style.position==="relative"?"fixedg56":"relative";
    historyBar.style.transform = historyBar.style.transform==="translate(0)"?"translate(-100%)":"translate(0)";
    console.log('click')
  }

  return (
    <div className="max-h-screen overflow-hidden">  
      <Sidebar />
      <Navbar handleClick={handleClick} />
      <ChatBox />
    </div>
  )
}

export default App