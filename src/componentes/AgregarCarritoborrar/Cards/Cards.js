
import './Cards.modules.css';
import {FiMinusCircle} from 'react-icons/fi';
import {FiPlusCircle } from "react-icons/fi";
import  { useState } from 'react';
import Carrito from '../../Carrito/Carrito';

    // shhift ctrl L para seleccionar muchas coincidencias


 const Cards = (estado, setAgregarAlCarro) =>{
    
   
    let prods=estado.productos;
    console.log('en cards ',prods)
    return (
        prods.map(a => (
           
           <div className='contenedorCards' key={a.foto}>
           <div className='imagenCards'>
		        <img            
                src={require(`../../img/Joyas/${a.foto}.jpg`)}
                    alt='FOTO 1'  />
           </div>


            <div className='texto'>
				<p className='codigoProd'>{a.foto} </p>  
                <p className='desc'>{a.desc}</p>
                <br></br>
                <p className='precio'>{a.precio} </p>  
			</div>
            <div className='contenedorCompra'>
       
                <div className='contenedorContador'>
                    <div className='stock'>Stock: {a.stock}</div>
                    <button  onClick={() => setCantidad(cantidad>0? cantidad - 1 : cantidad )     }>  {<FiMinusCircle className="App-logo" />}    </button>
                        <p> {cantidad} </p>
                    <button  onClick={() => setCantidad(cantidad<a.stock ? cantidad + 1 : cantidad ) }>    {<FiPlusCircle  className="App-logo"   />}      </button>
                </div>
      
            </div>

            <div className= 'contenedorAgregarCarrito' >
                <button onClick={  ()=> setAgregarAlCarro(a)} >   AGREGAR AL CARRITO </button>
            </div>
            
            </div>
        ))


     
    );


 
}
export default Cards;