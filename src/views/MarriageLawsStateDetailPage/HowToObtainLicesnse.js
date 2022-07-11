import React from 'react'

const HowToObtainLicesnse = () => {
    return (
        <>


            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="acceptedForm whiteBoxList">
                    <h3 class="fontSize16 primaryColor fontWeight700">Accepted Form of Identifications</h3>
                    <ul class="mb-0">
                        <li class="fontSize14 fontWeight400 primaryColor">Birth Certificate</li>
                        <li class="fontSize14 fontWeight400 primaryColor">Military ID</li>
                        <li class="fontSize14 fontWeight400 primaryColor">Non-drivers ID</li>
                        <li class="fontSize14 fontWeight400 primaryColor">Passport</li>
                        <li class="fontSize14 fontWeight400 primaryColor">School Transcript</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="acceptedForm whiteBoxList">
                    <h3 class="fontSize16 primaryColor fontWeight700">Accepted Conditions</h3>
                    <ul class="mb-0">
                        <li class="fontSize14 fontWeight400 primaryColor">Minimum age of 18 year old (with parents’ consent)</li>
                        <li class="fontSize14 fontWeight400 primaryColor">Allowed marrying one’s first cousin</li>
                        <li class="fontSize14 fontWeight400 primaryColor">30 days before the license expires</li>
                        <li class="fontSize14 fontWeight400 primaryColor">Residency in Los Angeles is required</li>
                        <li class="fontSize14 fontWeight400 primaryColor">15 days waiting time required before marriage</li>
                        <li class="fontSize14 fontWeight400 primaryColor">2 witnesses required</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="getHelp brdrRadius4 d-flex align-items-center">
                    <div class="helpIcon">
                        <img src={require('../../assets/img/home.svg').default} />
                    </div>
                    <div class="helpText">
                        <h4 class="fontSize16 fontWeight700 primaryColor">Need help to obtain a Marriage License in Los Angeles?</h4>
                        <p class="mb-0 fontSize14 fontWeight400">USA Marriage is here for you to help!</p>
                    </div>
                    <div class="ms-auto">
                        <button href="#" class="orangeBtn brdrRadius4 fontWeight700 fontSize16">Get Help Now</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HowToObtainLicesnse