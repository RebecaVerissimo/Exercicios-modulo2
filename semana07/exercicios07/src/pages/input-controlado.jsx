import { useState } from "react"

export function InputControlado() {

  
    const [texto, setTexto] = useState(null)

    return (
        <div className="container mt-4">
            <input 
                    placeholder="Escreva seu texto" 
                    type="text"
                    className="form-control" 
                    onChange={(event) => setTexto(event.target.value)} />

            <span>{texto}</span>
        </div>
    )
}