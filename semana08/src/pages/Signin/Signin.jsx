import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css'
import Footer from '../../components/Footer/Footer';

function Signin() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();  

    function handleSubmit(e) {
        e.preventDefault()
        if (email === 'admin@admin.com' && senha === 'admin123') {
            // redireciona para a home
            navigate('/home')
            return
        }

        alert('Email e/ou senha incorretos')
    }
    
    return (
        <>
            <div className='card-login'>
                <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75" width={175} height={56} alt="" />
                <p>Entrar na conta com outros serviços</p>
                <button className='fb'>CONTINUAR COM FACEBOOK</button>
                <button className='apple'>CONTINUAR CON A APPLE</button>
                <span>---------------------------- OU ----------------------------</span>
                <p>Insira seu e-mail e senha para entrar ou se cadastrar:</p>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <button type='submit'>Entrar</button>
                </form>
                <p>Precisa de ajuda? Entre no <a href="#">Me Ajuda, Zé!</a></p>
            </div>
            <Footer/>
        </>
    )
}

export default Signin