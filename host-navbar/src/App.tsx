import './App.css';
import { lazy } from 'react';
import { Navbar } from './components/Navbar';

const TestComponent = lazy(() => import('host_remote_app/TestComponent'));

const App = () => {
  return (
    <>
    <div className='page'>
    <Navbar />
    <div className="content">
    <TestComponent />
    </div>
    </div>
    </>
  );
};

export default App;
