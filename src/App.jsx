import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuPrincipal from "./pages/MenuPrincipal";
import Perfil from "./pages/perfil/Perfil";
import Navbar from "./layout/Navbar";
import Agendar from "./pages/agendamento/Agendar";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar/>
				<Routes>
					<Route path="/" element={<MenuPrincipal isAdm={false}/>}/>
					<Route path="/agendar" element={<Agendar/>}/>
					<Route path="/perfil" element={<Perfil/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
