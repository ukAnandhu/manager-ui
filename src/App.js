import Content from './components/Content/Content';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import './dist/css/main.css';

function App() {
   return (
      <div className='App'>
         <Header />
         <NavBar />
         <Content />
      </div>
   );
}

export default App;
