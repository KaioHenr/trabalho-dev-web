import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
    NotFound,
} from "../Paginas/index.js";

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