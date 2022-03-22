import logo from './logo.svg';
import Rates from './Rates';
import './App.css';
import Form from './Form';
import Dropdown from 'react-bootstrap/Dropdown';


function App() {
  return (
    <>
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">FastRates!</a>
        </div>
      </nav>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <Form />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Currency
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">USD to Euro</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Euro to USD</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        
      </div>
    </div>
    <div className='container'>
      <Rates />
    </div>
    </>
  );
}

export default App;
