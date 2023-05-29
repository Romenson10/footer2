
import './App.css';
import logogo from "./img/logogo.jpeg"
import tele from "./img/tele.png"
import tw from "./img/tw.png"
import wha from "./img/wha.png"
import fac from "./img/fac.png"

function App() {
  return (
  
  <section className='rodape_fundo'>
      <footer>
        
           
        <div className="primeiro">
        <img className='log' src={logogo} alt="" />
        < h3 className='titulo_ff'>Psenac</h3> 
         

        <ul className='liro'>
          
          <li className='lirodape'><a href="#">Home</a></li>
          <li className='lirodape'><a href="#">Sobre nós</a></li>
          <li className='lirodape'><a href="#">Serviços</a></li>
          <li className='lirodape'><a href="#">Entre em contato</a></li>
        </ul>

        </div>

        <div className="lg">
          
            <img className='logos' src={tele} alt="" />
            <img className='logos' src={tw} alt="" />
            <img className='logos' src={wha} alt="" />
            <img className='logos' src={fac} alt="" />
        </div>
           
      
        
      <div className="segundo">
        
          <p className='titulo_azul'>Newsletter</p>
         <input className='email__usuario' type="email" placeholder='insira seu email' /> 
         <button className='inscrever'>Inscrever</button>

      </div>

      
      </footer>
      <hr />

      <p className='ultimo'>© PSenac projeto. Av. Campo sales, 1111 - Centro(Sul), Teresina-PI,64000-300 <br />
       Todos os direitos reservados. </p>
      
      
   </section> 
   
  );
}

export default App;
