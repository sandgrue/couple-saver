import React from 'react'
import OneHeadingParas from '../../containers/AccordianCards/OneHeadingParas'
import BannerSmallCards from '../../containers/BannerSmallCards'
import Footer from '../../containers/Footer'
import GovtIssueComponent from '../../containers/GovtIssuedcard/GovtIssueComponent'
import MarriageLicenseApplicationProcedure from '../../containers/MarriageLicenseApplicationProcedure'
import StateListAndSearch from '../../containers/StateListAndSearch'
import HowToObtainLicesnse from '../MarriageLawsStateDetailPage/HowToObtainLicesnse'
import StatePageMidSection from '../MarriageLawsStateDetailPage/StatePageMidSection'
import StateWiseList from '../MarriageLawsStateDetailPage/StateWiseList'

import { Accordion } from 'react-bootstrap'
import CheckAvailabilityForm from '../../containers/CheckAvailabilityForm'
import FooterSearch from '../../containers/FooterSearch'

const AgencyDetails = () => {
    return (
        <>
            <div class='bgGrey'>
                {/* <!--breadcrumb--> */}
                <div class="usMarr_breadcrumb">
                    <div class="container">
                        <nav>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item fontSize14"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active fontSize14" aria-current="page">Los Angeles</li>
                                <li class="breadcrumb-item active fontSize14" aria-current="page">Norwalk Los Angeles County Long Name Example</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div class="usMarr_page">
                    <div class="container">
                        <div class="row">
                            {/* LEFT SIDE SECTION  */}
                            <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12  mb-24">
                                <div class="stateLeftPage">
                                    <div class="agencyDetSummary brdrRadius4">
                                        <h2 class="fontSize32 fontWeight700 primaryColor fontFamily2">Norwalk Los Angeles County</h2>
                                        <p class="fontSize16 fontWeight400 primaryColor">12400 East Imperial Hwy. Norwalk, CA 90650</p>
                                        <div class="otherInfo">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div class="infoSecBlock">
                                                        <div class="topInfo d-flex align-items-start">
                                                            <div>
                                                                <img variant="primary" src={require('../../assets/img/phoneIcon.svg').default} alt="rightArrw" />
                                                            </div>
                                                            <div>
                                                                <p class="primaryColor fontSize16 fontWeight700 mb-0">800.201.8999</p>
                                                                <p class="fontSize14 fontWeight400 primaryColorOpacity7 mb-0">Phone Number</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div class="infoSecBlock">
                                                        <div class="topInfo d-flex align-items-start">
                                                            <div>
                                                                <img variant="primary" src={require('../../assets/img/phoneIcon.svg').default} alt="rightArrw" />
                                                            </div>
                                                            <div>
                                                                <p class="primaryColor fontSize16 fontWeight700 mb-0">562.462.2137</p>
                                                                <p class="fontSize14 fontWeight400 primaryColorOpacity7 mb-0">Secondary Phone Number</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div class="infoSecBlock">
                                                        <div class="topInfo d-flex align-items-start">
                                                            <div>
                                                                <img variant="primary" src={require('../../assets/img/phoneIcon.svg').default} alt="rightArrw" />
                                                            </div>
                                                            <div>
                                                                <p class="primaryColor fontSize16 fontWeight700 mb-0">8:00 a.m. – 5:00 p.m. / M – F</p>
                                                                <p class="fontSize14 fontWeight400 primaryColorOpacity7 mb-0">Opening Hours</p>
                                                                <p class="fontSize14 fontWeight400 primaryColorOpacity7 mb-0">(except for Court Approved Holidays)</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="brdrLine"></div>
                                        <div class="lowerOtherInfo">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div>
                                                        <h3 class="fontSize18 fontWeight700 primaryColor">License Fees</h3>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div>
                                                        <h3 class="fontSize24 fontWeight700 mb-0">$91</h3>
                                                        <p class="mb-0 fontSize14 fontWeight400 primaryColorOpacity7">Public License Fee</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div>
                                                        <h3 class="fontSize24 fontWeight700 mb-0">$85</h3>
                                                        <p class="mb-0 fontSize14 fontWeight400 primaryColorOpacity7">Confidential License Fee</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="">
                                        <h1 class="fontSize32 fontWeight700 primaryColor fontFamily2">Marriage Application Requirement California</h1>
                                    </div>
                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <div>
                                                <p>To complete the application for a marriage license, a couple must:</p>

                                                <p> Before a marriage license can be issued, First Person and Second Person must bring in a valid photo I.D. (e.g., drivers license, military I.D., passport, or green card, etc.)</p>

                                                <p>  To obtain a Confidential Marriage License, First Person and Second Person must be living together as a married couple. The same I.D. requirements as mentioned above are applicable.</p>

                                                <p>   There are two different types of marriage licenses in California, and they can be obtained in two different ways.</p>

                                                <p>  Confidential Marriage License and a Public Marriage License:</p>
                                                <ul>
                                                    <li>A “public” California marriage license is a marriage license that is available to the public for viewing.</li>
                                                    <li>A “confidential” marriage license allows all the personal information on a marriage license to be protected from public view. Only a court order or a notarized application by either spouses can obtain a copy of the information.</li>
                                                </ul>

                                                <p>The following information is required on a marriage license application.</p>

                                                <p>For both spouses, or party A and party B, the information needed for marriage license requirements is below.</p>

                                                <ul>
                                                    <li>A valid driver’s license or a DMV issued Identification Card. If you do not have either of these, you must provide.</li>
                                                    <li>A certified copy of your birth certificate and another acceptable form of picture I.D.</li>
                                                    <li>To obtain a Confidential Marriage License, party A and party B must be living together as a married couple. The same I.D. requirements as mentioned above are applicable.</li>
                                                </ul>

                                            </div>

                                        </div>
                                    </div>



                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Marriage ID Requirements</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>A valid photo I.D. with birth date is required (e.g., drivers license, military I.D., passport, or green card, etc.)</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>


                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Marriage Waiting Period</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>There is no waiting period. You will receive your marriage license immediately after you submit your application.</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>





                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Marriage Residency Requirement</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>You do not need to be a California resident to marry in California.</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>








                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Marriage Residency Requirement</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>California marriage license Fee varies by county and is required at the time of application. Preferred method of payment is by cash. For guidance on additional methods of payment, please call ahead.</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>











                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Proxy Marriages</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>Marriage by proxy is NOT allowed in California. Family Code, Section 420(a), requires the two parties, marriage officiant and witness if applicable be physically present together in the same location for the marriage to be performed.</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>











                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Cousin Marriages</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>No</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>











                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Common Law Marriages</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>No</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>














                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Marriage Blood Test</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>Blood tests are NOT required to obtain a marriage license in California.</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
















                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Name Change</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>Getting a marriage license with your new name on it does not mean your name has automatically changed. If you need to change your last name, you can use an online marriage name change kit.</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>












                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Marriage Age Requirements</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>If either partner is under 18, one parent or legal guardian must be present. If a parent can not be present, due to death, separation, divorce or other circumstances, proper evidence must be presented for verification. You will need a certified copy of your birth certificate. The couple must schedule an appointment with a counselor and then appear before a superior court judge.</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>










                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Marriage Officiants</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div>

                                                            <p>California Family Code, Section 400 states the persons authorized to solemnize marriage ceremonies in California are as follows:</p>

                                                            <ul>
                                                                <li>A priest, minister, or rabbi of any religious denomination.</li>
                                                                <li>A judge or retired judge, commissioner of civil marriages or retired commissioner of civil marriages, commissioner or retired commissioner, or assistant commissioner of a court of record in this state.</li>
                                                                <li>A judge or magistrate who has resigned from office.</li>
                                                                <li>Any of the following judges or magistrates of the United States.</li>
                                                                <li>A justice or retired justice of the United States Supreme Court.</li>
                                                                <li>A judge or retired judge of a court of appeals, a district court, or a court created by an act of Congress the judges of which are entitled to hold office during good behavior.</li>
                                                                <li>A judge or retired judge of a bankruptcy court or a tax court.</li>
                                                                <li>A United States magistrate or retired magistrate.</li>
                                                                <li>A legislator or constitutional officer of this state or a member of Congress who represents a district within this state, while that person holds office.</li>
                                                            </ul>



                                                            <p>The person solemnizing the marriage must return the original marriage license to the County Clerk or County Recorder as applicable within 10 days of the date of the ceremony. Addresses should be on the county site.</p>

                                                            <p>You will NOT receive a copy of your marriage license after you have been married unless you request and pay for a certified copy from the County Clerk or County Recorder as applicable.</p>
                                                            <p>ALL information on the marriage license MUST be legible, unambiguous and reproducible. DO NOT change any information on the license, cross out information, use white out, etc., as that will require the payment for and issuance of a duplicate marriage license. Contact the County Clerk’s Office if you have questions about completing the marriage license and/or incorrect information contained on the marriage license.</p>


                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>












                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Marriage Witnesses</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>The public marriage license requires the signature of one witness, and if desired, has a place for an additional witness. No more than two witnesses may sign on the public marriage license. Only one signature per line is allowed. No witnesses may sign on the confidential marriage license.</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
















                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Expiration Date of Marriage License</Accordion.Header>
                                                    <Accordion.Body>
                                                        <ul>
                                                            <li>Marriage licenses are valid for 90 days from the date of issuance. If you do not get married within 90 days, the license will no longer be valid. You must purchase a new license.</li>
                                                            <li>Public Marriage License can be used throughout the state of California.</li>
                                                            <li>Confidential Marriage License can be used throughout the state of California (Effective January 1, 2015).</li>
                                                        </ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>














                                    <div>
                                        <div class="stateDetlInfo brdrRadius4 bgWhite">
                                            <Accordion defaultActiveKey="0" className={`accordionBox parentAccordion`} alwaysOpen>
                                                <Accordion.Item eventKey="0" alwaysOpen>
                                                    <Accordion.Header>Copy of Certificate of Marriage License</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div>

                                                            <p>California birth, death, fetal death, still birth, marriage and divorce records are maintained by the California Department of Public Health Vital Records.</p>
                                                            <p>Please Note: State and county marriage license requirements often change. The above information is for guidance only and should not be regarded as legal advice. For more information regarding California marriage license laws please visit www.cdph.ca.gov.</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIght SIDE SECTION  */}

                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div class="stateRightPage">

                                    <CheckAvailabilityForm />

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

            </div>



            <FooterSearch />


        </>
    )
}

export default AgencyDetails