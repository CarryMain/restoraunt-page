import './header.scss';

const Header = () => {
    return ( 
        <header className="header">
            <h1>Coffellity</h1>
            <nav className="header__nav">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/contacts">Contacts</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header 