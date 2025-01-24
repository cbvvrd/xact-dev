

function Header() {
    return (
        <>
        <header className="flex px-5 py-3 border-b border-black">
            <img src="images/xact-logo-1.png" alt="Xact Developments logo" className="h-16"/>
            <button>menu</button>
            <div className="hidden ">
                <a href="#">Home</a>
                <a href="#">Demo</a>
                <a href="#">Contact</a>
            </div>
        </header>
        </>
    );
}

export default Header;