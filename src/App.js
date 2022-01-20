import './App.css';
import Produtos from './components/Produtos.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'

function App() {

  return (
    <div className="App">
      
      <Header /> 

      <div className="fundo">
        <div className="banner">
          <h1>Compre  Automóveis </h1>
            <h1>com  Qualidade  e  Segurança</h1>

        </div>
      </div>

      <h1 className="disponiveis">Carros disponíveis para compra</h1>

      <div className="pesquisa">
        <button onClick ='' >Buscar</button>
      <input className="informacao" type="text" placeholder="Buscar por Marca ou Modelo..."/>
      </div>

      <Produtos />
      
      <Footer />

    </div>
  );
}

export default App;
