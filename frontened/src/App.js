import React from 'react'
import Home from './Pages/Home'
import AllTasks from './Pages/AllTasks'
import ImportantTasks from './Pages/ImportantTasks'
import CompletedTasks from './Pages/CompletedTasks'
import IncompletedTasks from './Pages/IncompletedTasks'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="bg-white-900 text-black h-screen p-2 relative">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} >
          <Route index element={<AllTasks />} />
          <Route path='/importanttasks' element={<ImportantTasks />} />
          <Route path='/completedtasks' element={<CompletedTasks />} />
          <Route path='/incompletedtasks' element={<IncompletedTasks />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App; 
