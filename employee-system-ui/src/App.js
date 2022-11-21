import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-slate-100 min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* default route index */}
          <Route index element={<EmployeeList />}></Route>
          <Route path='/' element={<EmployeeList />}></Route>
          <Route path='/employeeList' element={<EmployeeList />}></Route>
          <Route path='/addEmployee' element={<AddEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
