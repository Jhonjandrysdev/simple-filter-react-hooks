import Barra from "./components/BarraNav";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import Layout from "./components/LayoutPage";
import NotFunction from "./pages/NotFunction";
import BlogDetails from './pages/BlogDetails';
function App() {
  return (
    <>  
      <div className="container my-4">
          <Barra />
      <h1 className="text-center mt-4">App</h1>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Inicio />} path="/Inicio" />
          <Route element={<Nosotros />} path="/Nosotros" />
          <Route element={<Contacto />} path="/Contactos" />
          <Route element={<Blog />} path="/Blog"/>
          <Route element={<BlogDetails/>} path="/Blog/:id"/>
        </Route>
          <Route element={<NotFunction/>} path="*"/>
      </Routes>
      </div>
    </>
  );
}

export default App;
