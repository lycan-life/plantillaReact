import React from 'react';
import '../css/Productos.css';
import imagenes from '../images/exportar';
export default function Productos({curso,guardarCurso}) {
    const {img1, img2,img3,img4,img5,img6,img7,img8,img9} = imagenes;
    // const cursoSeleccionado = {};
    function cursoAgregado(targeta) {
        const cursoSeleccionado = {
            imagen : targeta.querySelector('img'),
            titulo : targeta.querySelector('h3').textContent,
            descripcion : targeta.querySelector('p').textContent,
            precio : targeta.querySelector('span').textContent
        };
        guardarCurso([
            ...curso,
            cursoSeleccionado
        ])
    }
    console.log(curso);
    return (
        <div className="contenedor">
            <h2>Catalogo de los mejores Cursos</h2>
            <div className="cursos">

                <div className="curso">
                    
                        <img src={img1}></img>
                    
                    <div className="descripcion">
                        <h3 className="nombre">Desarrollo con PHP</h3>
                        <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <div className="precios">
                            <a href="#" 
                                className="boton"
                                onClick= {(e)=>{
                                    e.preventDefault();
                                    cursoAgregado(e.target.parentElement.parentElement.parentElement);
                                }}    
                            >Agregar</a>
                            <p><span>$10</span></p>
                        </div>
                    </div>
                </div> {/* fin de target */}
                
                <div className="curso">
                    
                        <img src={img2}></img>
                    
                    <div className="descripcion">
                        <h3 className="nombre">Desarrollo con PHP</h3>
                        <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <div className="precios">
                            <a href="#" className="boton"
                            onClick= {(e)=>{
                                e.preventDefault();
                                cursoAgregado(e.target.parentElement.parentElement.parentElement);
                            }} 
                            >Agregar</a>
                            <p><span>$10</span></p>
                        </div>
                    </div>
                </div> {/* fin de target */}

                <div className="curso">
                    
                        <img src={img3}></img>
                    
                    <div className="descripcion">
                        <h3 className="nombre">Desarrollo con PHP</h3>
                        <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <div className="precios">
                            <a href="#" className="boton"
                            onClick= {(e)=>{
                                e.preventDefault();
                                cursoAgregado(e.target.parentElement.parentElement.parentElement);
                            }} 
                            >Agregar</a>
                            <p><span>$10</span></p>
                        </div>
                    </div>
                </div> {/* fin de target */}

                <div className="curso">
                    
                        <img src={img4}></img>
                    
                    <div className="descripcion">
                        <h3 className="nombre">Desarrollo con PHP</h3>
                        <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <div className="precios">
                            <a href="#" className="boton"
                            onClick= {(e)=>{
                                e.preventDefault();
                                cursoAgregado(e.target.parentElement.parentElement.parentElement);
                            }} 
                            >Agregar</a>
                            <p><span>$10</span></p>
                        </div>
                    </div>
                </div> {/* fin de target */}

                <div className="curso">
                    
                        <img src={img5}></img>
                    
                    <div className="descripcion">
                        <h3 className="nombre">Desarrollo con PHP</h3>
                        <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <div className="precios">
                            <a href="#" className="boton"
                            onClick= {(e)=>{
                                e.preventDefault();
                                cursoAgregado(e.target.parentElement.parentElement.parentElement);
                            }} 
                            >Agregar</a>
                            <p><span>$10</span></p>
                        </div>
                    </div>
                </div> {/* fin de target */}

                <div className="curso">
                    
                        <img src={img6}></img>
                    
                    <div className="descripcion">
                        <h3 className="nombre">Desarrollo con PHP</h3>
                        <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <div className="precios">
                            <a href="#" className="boton"
                            onClick= {(e)=>{
                                e.preventDefault();
                                cursoAgregado(e.target.parentElement.parentElement.parentElement);
                            }} 
                            >Agregar</a>
                            <p><span>$10</span></p>
                        </div>
                    </div>
                </div> {/* fin de target */}

                <div className="curso">
                    
                        <img src={img7}></img>
                    
                    <div className="descripcion">
                        <h3 className="nombre">Desarrollo con PHP</h3>
                        <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <div className="precios">
                            <a href="#" className="boton"
                            onClick= {(e)=>{
                                e.preventDefault();
                                cursoAgregado(e.target.parentElement.parentElement.parentElement);
                            }} 
                            >Agregar</a>
                            <p><span>$10</span></p>
                        </div>
                    </div>
                </div> {/* fin de target */}

                <div className="curso">
                    
                        <img src={img8}></img>
                    
                    <div className="descripcion">
                        <h3 className="nombre">Desarrollo con PHP</h3>
                        <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <div className="precios">
                            <a href="#" className="boton"
                            onClick= {(e)=>{
                                e.preventDefault();
                                cursoAgregado(e.target.parentElement.parentElement.parentElement);
                            }} 
                            >Agregar</a>
                            <p><span>$10</span></p>
                        </div>
                    </div>
                </div> {/* fin de target */}

                <div className="curso">
                    
                        <img src={img9}></img>
                    
                    <div className="descripcion">
                        <h3 className="nombre">Desarrollo con PHP</h3>
                        <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <div className="precios">
                            <a href="#" className="boton"
                            onClick= {(e)=>{
                                e.preventDefault();
                                cursoAgregado(e.target.parentElement.parentElement.parentElement);
                            }} 
                            >Agregar</a>
                            <p><span>$10</span></p>
                        </div>
                    </div>
                </div> {/* fin de target */}
            </div>
        </div>
    )
}
