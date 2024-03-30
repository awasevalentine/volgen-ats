import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomeView from './views/Home';
import AdminConsole from './views/Admin/AdminConsole';
import ViewApplication from './views/Admin/ViewApplication';
import CandidatePage from './views/CandidatePage/CandidatePage';

function App() {

  return (
    <div className='h-full'>
      <Router>
        <Routes>
          <Route path='' element={<HomeView />} />
          <Route path='/applications' element={<AdminConsole />} />
          <Route path='/view-detail/:jobId' element={<ViewApplication />} />
        </Routes>
        <Routes>
          <Route path="/job-application" element={<CandidatePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
