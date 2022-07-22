function Header(){
    return (
        <>
            <header className="header">
        <div className="logoContent">
            <a href="#" className="logo"><img src="" alt=""/></a>
            <h1 className="logoName">Rochers </h1>
        </div>

        <nav className="navbar">
            <a href="#home">home</a>
            <a href="#product">Products</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact Us</a>
        </nav>

        <div className="icon">
            <i className="fas fa-search" id="search"></i>
            <i className="fas fa-bars" id="menu-bar"></i>
        </div>

        <div className="search">
            <input type="search" placeholder="search..."/>
        </div>
    </header>
        </>
  )
}

export default Header