import React from "react";
import { navigationList, weddingCeremoniesList } from "../../constants/JSONS";
import BannerSmallCards from "../../containers/BannerSmallCards";
import FooterSearch from "../../containers/FooterSearch";
import LongContentCard from "../../containers/LongContentCard";
import {
  getClassForNav,
  scrollToLink,
  swipeUpDownPageOnClick,
  useScrollPositionHook,
} from "../../Functions/functions";

const Weddingceremonies = () => {
  const pageLocation = window.location.href;

  const scrollPos = useScrollPositionHook();
  console.log(scrollPos);

  return (
    <>
      <div className="bgGrey container-fluid">
        <div class="row bgWhite topSectionImage">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 posRel max992-md">
            <div class="sectionLeftCont">
              <div class="usMarr_breadcrumb">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item fontSize14">
                      <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item fontSize14">
                      <a href="#">Los Angeles</a>
                    </li>
                    <li
                      class="breadcrumb-item active fontSize14"
                      aria-current="page"
                    >
                      Wedding Ceremonies
                    </li>
                  </ol>
                </nav>
              </div>
              <div class="pageTitle weddngCeremonyPge">
                <h1 class="fontSize32 fontWeight700 primaryColor fontFamily2">
                  Religious, Spiritual, and Civil{" "}
                  <span class="fontFamily2">Wedding Ceremonies</span>
                </h1>
                <p class="mb-0 fontSize16 fontWeight400 primaryColor">
                  See the difference between religious, spiritual, and civil
                  wedding. What makes each different?
                </p>
              </div>
            </div>
          </div>

          <div class="bgImage">
              {/* <img
                class=""
                src={require("../../assets/img/ceremonyImage.png").default}
              /> */}
            </div>
          {/* <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-0">
            <div class="bgImage">
              <img
                class=""
                src={require("../../assets/img/ceremonyImage.png").default}
              />
            </div>
          </div> */}
        </div>
        <div class="usMarr_page weddngPage">
          <div class="container">
            <div class="row">
              <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="tabPage">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <div class="leftTabList">
                        <ul>
                          {weddingCeremoniesList.map((item, index) => (
                            <>
                              {
                                index === 0 ?
                                  (
                                    <li className="leftNavSUperParent">
                                      <h6 class="mb-0">
                                        Wedding Traditions and Superstitions
                                      </h6>
                                    </li>
                                  )
                                  :
                                  null
                              }
                              {
                                index === 3 ?
                                  (
                                    <li className="leftNavSUperParent">
                                      <h6 class="mb-0">
                                        Religious Wedding Ceremony Guide
                                      </h6>
                                    </li>
                                  )
                                  :
                                  null
                              }
                              <li
                                class={getClassForNav(
                                  scrollPos,
                                  index,
                                  item.idname,
                                  "wedd"
                                )}

                                onClick={
                                  () => scrollToLink(item.idname)
                                }
                              >
                                <a href='javascript:void(0)'>{item.title}</a>
                              </li>
                            </>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                      <div class="tabsContantBox">
                        {weddingCeremoniesList.map((data, index) => (
                          <>
                            {index === 0 ? (
                              <h3 class="fontWeight700 primaryColor fontSize28 fontFamily2 pb-0 mb-24">
                                Wedding Traditions and Superstitions
                              </h3>
                            ) : null}
                            {index === 3 ? (
                              <>
                                <h3 class="fontWeight700 primaryColor fontSize28 fontFamily2">
                                  Religious Wedding Ceremony Guide: <br /> Order
                                  of Events{" "}
                                </h3>

                                <p class="fontWeight400 fontSize14">
                                  All wedding ceremonies tend to share the same
                                  basic order, but there are also many
                                  differences. Here’s a rundown of the most
                                  common religious ceremonies.
                                </p>
                              </>
                            ) : null}

                            <LongContentCard
                              classNm={swipeUpDownPageOnClick(
                                pageLocation,
                                data.idname
                              )}
                              heading={data.title}
                              para={data.paras}
                              id={data.idname}
                            />
                          </>
                        ))}
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
                    <div class="creditScore">
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
                      <div class="creditScore">
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

export default Weddingceremonies;
