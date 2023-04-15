import './AgregarCarrito.modules.css';
//import { MyContext } from '../../App.js';


function AgregarCarrito(props){
    const { prod, fcion }  = props;


    const pr = props.producto;
   
    const [cantidad, setCantidad] = useState(0);
    const stock=pr.stock;

    //console.log(props)
   // fcion= props.fcion;
     
 
      
        return  (
      
        <div className='contenedorCompra'>
       
            <div className='contenedorContador'>
            <div className='stock'>Stock: {stock}</div>
            <button  onClick={() => setCantidad(cantidad>0? cantidad - 1 : cantidad )     }>  {<FiMinusCircle className="App-logo" />}    </button>
                <p> {cantidad} </p>
            <button  onClick={() => setCantidad(cantidad<stock ? cantidad + 1 : cantidad ) }>    {<FiPlusCircle  className="App-logo"   />}      </button>
            </div>
           
          
            <div className= 'contenedorAgregarCarrito' >
                <button onClick= {handleClick(e)} >   AGREGAR AL CARRITO </button>
            </div>
           
        </div>

    );


} 
export default AgregarCarrito;

    
