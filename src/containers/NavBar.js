import React, { useEffect } from 'react'
import { Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

// import '../assets'

const NavBar = () => {

    const loca = window.location.href;


    const [scrolled, setScrolled] = React.useState(false);

    // const handleScroll = () => {
    //     const offset = window.scrollY;
    //     console.log(offset);
    //     if (offset > 124) {
    //         setScrolled(true);
    //     }
    //     else {
    //         setScrolled(false);
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    // })

    let x = ['navbarTop transition'];
    // if (scrolled) {
    //     x.push('scrolled');
    // }


    return (
        <>
            {/* <Navbar sticky="top"> */}



            <div
                className={x.join(" ")}
            >
                <div class="usMarr_navBar w-100 bgWhite top-0 ">
                    {/* <!--topNavbar--> */}
                    <div class="topNavbr">
                        <div class="d-flex align-items-center">
                            <Link to="/">
                                <img src={require('../assets/img/logo2.svg').default} />
                            </Link>
                            <div class="ms-auto">
                                <img src={require('../assets/img/advertisemntPostr2.png').default} />
                            </div>
                        </div>
                    </div>
                    {/* <!--nav--> */}



                    <nav class="navbar navbar-expand-lg navbar-light" id="mainNavbar" >
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarText">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <NavLink exact activeClassName="navLinksActiveclass" to="/marriage-laws">Marriage Laws</NavLink>
                                        {/* <a class="nav-link" href="/state">Marriage Laws</a> */}
                                    </li>
                                    <li class="nav-item">
                                        <NavLink exact activeClassName="navLinksActiveclass" to="/immigration-laws">Immigration Laws</NavLink>
                                        {/* <a class="nav-link" href="/immigrationLaws">Immigration Laws</a> */}
                                    </li>
                                    <li class="nav-item">
                                        <NavLink exact activeClassName="navLinksActiveclass" to="/family-laws">Family Laws</NavLink>
                                        {/* <a class="nav-link" href="/familyLaws">Family Laws</a> */}
                                    </li>
                                    <li class="nav-item">
                                        <NavLink exact activeClassName="navLinksActiveclass" to="/wedding-ceremonies">Wedding Ceremonies</NavLink>
                                        {/* <a class="nav-link" href="#">Wedding Ceremonies</a> */}
                                    </li>
                                </ul>
                                <div class="navbar-text socialIcons">
                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item">
                                            <a href="#"><img src={require('../assets/img/fb.svg').default} /></a>
                                        </li>
                                        <li class="list-group-item">
                                            <a href="#"><img src={require('../assets/img/twtr.svg').default} /></a>
                                        </li>
                                        <li class="list-group-item">
                                            <a href="#"><img src={require('../assets/img/inst.svg').default} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>



            {/* </Navbar> */}
        </>
    )
}

export default NavBar