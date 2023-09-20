import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
    return (
        <div style={{ height: "100vh" }} className="flex flex-col">
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
        </div>
    );
};

export default Main;
