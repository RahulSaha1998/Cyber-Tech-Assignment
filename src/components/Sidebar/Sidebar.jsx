
const Sidebar = () => {
    return (
        <div className="min-h-full bg-purple-400">
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
        </div>
    );
};

export default Sidebar;