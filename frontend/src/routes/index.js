import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
    Acesso,
    Formulario,
    NotFound,
    GetTests,
    DashBoard,
    CandidatoEdit,
    Cadastro,
    Candidatos,
    Redirect,
    NoAccess,
    Login
} from "../Paginas/index.js";
import ProtectedRoute from './protectedRoutes.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;