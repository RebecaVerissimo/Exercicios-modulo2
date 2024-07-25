import './Modal.css'
import { useState } from 'react';


function Modal() {
 
    const [ativo, setAtivo] = useState(true)

    function fecharModal() {
        setAtivo(false)
    }
    
    return (
        <>
            {ativo && <div className="modal">
                <div className='modal-content'>
                    
                    <h4>Você tem 18 anos ou mais?</h4>

                    <div>
                        <button type='button' className='btn-nao' onClick={fecharModal}>NÃO</button>
                        <button type='button' className='btn-sim' onClick={fecharModal}>SIM</button>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Modal