//CSS
import './Tela1.css'

//imagem
import ImagemPrimeira from '../assets/img1.svg'

const Tela1 = ({ btntela2, btntela3 }) => {
  return (
    <div className='primeira'>
      <div>
        <img src={ImagemPrimeira} alt="Imagem da Primeira tela" />
      </div>
      <div>
        <h1>Plant lover Community</h1>
        <p>Find gardening enthusiasts from all over the world</p>
      </div>
      <div className='pontinhosTela1'>
        <div className='pontinho1Tela1'></div>
        <div className='pontinho2Tela1' onClick={btntela2}></div>
        <div className='pontinho3Tela1' onClick={btntela3}></div>
      </div>
      <div className='btn'>
        <button onClick={btntela2}>Continue</button>
        <span onClick={btntela2}>Skip</span>
      </div>
    </div>
  )
}

export default Tela1