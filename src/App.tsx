import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomeView from './views/Home';
import AdminConsole from './views/Admin/AdminConsole';

function App() {

  return (
    <div className='h-full'>
      <Router>
        <Routes>
          <Route path='' element={<HomeView />} />
          <Route path='/applications' element={<AdminConsole />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
