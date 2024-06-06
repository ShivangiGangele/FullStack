import logo from './logo.svg';
import './App.css';
import AddView from './Pages/AddView';
import DetailedView from './Pages/DetailedView';
import EditView from './Pages/EditView';
import ListView from './Pages/ListView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <header>
        <div>
          <DetailedView></DetailedView>
          <AddView></AddView>
          <EditView></EditView>
          <ListView></ListView>
        </div>
      </header>
    </div>
  );
}

export default App;
