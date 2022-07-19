import React from 'react'
import BannerSmallCards from '../../containers/BannerSmallCards'
import HowToObtainLicesnse from './HowToObtainLicesnse'
import StateWiseList from './StateWiseList'

const StatePageMidSection = ({ countyName, listData }) => {

    return (
        <div class="usMarr_page">
            <div class="container">
                <div class="pageTitle">
                    <h1 class="fontSize32 fontWeight700 primaryColor fontFamily2">How to Obtain a Marriage License in {countyName}?</h1>
                    <p class="mb-0 fontSize16 fontWeight400 primaryColor">Here are some things that you want to consider to obtain a marriage license in {countyName}</p>
                </div>
                <div class="row">


                    {/* LEFT SIDE SECTION  */}

                    <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="stateLeftPage">
                            <div class="row">
                                <HowToObtainLicesnse countyName={countyName} />

                                <StateWiseList countyName={countyName} listData={listData} />
                            </div>
                        </div>
                    </div>



                    {/* RIght SIDE SECTION  */}

                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 min1199">
                        <div class="stateRightPage">
                            <div class="w-302 mb-24">
                                <BannerSmallCards
                                    mainDivColor={'marriage_Record'}
                                    boxSpecificImage={`marrgeRecord`}
                                    boxTitle={"Marriage Records Search"} />
                            </div>
                            <div class="w-302 mb-24">
                                <div class="creditScore mb-24">
                                    <img class="" src={require('../../assets/img/creditScore.png').default} />
                                </div>
                            </div>
                            <div class="w-302 mb-24">
                                <BannerSmallCards
                                    mainDivColor={'divorce_recod'}
                                    boxSpecificImage={'wedngLaws'}
                                    boxTitle={'Divorce Records Search'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatePageMidSection