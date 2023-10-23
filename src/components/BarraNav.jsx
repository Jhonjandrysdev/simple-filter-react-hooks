import { NavLink} from 'react-router-dom';
const Barra = () => {
  return (
    <>
      <div className="container flex align-items-center justify-content-center">
        <div className="navbar navbar-dark bg-dark">
            <NavLink className="btn btn-outline-primary" to="/Inicio">Inicio</NavLink>
            <NavLink className="btn btn-outline-primary" to="/Nosotros">Nosotros</NavLink>
            <NavLink className="btn btn-outline-primary" to="/Contactos">Contactos</NavLink>
            <NavLink className="btn btn-outline-primary" to="/Blog">Blog</NavLink>
        </div>
      </div>
    </>
  );
};
export default Barra;
