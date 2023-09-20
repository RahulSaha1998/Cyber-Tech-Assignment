// import MainContent from "../MainContent/MainContent";
// import Sidebar from "../Sidebar/Sidebar";

// const Home = () => {
//     return (
//         <div className="flex">
//             <div className="w-1/5">
//                 <Sidebar />
//             </div>
//             <div className="w-4/5 bg-red-500">
//                 <MainContent />
//             </div>

//         </div>
//     );
// };

// export default Home;

import MainContent from "../MainContent/MainContent";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
    return (
        <div className="flex">
            <div className="w-1/5 hidden md:block">
                <Sidebar />
            </div>
            <div className="w-full bg-red-500">
                <MainContent />
            </div>
        </div>
    );
};

export default Home;
