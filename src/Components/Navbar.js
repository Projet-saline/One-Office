import React from "react";
import { Link } from "react-router-dom";

const navbarSettings = [
    {
        name: 'Courses',
        link: '/courses'
    },
    {
        name: 'Blog',
        link: '/blog'
    },
    {
        name: 'News',
        link: '/news'
    },
    {
        name: "Faq",
        link: '/faq'
    }
]

const Navbar = () =>{
    return(
        <>
            <div className="Navbar-All">
                <div className="Logo">
                    <Link to='/'>
                        <img 
                            src="https://assets.website-files.com/61ae28f54843d30203fad6db/61c20adcfff22fd7c76d8911_Group%202620.svg" 
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="Menu">
                    {
                        navbarSettings.map((setting) =>
                            <Link 
                                className={`Link ${setting?.className && setting.className}`}
                                to={setting.link}
                            >
                                {setting.name}
                            </Link>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Navbar;