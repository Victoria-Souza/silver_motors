import './App.css';
import Produtos from './components/Produtos.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'

function App() {

  return (
    <div className="App">
      
      <Header></Header>

      <div className="pesquisa">
        <button onClick ='' >Buscar</button>
      <input className="informacao" type="text" placeholder="Buscar por Marca ou Modelo..."/>
      </div>

      <Produtos></Produtos>
      

      <div className="banner">

      </div>

      <div className="nossos_servicos">

      </div>

      <div className="sobre"> 

      </div> 

      <Footer></Footer>

    </div>
  );
}

export default App;
