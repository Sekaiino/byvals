// Library
import {
    CgAddR,
    CgCalendarToday,
    CgHome,
    CgLogIn,
    CgMenuLeft, CgPen,
    CgProfile, CgShoppingBag,
    CgShutterstock
} from "react-icons/cg";
import { Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link";

// CSS
import '../css/Navbar.css';

function Navbar() {

    document.addEventListener("click", e => {
        if(!e.target) return

        const isDropdownButton = (e.target as HTMLButtonElement).matches("[data-dropdown-button]")
        if (!isDropdownButton && (e.target as HTMLButtonElement).closest("[data-dropdown]") != null) return

        let currentDropdown: Element | null
        if (isDropdownButton) {
            currentDropdown = (e.target as HTMLButtonElement).closest("[data-dropdown]")

            if(currentDropdown) currentDropdown.classList.add("active")
        }

        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
            if (dropdown === currentDropdown) return
            dropdown.classList.remove("active")
        })
    })

    return(
        <header>
            <nav>
                <aside className="dropdown" data-dropdown="">
                    <button className="link" data-dropdown-button=""><CgMenuLeft/></button>
                    <aside className="dropdown-menu" style={{marginLeft: "2.5vw"}}>
                        <ul>
                            <li><Link className="dropdown-link" to='/'><CgHome />Accueil</Link></li>
                            <ul className="under-dropdown-menu">
                                <li><HashLink className="under-dropdown-link" to="/#main-home">Introduction</HashLink></li>
                                <li><HashLink className="under-dropdown-link" to="/#group">Photos</HashLink></li>
                            </ul>
                            <li><Link className="dropdown-link" to='/gallery'><CgShutterstock />Photos</Link></li>
                            <li><Link className="dropdown-link" to='/calendar'><CgCalendarToday />Calendrier</Link></li>
                            <li><Link className="dropdown-link" to='pricing'><CgShoppingBag />Tarifs et services</Link></li>
                            <li><Link className="dropdown-link" to='/contact'><CgPen />Contactez-moi</Link></li>
                        </ul>
                    </aside>
                </aside>
                <img src={require('../img/logo.png')} alt="logo"/>
                <aside className="dropdown" data-dropdown="">
                    <button className="link" data-dropdown-button=""><CgProfile /></button>
                    <aside className="dropdown-menu right" style={{right: "0", marginRight: "2.5vw"}}>
                        <ul>
                            <li><Link className="dropdown-link" to='/login'><CgLogIn />Se connecter</Link></li>
                            <li><Link className="dropdown-link" to="/new-account"><CgAddR />Créer un compte</Link></li>
                        </ul>
                    </aside>
                </aside>
            </nav>
            <div className="shape-divider-bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 119"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"></path>
                </svg>
            </div>
        </header>
    )
}

export default Navbar;