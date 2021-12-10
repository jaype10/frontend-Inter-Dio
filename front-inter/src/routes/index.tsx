import {Routes, Route, BrowserRouter} from "react-router-dom";
import SingIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard/Index';


export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SingIn/>}/>
                <Route path="/signup" element={<SingUp/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router