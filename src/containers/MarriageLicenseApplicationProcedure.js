import React from 'react'

const MarriageLicenseApplicationProcedure = () => {
    return (
        <div class="marrgeProcedures">
            <div class="container">
                <div class="procedureProgress brdrRadius4">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div class="procedreTitle">
                                <h3 class="fontSize28 mb-0 fontWeight700 primaryColor fontFamily2">Marriage License<br /> Application
                                    Procedures</h3>
                                <p class="mt-3 primaryColor fontWeight400 fontSize14">Steps to complete an application for<br /> a
                                    marriage license</p>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div class="procedureListNum">
                                        <div class="procedureIcon brdrRadius8">
                                            <img src={require('../assets/img/procedureIcn1.svg').default} />
                                            <span class="procdrNumber brdrRadius50 fontSize13">1</span>
                                        </div>
                                        <p class="mb-0 fontSize14 fontWeight400 primaryColor procedrePara mt-3">One or both spouses must
                                            appear in person at a courthouse, city hall, or town office.</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div class="procedureListNum">
                                        <div class="procedureIcon brdrRadius8">
                                            <img src={require('../assets/img/procedureIcn2.svg').default} />
                                            <span class="procdrNumber brdrRadius50 fontSize13">2</span>
                                        </div>
                                        <p class="mb-0 fontSize14 fontWeight400 primaryColor procedrePara mt-3">Sign the marriage license
                                            application in the presence of the clerk (along with payment of a fee).</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div class="procedureListNum">
                                        <div class="procedureIcon brdrRadius8">
                                            <img src={require('../assets/img/procedureIcn3.svg').default} />
                                            <span class="procdrNumber brdrRadius50 fontSize13">3</span>
                                        </div>
                                        <p class="mb-0 fontSize14 fontWeight400 primaryColor procedrePara mt-3">The marriage license is
                                            either mailed or picked up by the couple.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarriageLicenseApplicationProcedure