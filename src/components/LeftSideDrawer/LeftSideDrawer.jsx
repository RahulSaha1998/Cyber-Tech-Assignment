import { FaHamburger } from 'react-icons/fa';

const LeftSideDrawer = () => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="text-white flex justify-center items-center gap-1">Sidebar <FaHamburger /></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-purple-400 text-base-content">
                        <h2 className='text-lg'>Sidebar</h2>
                        <div>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Item 1</option>
                                <option>item A</option>
                                <option>item B</option>
                            </select>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Item 2</option>
                                <option>item A</option>
                                <option>item B</option>
                            </select>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Item 3</option>
                                <option>item A</option>
                                <option>item B</option>
                            </select>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftSideDrawer;