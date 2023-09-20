import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-413px)] py-10 max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;