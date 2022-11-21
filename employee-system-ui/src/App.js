import './App.css';
import AddEmployee from './components/AddEmployee';

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-slate-100 min-h-screen'>
      <Navbar />
      <AddEmployee />
    </div>
  );
}

export default App;
