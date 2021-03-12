import React from 'react'
import '../css/Footer.css'
export default function Footer({fecha}) { 
    return (
        <div>
            <footer>
                <p>Todos los Derechos Reservados &copy;<span>{fecha}</span></p>
            </footer>
        </div>
    )
}
