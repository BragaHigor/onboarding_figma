//CSS
import './App.css';

//hooks
import { useState } from 'react'

//components
import Tela1 from './components/Tela1';
import Tela2 from './components/Tela2';
import Tela3 from './components/Tela3';

const estados = [
  {id: 1, name: 'primeira'},
  {id: 2, name: 'segunda'},
  {id: 3, name: 'terceira'},
]

function App() {

  const [estadoInicial, setEstadoInicial] = useState(estados[0].name);

  const btntela1 = () => {
    setEstadoInicial(estados[0].name)
  }

  const btntela2 = () => {
    setEstadoInicial(estados[1].name)
  }

  const btntela3 = () => {
    setEstadoInicial(estados[2].name)
  }

  return (
    <div className="App">
      {estadoInicial === 'primeira' && <Tela1 btntela2={btntela2} btntela3={btntela3}/>}
      {estadoInicial === 'segunda' && <Tela2 btntela1={btntela1} btntela3={btntela3}/>}
      {estadoInicial === 'terceira' && <Tela3 btntela1={btntela1} btntela2={btntela2}/>}
    </div>
  );
}

export default App;
