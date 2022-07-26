import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  CommonLawMarriages,
  CousinMarriages,
  MarriageAgeRequirements,
  MarriageBloodTestRequirements,
  MarriageCertificateafterMarriageCeremony,
  MarriageIDRequirements,
  marriageLawsList,
  MarriageLicenseFees,
  MarriageResidencyRequirement,
  MarriageWaitingPeriodAfterApplication,
  MarriageWaitingPeriodAfterReceivingMarriageLicense,
  MarriageWitnessesRequirements,
  navigationList,
  ProxyMarriages,
  RecordingofMarriageLicenseafterMarriageCeremony,
  weddingCeremoniesList,
  WeddingOfficiantsRequirements,
} from "../../constants/JSONS";
import BannerSmallCards from "../../containers/BannerSmallCards";
import OneHeadingParas from "../../containers/AccordianCards/OneHeadingParas";
import LongContentCard from "../../containers/LongContentCard";
import {
  addDash,
  getClassForNav,
  isItNull,
  scrollToLink,
  swipeUpDownPageOnClick,
  useScrollPositionHook,
} from "../../Functions/functions";
import OneHeadingBullets from "../../containers/AccordianCards/OneHeadingBullets";
import InsideAccorList from "../../containers/AccordianCards/InsideAccorList";
import FooterSearch from "../../containers/FooterSearch";
import { searchInputBox, SUCCESS } from '../../constants/constants';
import apiConnector from '../../backendConnect/apiService';
import { Link } from 'react-router-dom';

const MarriageLaws = () => {
  const pageLocation = window.location.href;

  const scrollPos = useScrollPositionHook();
  // console.log(scrollPos);



  const [searchText, setsearchText] = useState('');


  const handlechage = (e) => {
    setsearchText(e.target.value);
  }








  const [isInputActive, setisInputActive] = useState(false);

  // useEffect(() => {
  window.onclick = e => {
    console.log(e.target.id, "FIRST");
    if (e.target.id == searchInputBox) {
      // setcurrentClickedElement(searchInputBox);
      setisInputActive(true);
    } else {
      setisInputActive(false);
      // setcurrentClickedElement('');
    }
  }

  useEffect(() => {
    console.log(isInputActive, "IS INPUT ACTIVE");
  }, [isInputActive])



  const [searchResult, setsearchResult] = useState([]);


  useEffect(() => {
    if (searchText === '' || searchText === null || searchText.length === 0 || isItNull(searchText)) {
      setsearchResult([]);
    } else {

      if (isItNull(searchText)) {
        setsearchResult([]);
      } else {
        let data = {
          search: searchText,
          page: 1,
          pagination: 10
        }
        apiConnector("searchResult", data)
          .then((res) => {
            if (res.status === SUCCESS) {
              console.log(res, "working");
              setsearchResult(res.data.result)
            } else {
              console.log("API failure", 'working');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [searchText]);



  const [latlngdata, setlatlngdata] = useState();

  const latlngurl = 'https://pro.ip-api.com/json?key=JQ2bhI11BHF1bzV';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(latlngurl)
        .then(res => {
          setlatlngdata(res.data)
        }).catch(error => {
          console.log('error', error);
        });
    };
    fetchData();
  }, [latlngurl]);




  useEffect(() => {

  }, [searchResult])





  return (
    <>
      <div className="bgGrey">
        <div class="usMarr_breadcrumb">
          <div class="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item fontSize14">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item fontSize14">
                  <a href="#">Marriage Laws</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="usMarr_page">
          <div class="container">
            <div class="pageTitle">
              <h1 class="fontSize32 fontWeight700 primaryColor fontFamily2">
                State Marriage Laws
              </h1>
              <p class="mb-0 fontSize16 fontWeight400 primaryColor">
                Find marriage laws based on your state
              </p>
            </div>
            <div class="row">
              <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="tabPage">
                  <div class="row">
                    <div class="longSearchBar">
                      <div class="usMarr_searchBar">
                        <div class="white_Box d-flex align-items-center">
                          <a href="#">
                            <img
                              src={
                                require("../../assets/img/loctr.svg").default
                              }
                            />
                          </a>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Find by county, state, or ZIP Code"
                            id={searchInputBox} onChange={handlechage}
                            value={searchText}
                          />
                          <button
                            href="#"
                            class="orangeBtn brdrRadius4 fontWeight700 fontSize16 transition"
                          >
                            Search
                          </button>
                        </div>

                        {
                          isInputActive ?
                            <ul className="serachDatadrop">
                              {
                                searchResult.length === 0 ?
                                  <>
                                    <p>
                                      <Link className='secondaryColor w-100 d-flex align-items-center' to={`/state/${latlngdata.city}`}>
                                        <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                        Use Your Current Location
                                      </Link>
                                    </p>

                                    {
                                      searchText.length === 0 ?
                                        null
                                        :
                                        <p className='secondaryColor w-100 d-block'>
                                          <span className='secondaryColor w-100 d-block'>
                                            No County Found with <b className='font-weight999' >{searchText}</b> name
                                          </span>
                                        </p>
                                    }
                                  </>
                                  :
                                  <>
                                    <p>
                                      <Link className='secondaryColor w-100 d-flex align-items-center' to={`/propertySearch/`}>
                                        <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                        Use Your Current Location
                                      </Link>
                                    </p>

                                    {
                                      searchResult.map(
                                        (item, index) => {
                                          return (
                                            <p className='d-block listItemBlock'>
                                              <Link className='searchListitem d-flex align-items-center' to={`/state/${addDash(item.county_name)}`}>
                                                <span className='d-block'>
                                                  {item.county_name}, {item.state_abbr.toUpperCase()}
                                                </span>
                                              </Link>
                                            </p>
                                          )
                                        }
                                      )
                                    }
                                  </>
                              }

                            </ul>
                            :
                            null
                        }



                      </div>
                    </div>
                    <div class="marrigeLawsStateList">
                      <ul class="stateListing mb-0 pl-0">
                        <div class="row">
                          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Alaska</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Alabama</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Arizona</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">California</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Colorado</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Connecticut</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Delaware</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Florida</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Georgia</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Hawaii</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Idaho</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Illinois</a>
                            </li>
                          </div>
                          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Indiana</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Iowa</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Kansas</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Kentucky</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Louisiana</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Maine</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Maryland</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Massachusetts</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Michigan</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Minnesot</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Mississippi</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Missouri</a>
                            </li>
                          </div>
                          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Montana</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Nebraska</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Nevada</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">New Jersey</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">New Mexico</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">New York</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">North Carolina</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">North Dakota</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Ohio Housing</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Oklahoma</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Oregon</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Pennsylvania</a>
                            </li>
                          </div>
                          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Rhode Island</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">South Carolina</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">South Dakota</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Tennessee</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Texas</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Utah</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Vermont</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Virginia</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Washington</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">West Virginia</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Wisconsin</a>
                            </li>
                            <li class="fontSize16 fontWeight400">
                              <a href="#">Wyoming</a>
                            </li>
                          </div>
                        </div>
                      </ul>
                    </div>
                    <div class="pageTitle">
                      <h1 class="fontSize32 fontWeight700 primaryColor fontFamily2">
                        All you need to know about Marriage Laws
                      </h1>
                      <p class="mb-0 fontSize16 fontWeight400 primaryColor">
                        Find more information about marriage laws in the USA
                      </p>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <div class="leftTabList">
                        <ul>
                          {marriageLawsList.map((item, index) => (
                            <>
                              <li
                                class={getClassForNav(
                                  scrollPos,
                                  index,
                                  item.idname,
                                  "marrlaw"
                                )}

                                onClick={
                                  () => scrollToLink(item.idname)
                                }
                              >
                                <a href='javascript:void(0)'>{item.title}</a>
                              </li>
                              {/* <li >
                                                                        <a href={`#${item.idname}`}>{item.title}</a>
                                                                    </li> */}
                            </>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                      <div class="tabsContantBox">
                        <OneHeadingBullets
                          data={MarriageIDRequirements}
                          id="MarriageIDRequirements"
                        />
                        <OneHeadingParas
                          data={MarriageResidencyRequirement}
                          id="MarriageResidencyRequirement"
                        />
                        <InsideAccorList
                          data={MarriageWaitingPeriodAfterApplication}
                          id="MarriageWaitingPeriodAfterApplication"
                        />
                        <InsideAccorList
                          data={
                            MarriageWaitingPeriodAfterReceivingMarriageLicense
                          }
                          id="MarriageWaitingPeriodAfterReceivingMarriageLicense"
                        />

                        <OneHeadingParas
                          data={MarriageLicenseFees}
                          id="MarriageLicenseFees"
                        />
                        <OneHeadingParas
                          data={MarriageBloodTestRequirements}
                          id="MarriageBloodTestRequirements"
                        />
                        <OneHeadingParas
                          data={MarriageAgeRequirements}
                          id="MarriageAgeRequirements"
                        />
                        <OneHeadingParas
                          data={ProxyMarriages}
                          id="ProxyMarriages"
                        />
                        <OneHeadingParas
                          data={CousinMarriages}
                          id="CousinMarriages"
                        />
                        <OneHeadingParas
                          data={CommonLawMarriages}
                          id="CommonLawMarriages"
                        />

                        <OneHeadingBullets
                          data={WeddingOfficiantsRequirements}
                          id="WeddingOfficiantsRequirements"
                        />
                        <OneHeadingParas
                          data={MarriageWitnessesRequirements}
                          id="MarriageWitnessesRequirements"
                        />
                        <OneHeadingParas
                          data={RecordingofMarriageLicenseafterMarriageCeremony}
                          id="RecordingofMarriageLicenseafterMarriageCeremony"
                        />
                        <OneHeadingParas
                          data={MarriageCertificateafterMarriageCeremony}
                          id="MarriageCertificateafterMarriageCeremony"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 min1199">
                <div class="stateRightPage">
                  <div class="w-302 mb-24">
                    <BannerSmallCards
                      mainDivColor={"marriage_Record"}
                      boxSpecificImage={`marrgeRecord`}
                      boxTitle={"Marriage Records Search"}
                    />
                  </div>
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
                  <div class="w-302 mb-24">
                    <BannerSmallCards
                      mainDivColor={"divorce_recod"}
                      boxSpecificImage={"wedngLaws"}
                      boxTitle={"Divorce Records Search"}
                    />
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
      </div>
      <FooterSearch />
    </>
  );
};

export default MarriageLaws;
