import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomeView from './views/Home';
import AdminConsole from './views/Admin/AdminConsole';
import ViewApplication from './views/Admin/ViewApplication';

function App() {

  return (
    <div className='h-full'>
      <Router>
        <Routes>
          <Route path='' element={<HomeView />} />
          <Route path='/applications' element={<AdminConsole />} />
          <Route path='/view-detail/:jobId' element={<ViewApplication />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
