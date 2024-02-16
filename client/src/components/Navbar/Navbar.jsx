import { Link } from "react-router-dom";



const Navbar = () =>{
const logoURL = 'https://res.cloudinary.com/dpxrcotbh/image/upload/v1708125594/ry82puisrdr7dnqylrsl.png'
  return (
<nav>
<img src={logoURL} alt="Logo" />

<Link to="/home" >Inicio </Link>

     <Link to="/about">¿Quiénes somos?</Link>

     <Link to="/explore" >Explora</Link>

     <button><Link to="/loging" >Ingresa</Link></button>
</nav>
  )
}

export default Navbar