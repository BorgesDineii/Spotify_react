import './App.css';
import Header from './componentes/header/Header';
import Sidebar from './componentes/sidebar/Sidebar';
import Footer from './componentes/footer/Footer';
import Main from './componentes/main/Main';

function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Footer></Footer>
      <Main></Main>
    </div>
  );
}

export default App;