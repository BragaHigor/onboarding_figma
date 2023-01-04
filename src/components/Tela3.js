//CSS
import './Tela3.css'

//imagem
import ImagemTerceira from '../assets/img3.svg'

const Tela3 = ({btntela1, btntela2}) => {
  return (
    <div className='terceira'>
      <div>
        <img src={ImagemTerceira} alt="Imagem da Terceira tela"/>
      </div>
      <div>
        <h1>Buy & Sell Tools</h1>
        <p>Buy & sell good quality products for your beautiful plants</p>
      </div>
      <div className='pontinhosTela3'>
        <div className='pontinho1Tela3' onClick={btntela1}></div>
        <div className='pontinho2Tela3' onClick={btntela2}></div>
        <div className='pontinho3Tela3'></div>
      </div>
      <div className='btn'>
        <button onClick={btntela1}>Get started</button>
      </div>
    </div>
  )
}

export default Tela3