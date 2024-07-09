import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { useEffect, useState } from 'react'

function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    const form = {
      nome,
      email,
      mensagem
    }
    console.log('Formulário a ser enviado: ', form);
    setNome('');
    setEmail('');
    setMensagem('');
  }

  return (
    <>
      <Header></Header>

      <div className='contato'>
        <div className='form'>
        <h1>Contato</h1>
          <form>
            <fieldset>
            <label>Nome: </label>
            <input type='text' placeholder='Digite seu nome' required 
            value={nome} onChange={(e) => setNome(e.target.value)}/>
            </fieldset>

            <fieldset>
              <label>E-mail: </label>
              <input type='email' placeholder='Digite seu e-mail' required 
              value={email} onChange={(e) => setEmail(e.target.value)} />
            </fieldset>

            <fieldset>
              <label>Mensagem: </label>
              <textarea type='text' placeholder='Digite sua mensagem' required 
              value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
            </fieldset>

            <button onClick={(e) => handleSubmit(e)}>Enviar</button>            
          </form>
        </div>        
      </div>

      <Footer></Footer>      
    </>
  )
}

export default App
