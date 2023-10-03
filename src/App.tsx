import './App.css';
import Header from './component/shared/Header';
import Project from './component/pages/project';
import Profile from './component/pages/Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path='/' element={<Profile />}/>
        <Route path="/portfolio" element={<Profile />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
{/* <Header/>
<Project/> */}