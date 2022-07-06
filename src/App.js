import './App.module.css';
import '../src/components/Header/header.module.css';
import Main from './components/Main';
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
