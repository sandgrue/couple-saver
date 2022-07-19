import React from "react";
import BannerSmallCards from "../../../containers/BannerSmallCards";
import BigBannerWIthSearch from "./BigBannerWIthSearch";

// import '../../../assets'

const MainBanner = () => {
  return (
    <div class="usMarr_banner">
      <div class="container">
        <div class="row">
          <BigBannerWIthSearch />

          <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12 leftPadding991-0">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 rightPadding991-0">
                <BannerSmallCards
                  mainDivColor={"marriage_Record height-264"}
                  boxSpecificImage={`marrgeRecord`}
                  boxTitle={"Marriage Records Search"}
                />
              </div>

              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 rightPadding991-0">
                <div class="creditScore">
                  <img
                    class="w-100"
                    src={require("../../../assets/img/creditScore.png").default}
                  />
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 rightPadding991-0">
                <BannerSmallCards
                  mainDivColor={"wedding_laws height-264 mb-0"}
                  boxSpecificImage={"court"}
                  boxTitle={"Find Wedding Laws in Every State"}
                />
              </div>

              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 rightPadding991-0">
                <BannerSmallCards
                  mainDivColor={"divorce_recod height-264 mb-0"}
                  boxSpecificImage={"wedngLaws"}
                  boxTitle={"Divorce Records Search"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
