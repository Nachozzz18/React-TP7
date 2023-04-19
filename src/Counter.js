import { useState, useEffect } from 'react';
import { Container } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './style.css'


export function Counter() {
    const [texto, setTexto] = useState("");
    const [contador, setContador] = useState(0);
    const [palabras, setPalabras] = useState(0);

    useEffect(() => {
        setContador(texto.length);
    }, [texto])

    useEffect(() => {
        const palabra = texto.trim().split(/\s+/);
        setPalabras(palabra.length);
    }, [texto])

    return (
        <Container maxWidth="sm" style={{ display: "flex", justifyContent: "center"}}>
            <div>
                <h1>Character and Word Counter</h1>
                <textarea maxLength={100} cols={30} rows={10} placeholder='Text here...' value={texto} onChange={(e) => setTexto(e.target.value)}></textarea>
                <p>Characters: {contador}</p>
                {contador >= 100 && <p>Límite alcanzado</p>}
                <p>Words: {palabras}</p>
            </div>
        </Container>
    );
}