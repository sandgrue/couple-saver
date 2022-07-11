import React from 'react'
import GovtIssueCard from './GovtIssueCard'

const GovtIssueComponent = () => {
    return (
        <>
            <div class="govrnmntIssued">
                <div class="container">
                    <div class="govrnmntIdntificatn brdrRadius4">
                        <div class="row justify-content-md-center">
                            <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                <h1 class="fontSize32 text-center fontFamily2">Government Issued Identification</h1>
                                <div class="row">

                                    <GovtIssueCard imageName={'passport'} headingText={'Government Issued Identification'} />
                                    <GovtIssueCard imageName={'waitngPeriod'} headingText={'Waiting Period'} />
                                    <GovtIssueCard imageName={'ceremnyWitness'} headingText={'Ceremony Witness'} />
                                    <GovtIssueCard imageName={'previousMarrge'} headingText={'Previous Marriage Records'} />
                                    {/* <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="identifictnList text-center">
                                            <img class="brdrRadius16" src={require('../../assets/img/passport.png').default} />
                                            <h3 class="fontSize18 text-center fontWeight700 mt-3 primaryColor">Government Issued<br />
                                                Identification</h3>
                                        </div>
                                    </div> */}
                                    {/* <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="identifictnList text-center">
                                            <img class="brdrRadius16" src={require('../../assets/img/waitngPeriod.png').default} />
                                            <h3 class="fontSize18 text-center fontWeight700 mt-3 primaryColor">Waiting Period</h3>
                                        </div>
                                    </div> */}
                                    {/* <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="identifictnList text-center">
                                            <img class="brdrRadius16" src={require('../../assets/img/ceremnyWitness.png').default} />
                                            <h3 class="fontSize18 text-center fontWeight700 mt-3 primaryColor">Ceremony Witness</h3>
                                        </div>
                                    </div> */}
                                    {/* <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="identifictnList text-center">
                                            <img class="brdrRadius16" src={require('../../assets/img/previousMarrge.png').default} />
                                            <h3 class="fontSize18 text-center fontWeight700 mt-3 primaryColor">Previous Marriage<br /> Records
                                            </h3>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default GovtIssueComponent