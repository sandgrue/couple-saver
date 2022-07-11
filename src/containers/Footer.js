import React from 'react'


const Footer = () => {
    return (
        <div class="usMarr_footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-3 col-xs-12">
                        <div class="footerLogo">
                            <img src={require('../assets/img/footerLogo.svg').default} />
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-9 col-xs-12">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="footeLinks">
                                    <h3 class="whiteColor fontSize18 fontWeight700 mb-0 fontFamily2">Marriage Laws</h3>
                                    <ul class="mt-3">
                                        <li class="fontSize14"><a href="#" class="whiteColor">State Marriage Laws</a></li>
                                        <li class="fontSize14"><a href="#" class="whiteColor">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="footeLinks">
                                    <h3 class="whiteColor fontSize18 fontWeight700 mb-0 fontFamily2">Wedding Laws</h3>
                                    <ul class="mt-3">
                                        <li class="fontSize14"><a href="#" class="whiteColor">State Laws</a></li>
                                        <li class="fontSize14"><a href="#" class="whiteColor">Wedding Officiant</a></li>
                                        <li class="fontSize14"><a href="#" class="whiteColor">Fees by State</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="footeLinks">
                                    <h3 class="whiteColor fontSize18 fontWeight700 mb-0 fontFamily2">USA Marriage</h3>
                                    <ul class="mt-3">
                                        <li class="fontSize14">
                                            <a href="#" class="whiteColor d-flex align-items-center">
                                                <img src={require('../assets/img/mail.svg').default} />
                                                <span>mail@usamarriage.com</span>
                                            </a>
                                        </li>
                                        <li class="fontSize14">
                                            <a href="#" class="whiteColor d-flex align-items-center">
                                                <img src={require('../assets/img/phone.svg').default} />
                                                <span>+1 234 5678 123</span>
                                            </a>
                                        </li>
                                        <li class="fontSize14">
                                            <a href="#" class="whiteColor d-flex align-items-start">
                                                <img src={require('../assets/img/map-pin.svg').default} />
                                                <span>Ms Alice Smith Apartment 1c 213 Derrick Street
                                                    Boston, MA 02130 USA</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 marginBotomFooter">
                        <div class="d-flex align-items-center">
                            <p class="mb-0 whiteColor">&#169; 2022 USA Marriage. All Rights Reserved</p>
                            <div class="ms-auto">
                                <ul class="footerLowrLinks">
                                    <li class="fontSize14 fontWeight400"><a href="#" class="whiteColor">Privacy Policy</a></li>
                                    <li class="fontSize14 fontWeight400"><a href="#" class="whiteColor">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer