//CSS
import './Tela2.css'

//imagem
import ImagemSegunda from '../assets/img2.svg'

const Tela2 = ({btntela1, btntela3}) => {
  return (
    <div className='segunda'>
      <div>
        <img src={ImagemSegunda} alt="Imagem da Segunda tela"/>
      </div>
      <div>
        <h1>Get fast & safe delivery</h1>
        <p>Get good quality products for your plants</p>
      </div>
      <div className='pontinhosTela2'>
        <div className='pontinho1Tela2' onClick={btntela1}></div>
        <div className='pontinho2Tela2'></div>
        <div className='pontinho3Tela2' onClick={btntela3}></div>
      </div>
      <div className='btn'>
        <button onClick={btntela3}>Continue</button>
        <span onClick={btntela3}>Skip</span>
      </div>
    </div>
  )
}

export default Tela2