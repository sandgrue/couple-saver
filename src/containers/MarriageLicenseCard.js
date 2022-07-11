import React from 'react'

const MarriageLicenseCard = () => {
    return (
        <>
            <div class="marrLicense">
                {/* <div class="container">
                    <div class="marrge_licnse brdrRadius4">
                        <div class="row">
                            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <div class="licnseTitl">
                                    <h3 class="fontWeight700 mb-0 primaryColor fontFamily2">How to Obtain a<br /> Marriage License?123</h3>
                                    <p class="fontSize14 fontWeight400 primaryColor mt-3">When applying for a marriage license, you need
                                        these documents</p>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                <div class="documntList">
                                    <ul>
                                        <li>Driver’s License or Passport</li>
                                        <li>Proof of citizenship and/or residence</li>
                                        <li>A birth certificate to show your age</li>
                                        <li>Proof of parental consent and/or court consent if underage</li>
                                        <li>A death certificate if you are widowed or divorce decree if you are divorced</li>
                                        <li>Blood test results (sometimes necessary)</li>
                                    </ul>
                                    <button href="#" class="orangeBtn brdrRadius4 fontWeight700 fontSize16">Call to Action</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


                <div class="container">
                    <div class="topTittle text-center">
                        <h5 class="orangeColor fontSize14">OBTAINING MARRIAGE LICENSE</h5>
                        <h3 class='primaryColor fontSize32 fontFamily2'>How to Obtain a Marriage License?</h3>
                        <p class="fontSize16 fontWeight400 primaryColor mb-0">When applying for a marriage license, you need these documents</p>
                        <button href="#" class="orangeBtn brdrRadius4 fontWeight700 fontSize16 transition mt-24">Discover Now</button>
                    </div>    
                    <div class="marrigeLicense_grid">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div class="d-flex align-items-center licenseList">
                                    <span>
                                        <img class="" src={require('../assets/img/license1.svg').default} />
                                    </span>
                                    <h4 class="fontSize16 fontWeight400 tertiaryColor mb-0">Proof of citizenship and/or residence</h4>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div class="d-flex align-items-center licenseList">
                                    <span>
                                        <img class="" src={require('../assets/img/license2.svg').default} />
                                    </span>
                                    <h4 class="fontSize16 fontWeight400 tertiaryColor mb-0">A birth certificate to show your age</h4>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div class="d-flex align-items-center licenseList">
                                    <span>
                                        <img class="" src={require('../assets/img/license3.svg').default} />
                                    </span>
                                    <h4 class="fontSize16 fontWeight400 tertiaryColor mb-0">A death certificate if you are widowed or<br/> divorce decree if you are divorced</h4>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div class="d-flex align-items-center licenseList">
                                    <span>
                                        <img class="" src={require('../assets/img/license4.svg').default} />
                                    </span>
                                    <h4 class="fontSize16 fontWeight400 tertiaryColor mb-0">Driver’s License or Passport</h4>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div class="d-flex align-items-center licenseList">
                                    <span>
                                        <img class="" src={require('../assets/img/license5.svg').default} />
                                    </span>
                                    <h4 class="fontSize16 fontWeight400 tertiaryColor mb-0">Proof of parental consent and/or court<br/> consent if underage</h4>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div class="d-flex align-items-center licenseList">
                                    <span>
                                        <img class="" src={require('../assets/img/license6.svg').default} />
                                    </span>
                                    <h4 class="fontSize16 fontWeight400 tertiaryColor mb-0">Blood test results (sometimes necessary)</h4>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
        </>
    )
}

export default MarriageLicenseCard