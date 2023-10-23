import {Outlet} from 'react-router-dom';

const Layout = () =>{
    return(
        <>
        <div className="container text-center">

            <Outlet/>

            <h4>Este es el contenido estatico de todas las paginas</h4>
        </div>
        
        </>
    )
}
export default Layout;