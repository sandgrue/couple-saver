import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiConnector from '../../backendConnect/apiService'
import { SUCCESS } from '../../constants/constants'
import BannerSmallCards from '../../containers/BannerSmallCards'
import Footer from '../../containers/Footer'
import GovtIssueComponent from '../../containers/GovtIssuedcard/GovtIssueComponent'
import MarriageLicenseApplicationProcedure from '../../containers/MarriageLicenseApplicationProcedure'
import NavBar from '../../containers/NavBar'
import StateListAndSearch from '../../containers/StateListAndSearch'
import { capitalise, isItNull, removeDash } from '../../Functions/functions'
import StatePageMidSection from './StatePageMidSection'



const StateDetailPage = () => {




  let parameters = useParams();
  const [countyName, setcountyName] = useState('')
  useEffect(() => {
    setcountyName(removeDash(parameters.countyName));
  }, [parameters]);



  const [countyListData, setcountyListData] = useState([]);


  useEffect(() => {
    if (isItNull(countyName) === false) {
      let data = {
        "search": countyName,
        "page": 1,
        "pagination": 10
      }
      apiConnector("searchResult", data)
        .then((response) => {
          if (response.status === SUCCESS) {
            setcountyListData(response.data.result);
            // console.log(response, "working");
          } else {
            console.log("API failure", 'working');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [countyName])


  console.log(countyListData, "working");







  return (
    <div class='bgGrey'>


      {/* <!--breadcrumb--> */}
      <div class="usMarr_breadcrumb">
        <div class="container">
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item fontSize14"><a href="#">Home</a></li>
              <li class="breadcrumb-item active fontSize14" aria-current="page">{capitalise(countyName)}</li>
            </ol>
          </nav>
        </div>
      </div>
      <StatePageMidSection countyName={capitalise(countyName)} listData={countyListData} />
      <GovtIssueComponent />


      <MarriageLicenseApplicationProcedure />

      <StateListAndSearch />

      <div class="container">
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
  )
}

export default StateDetailPage