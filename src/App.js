import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
//import getInfoCard from "./assets/api.js"
import Home from "./components/home.jsx"
import Login from "./components/login.jsx"
import Cartao from "./components/pedirCartao.jsx"
import logo from './img/logo.png';
import Agendar from '../src/components/consultas/Agendar.jsx';
import Pagamento from '../src/components/pagamento/Pagamento.jsx'

import Consultas from '../src/components/consultas/Consultas.jsx'

// const teste = await getInfoCard()
// console.log(teste[0])

function App() {
  return (
    <Router>
      <nav id='menu' className='bg-blue-800 flex w-full justify-between items-center px-36 text-white'>
        <img src={logo} alt='logo'/>
        <div className='w-2/5 flex px-5 '>
          <ul className='flex w-full justify-between items-center'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/pedir-cartao'>
                <button id='btn-pedirCartao' className='bg-orange-400 rounded-2xl py-2 px-8 text-white'>Pedir Cartão</button>
              </Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </nav>      
      <Routes>
        <Route path='/' element={<Home />} />
          
        <Route path='/pedir-cartao' element={<Cartao />} />
          
        <Route path='/login' element={<Login />} />

        <Route path='/consultas' element={<Consultas />} />

        <Route path='/agendar' element={<Agendar />} />

        <Route path='/pagamento' element={<Pagamento />} />
      </Routes>
    </Router>
  );
}

export default App;
