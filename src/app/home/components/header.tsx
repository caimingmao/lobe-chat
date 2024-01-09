const LandingHeader = () => {
    return <div className="navbar bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">TOOLBOSS</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 mb-0">
                <li><a>订阅</a></li>
                <li><a>帮助</a></li>
            </ul>
        </div>
    </div>;
}

export default LandingHeader;