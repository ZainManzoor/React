import Navigation from "./Navigation"

// Logo Component
const Logo = () => {
    return (
        <div className="logo">
            <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="Logo" />
        </div>
    )
}


// Header Component
const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <Navigation />
        </div>
    )
}
export default Header;