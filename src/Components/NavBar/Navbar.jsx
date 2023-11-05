import { Link } from "react-router-dom";

const Navbar = () => {
    const navLink = <>
        <li><Link to='/' className="text-[#DDDDDD] mr-2">Home</Link></li>
        <li><Link to='/all_jobs' className="text-[#DDDDDD] mr-2">All Jobs</Link></li>
        <li><Link to='/blogs' className="text-[#DDDDDD] mr-2">Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-[#007B7F] dark:bg-[#191970] sticky top-0 z-20 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* Nav ber Links For Mobile Size  */}
                        {navLink}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl text-[#DDDDDD] ">JobSwift</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* Nav ber Links For Desktop Size  */}
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold py-2 px-4 rounded-br-full rounded-tl-full transition duration-300 ease-in-out hover:scale-x-105">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;