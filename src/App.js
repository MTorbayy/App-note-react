import Sidebar from "./Components/Sidebar/Sidebar"
import MainArea from "./Components/MainArea/MainArea"
import ListNotes from "./Components/ListNotes/ListNotes"
import {Routes, Route} from 'react-router-dom'
import DisplayNote from "./Components/DisplayNote/DisplayNote"

function App() {
  return (
    <>
      <Sidebar />
      {/* <MainArea /> */}
      <Routes>
        <Route path="/edit" element={<MainArea />}/>
        <Route path="/" element={<ListNotes />}/>
        <Route path="/displayNote/:id" element={<DisplayNote/>} />
      </Routes>
    </>
  );
}

export default App;
