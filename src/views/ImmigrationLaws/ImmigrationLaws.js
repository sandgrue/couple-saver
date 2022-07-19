import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap';
import { docsForGreenCrdContent, immigrationLawsParaContent, immigrationProcessAndInterview, navigationList, prepForIntrvw } from '../../constants/JSONS';
import BannerSmallCards from '../../containers/BannerSmallCards';
import FooterSearch from '../../containers/FooterSearch';
import LongContentCard from '../../containers/LongContentCard';
import { getClassForNav, getCurrentHash, getLocationParaCount, scrollToLink, swipeUpDownPageOnClick, useScrollPositionHook } from '../../Functions/functions'
import ImmigrationLawsListsItem from './ImmigrationLawsListsItem';
import ImmigrationPrcssIntrv from './ImmigrationPrcssIntrv';

// import '../../assets'

const ImmigrationLaws = () => {

    const pageLocation = window.location.href;




    const scrollPos = useScrollPositionHook();
    console.log(scrollPos);

    return (
        <>
            <div className='bgGrey'>


                <div class="usMarr_breadcrumb">
                    <div class="container">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item fontSize14"><a href="#">Home</a></li>
                                <li class="breadcrumb-item fontSize14"><a href="#">Los Angeles</a></li>
                                <li class="breadcrumb-item active fontSize14" aria-current="page">Immigration Issues and Resources</li>
                            </ol>
                        </nav>
                    </div>
                </div>


                <div class="usMarr_page">
                    <div class="container">
                        <div class="pageTitle">
                            <h1 class="fontSize32 fontWeight700 primaryColor fontFamily2">Immigration Issues and Resources</h1>
                            <p class="mb-0 fontSize16 fontWeight400 primaryColor">Here are some immigration laws that you might want to
                                consider for marriage in Los Angeles</p>
                            <p class="mb-0 fontSize16 fontWeight400 primaryColor mt-24">If you are a foreign national either engaged to
                                marry a US citizen (see “Fiances” below) or currently married to a US citizen (see “Spouses” below), this
                                section can help you learn about applying for a visa to enter the US, applying for a green card to become a
                                permanent resident, applying for US citizenship, and more. We hope this section will help you and your
                                partner to make immigration decisions that are right for you as an engaged or married couple.
                            </p>
                            {/* <p onClick={hello}>Resourc</p> */}
                        </div>
                        <div class="row">
                            <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="tabPage">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="leftTabList">
                                                <ul>
                                                    {
                                                        navigationList.map(
                                                            (item, index) => (
                                                                <>
                                                                    <li class={getClassForNav(scrollPos, index, item.idname)}
                                                                        onClick={
                                                                            () => scrollToLink(item.idname)
                                                                        }
                                                                    >
                                                                        <a href='javascript:void(0)'>{item.title}</a>
                                                                    </li>
                                                                </>
                                                            )
                                                        )
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                            <div class="tabsContantBox">

                                                {
                                                    immigrationLawsParaContent.map(
                                                        (data) => (
                                                            <LongContentCard classNm={swipeUpDownPageOnClick(pageLocation, data.id)} heading={data.heading} para={data.paras} id={data.id} />
                                                        )
                                                    )
                                                }




                                                <ImmigrationLawsListsItem classNm={swipeUpDownPageOnClick(pageLocation, "grncrdsubdoc")} data={docsForGreenCrdContent} />

                                                <div class={`contentBox brdrRadius4 ${swipeUpDownPageOnClick(pageLocation, "grncrdappprcss")}`} id='grncrdappprcss'>
                                                    <h3 class="fontSize18 fontWeight700 primaryColor mb-0">Green Card Application Process</h3>
                                                    <div class="contentDet">
                                                        <p class="fontSize16 fontWeight400 primaryColor">The application process takes 6 to 12 months, and
                                                            you will receive your working permit and green card interview.</p>
                                                    </div>
                                                </div>

                                                <ImmigrationPrcssIntrv classNm={swipeUpDownPageOnClick(pageLocation, "immiprocess")} data={immigrationProcessAndInterview} />



                                                <ImmigrationLawsListsItem classNm={swipeUpDownPageOnClick(pageLocation, "prepintrv")} data={prepForIntrvw} />

                                                <div class={`contentBox brdrRadius4 ${swipeUpDownPageOnClick(pageLocation, "immifee")}`} id='immifee'>
                                                    <h3 class="fontSize18 fontWeight700 primaryColor mb-0">Immigration Process & Interview</h3>
                                                    <div class="contentDet">
                                                        <div class="immgrationProcess d-flex align-items-center brdrRadius4">
                                                            <h3 class="fontSize16 fontWeight400 primaryColor mb-0">I-130 Petition for Alien Relative</h3>
                                                            <div class="ms-auto">
                                                                <h3 class="fontSize16 fontWeight700 primaryColor mb-0">$550</h3>
                                                            </div>
                                                        </div>
                                                        <div class="immgrationProcess d-flex align-items-center brdrRadius4">
                                                            <h3 class="fontSize16 fontWeight400 primaryColor mb-0">I-485 Application to Register for
                                                                Permanent Residency</h3>
                                                            <div class="ms-auto">
                                                                <h3 class="fontSize16 fontWeight700 primaryColor mb-0">$1,130</h3>
                                                            </div>
                                                        </div>
                                                        <div class="immgrationProcess d-flex align-items-center brdrRadius4">
                                                            <h3 class="fontSize16 fontWeight400 primaryColor mb-0">I-601A Provisional Unlawful Presence
                                                                Waiver</h3>
                                                            <div class="ms-auto">
                                                                <h3 class="fontSize16 fontWeight700 primaryColor mb-0">$960</h3>
                                                            </div>
                                                        </div>
                                                        <div class="immgrationProcess d-flex align-items-center brdrRadius4">
                                                            <h3 class="fontSize16 fontWeight400 primaryColor mb-0">I-765 Application for Employment
                                                                Authorization (Non-DACA)</h3>
                                                            <div class="ms-auto">
                                                                <h3 class="fontSize16 fontWeight700 primaryColor mb-0">$550</h3>
                                                            </div>
                                                        </div>
                                                        <div class="immgrationProcess d-flex align-items-center brdrRadius4">
                                                            <h3 class="fontSize16 fontWeight400 primaryColor mb-0">N-400 Application for Naturalization for
                                                                online filing*</h3>
                                                            <div class="ms-auto">
                                                                <h3 class="fontSize16 fontWeight700 primaryColor mb-0">$1,245</h3>
                                                            </div>
                                                        </div>
                                                        <div class="immgrationProcess d-flex align-items-center brdrRadius4">
                                                            <h3 class="fontSize16 fontWeight400 primaryColor mb-0">I-881 Application for Suspension of
                                                                Deportation</h3>
                                                            <div class="ms-auto">
                                                                <h3 class="fontSize16 fontWeight700 primaryColor mb-0">$1,810</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div class={`contentBox brdrRadius4 ${swipeUpDownPageOnClick(pageLocation, "immires")}`}
                                                    id='immires'>
                                                    <h3 class="fontSize18 fontWeight700 primaryColor mb-0">Immigration Resources</h3>
                                                    <div class="contentDet">
                                                        <div class="immgrationProcess d-flex align-items-center brdrRadius4">
                                                            <h3 class="fontSize16 fontWeight700 primaryColor mb-0">For Fiances</h3>
                                                            <div class="ms-auto">
                                                                <img src={require(`../../assets/img/greyRightArrow.svg`).default} />
                                                            </div>
                                                        </div>
                                                        <div class="immgrationProcess d-flex align-items-center brdrRadius4">
                                                            <h3 class="fontSize16 fontWeight700 primaryColor mb-0">For Spouses</h3>
                                                            <div class="ms-auto">
                                                                <img src={require(`../../assets/img/greyRightArrow.svg`).default} />
                                                            </div>
                                                        </div>
                                                        <div class="immgrationProcess d-flex align-items-center brdrRadius4">
                                                            <h3 class="fontSize16 fontWeight700 primaryColor mb-0">About Visas</h3>
                                                            <div class="ms-auto">
                                                                <img src={require(`../../assets/img/greyRightArrow.svg`).default} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 min1199">
                                <div class="stateRightPage">
                                    {/* <div class="marriage_Record brdrRadius4 colordBox mb-24">
                                    <div class="d-flex align-items-top">
                                        <img src={require(`../../assets/img/marrgeRecord.svg`).default} />
                                        <div class="ms-auto">
                                            <a href="#" class="nextStepCircle brdrRadius50">
                                                <img src={require(`../../assets/img/rightArrw.svg" alt="rightArrw" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="boxTitle">
                                        <h2 class="fontWeight700 fontSize24 whiteColor mb-0">Marriage Records<br /> Search</h2>
                                    </div>
                                </div> */}
                                    <div class="w-302 mb-24">
                                        <BannerSmallCards
                                            mainDivColor={'marriage_Record'}
                                            boxSpecificImage={`marrgeRecord`}
                                            boxTitle={"Marriage Records Search"} />
                                    </div>
                                    <div class="w-302 mb-24">

                                        <div class="creditScore mb-24">
                                            <img class="" src={require(`../../assets/img/creditScore.png`).default} />
                                        </div>
                                    </div>
                                    <div class="w-302 mb-24">
                                        <BannerSmallCards
                                            mainDivColor={'divorce_recod'}
                                            boxSpecificImage={'wedngLaws'}
                                            boxTitle={'Divorce Records Search'} />
                                    </div>
                                    {/* <div class="divorce_recod brdrRadius4 colordBox mb-24">
                                    <div class="d-flex align-items-top">
                                        <img src={require(`../../assets/img/wedngLaws.svg`).default} />
                                        <div class="ms-auto">
                                            <a href="#" class="nextStepCircle brdrRadius50">
                                                <img src={require(`../../assets/img/rightArrw.svg" alt="rightArrw" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="boxTitle">
                                        <h2 class="fontWeight700 fontSize24 whiteColor mb-0">Divorce<br /> Records Search</h2>
                                    </div>
                                </div> */}
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

            </div >
            <FooterSearch />
        </>
    )
}

export default ImmigrationLaws