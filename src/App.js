import Sidebar from "./Components/Sidebar/Sidebar"
import MainArea from "./Components/MainArea/MainArea"
import ListNotes from "./Components/ListNotes/ListNotes"
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Sidebar />
      {/* <MainArea /> */}
      <Routes>
        <Route path="/edit" element={<MainArea />}/>
        <Route path="/" element={<ListNotes />}/>
      </Routes>
    </>
  );
}

export default App;
