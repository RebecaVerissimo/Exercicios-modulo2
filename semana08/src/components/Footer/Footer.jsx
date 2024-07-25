import './Footer.css'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            <div className="footer">
                <div>
                    <Link>Termos de uso</Link>
                    <Link>Política de privacidade</Link>
                </div>
                <p>ZE SOLUCOES TECNOLOGICAS DE COMERCIO DE BEBIDAS LTDA. - CNPJ: 37.657.197/0001-46 <br/>
                Rua Fradique Coutinho, 1632 - CEP: 05.416-002 <br/>
                Pinheiros - São Paulo/SP</p>
            </div>
        </>
    )
}

export default Footer