import React, { useEffect } from 'react'
import { familyLawsContent } from '../../constants/JSONS'
import BannerSmallCards from '../../containers/BannerSmallCards'
import LongContentCard from '../../containers/LongContentCard'
import StateListAndSearch from '../../containers/StateListAndSearch'
import { getCardLb, getClassForNav, getCurrentHash, getLocationParaCount, scrollToLink, useScrollPositionHook } from '../../Functions/functions'

// import '../../assets'

const FamilyLaws = () => {






    const pageLocation = window.location.href;


    const scrollPos = useScrollPositionHook();
    console.log(scrollPos, "PPPPPP");





    // window.scrollTo(0, 300);

    // window.scrollTo({
    //     top: 300,
    //     left: 0,
    //     behavior: "auto"
    // });


    return (



        <div className='bgGrey'>



            <div class="usMarr_breadcrumb">
                <div class="container">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item fontSize14"><a href="#">Home</a></li>
                            <li class="breadcrumb-item fontSize14"><a href="#">Los Angeles</a></li>
                            <li class="breadcrumb-item active fontSize14" aria-current="page">Family Laws</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <div class="usMarr_page">
                <div class="container">
                    <div class="pageTitle">
                        <h1 class="fontSize32 fontWeight700 primaryColor fontFamily2">Family Laws in Los Angeles</h1>
                        <p class="mb-0 fontSize16 fontWeight400 primaryColor">Here are some family laws that you might want to consider for marriage in Los Angeles</p>
                    </div>

                    <div class="row">
                        <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="tabPage">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <div class="leftTabList">
                                            <ul>
                                                {
                                                    familyLawsContent.map(
                                                        (item, index) => (
                                                            <>
                                                                <li class={getClassForNav(scrollPos, index, item.id)}
                                                                    onClick={
                                                                        () => scrollToLink(item.id)
                                                                    }
                                                                >
                                                                    <a href='javascript:void(0)'>{item.heading}</a>
                                                                </li>
                                                            </>
                                                        )
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">

                                        {
                                            familyLawsContent.map(
                                                (data) => (
                                                    <LongContentCard heading={data.heading} para={data.paras} id={data.id} />
                                                )
                                            )
                                        }

                                    </div>






                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 min1199">
                            <div class="stateRightPage">
                                <div class="w-302 mb-24">
                                    <BannerSmallCards
                                        mainDivColor={'marriage_Record'}
                                        boxSpecificImage={`marrgeRecord`}
                                        boxTitle={"Marriage Records Search"} />
                                </div>

                                <div class="w-302 mb-24">
                                    <div class="creditScore">
                                        <img src={require('../../assets/img/creditScore.png').default} />
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
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 max1199">
                            <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="w-302 mb-24">
                                    <BannerSmallCards
                                    mainDivColor={"marriage_Record"}
                                    boxSpecificImage={`marrgeRecord`}
                                    boxTitle={"Marriage Records Search"}
                                    />
                                </div>
                            </div>  
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="w-302 mb-24">
                                <div class="creditScore mb-24">
                                    <img
                                    class=""
                                    src={
                                        require(`../../assets/img/creditScore.png`).default
                                    }
                                    />
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="w-302 mb-24">
                                <BannerSmallCards
                                    mainDivColor={"divorce_recod"}
                                    boxSpecificImage={"wedngLaws"}
                                    boxTitle={"Divorce Records Search"}
                                />
                                </div>
                            </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>

            <StateListAndSearch />

        </div>
    )
}

export default FamilyLaws