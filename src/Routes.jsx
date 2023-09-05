import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm/LoginForm";
import Register from "./pages/Register/Register";


export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/loginform' element={<LoginForm />} />
                <Route path='/autoregister' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}