import Home from "./components/Home"
import { Routes, Route, Navigate } from 'react-router-dom'
import List from "./components/List"

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to='/add' />} />
        <Route path="add" element={<Home />} />
        <Route path="list" element={<List />} />
      </Routes>
    </div>
  )
}

export default App
