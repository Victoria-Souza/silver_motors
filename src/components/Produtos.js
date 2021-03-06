import '../App.css';
import Produto1 from '../img/produto1.jpg';
import Produto2 from '../img/produto2.jpg';
import Produto3 from '../img/produto3.jpg';

export default function Produtos(){
    return(
        
        <div className="principal">
            <div className="produtos">
                <div className= "linha">
                    <div className="produto">
                        <img src={Produto1} alt="produto"/>
                        <h2>Produto 1</h2>
                        <p>Modelo 1 485573 - gjHt - 2010/2012</p>
                        <div className="preco">
                            <h2>R$0,00</h2>
                            <button> Vizualizar</button> 
                        </div>
                    </div>
                    <div className="produto">
                        <img src={Produto2} alt="produto"/>
                        <h2>Produto 2</h2>
                        <p>Modelo 2 485573 - gjHt - 2012/2013</p>
                        <div className="preco">
                            <h2>R$0,00</h2>
                            <button> Vizualizar</button> 
                        </div>
                    </div>
                    <div className="produto">
                        <img src={Produto3} alt="produto"/>
                        <h2>Produto 2</h2>
                        <p>Modelo 3 485573 - gjHt - 2011/2012</p>
                        <div className="preco">
                            <h2>R$0,00</h2>
                            <button> Vizualizar</button> 
                        </div>
                    </div>
                </div>
                <div className= "linha">
                    <div className="produto">
                        <img src={Produto2} alt="produto"/>
                        <h2>Produto 4</h2>
                        <p>Modelo 4 485573 - gjHt - 2010/2012</p>
                        <div className="preco">
                            <h2>R$0,00</h2>
                            <button> Vizualizar</button> 
                        </div>
                    </div>
                    <div className="produto">
                        <img src={Produto3} alt="produto"/>
                        <h2>Produto 5</h2>
                        <p>Modelo 5 485573 - gjHt - 2012/2013</p>
                        <div className="preco">
                            <h2>R$0,00</h2>
                            <button> Vizualizar</button> 
                        </div>
                    </div>
                    <div className="produto">
                        <img src={Produto1} alt="produto"/>
                        <h2>Produto 6</h2>
                        <p>Modelo 6 485573 - gjHt - 2011/2012</p>
                        <div className="preco">
                            <h2>R$0,00</h2>
                            <button> Vizualizar</button> 
                        </div>
                    </div>
                </div>
                <div className= "linha">
                    <div className="produto">
                        <img src={Produto3} alt="produto"/>
                        <h2>Produto 7</h2>
                        <p>Modelo 7 485573 - gjHt - 2010/2012</p>
                        <div className="preco">
                            <h2>R$0,00</h2>
                            <button> Vizualizar</button> 
                        </div>
                    </div>
                    <div className="produto">
                        <img src={Produto1} alt="produto"/>
                        <h2>Produto 8</h2>
                        <p>Modelo 8 485573 - gjHt - 2012/2013</p>
                        <div className="preco">
                            <h2>R$0,00</h2>
                            <button> Vizualizar</button> 
                        </div>
                    </div>
                    <div className="produto">
                        <img src={Produto2} alt="produto"/>
                        <h2>Produto 9</h2>
                        <p>Modelo 1 485573 - gjHt - 2011/2012</p>
                        <div className="preco">
                            <h2>R$0,00</h2>
                            <button> Vizualizar</button> 
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}