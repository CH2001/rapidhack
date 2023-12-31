import Image from "next/image";
import Link from "next/link"; 

const TopPageNavigation = () => {
    // bg-base-100
    return (
    <div className="navbar">
        {/* Hamburger menu + dropdown */}
        <div className="flex-none">
            <div className="dropdown">
                {/* Menu icon */}
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>

                {/* Dropdown */}
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/accessibility">Accessibility Rating</Link></li>
                    <li><Link href="/guide">Guide</Link></li>
                    <li><Link href="/store">Store</Link></li>
                    <li><Link href="/">My profile</Link></li>
                    <li><Link href="/">Contact Us</Link></li>
                </ul>
            </div>
        </div>

        {/* Logo */}
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl text-white">WEGO</a>
        </div>

       {/* Notifications */}
        <div className="flex-none mr-1">
            <Link href="/notificationcustomize">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs bg-red-500 border border-red-500 indicator-item"></span>
                    </div>
                </button>
            </Link>
        </div>

        {/* User profile icon */}
        <div className="flex-none gap-2 mr-3">

            <div className="dropdown dropdown-end">
                {/* User profile icon */}
                <Image tabIndex={0} src={"/images/ProfilePic.png"} width={25} height={25}/>

                {/* Expand list */}
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between"> Profile 
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
    );
};
    
export default TopPageNavigation;