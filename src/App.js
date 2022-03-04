import logo from './logo.svg';
import './App.css';

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
          <label>Amount</label>
          <input type="number"></input>
            <div className="btn-group">
              <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Action
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
        </div>
        
      </div>
    </div>
    </>
  );
}

export default App;
