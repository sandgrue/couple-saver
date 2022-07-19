import React, { useState, useEffect, useRef } from 'react'
import apiConnector from '../../../backendConnect/apiService';
import { searchInputBox, SUCCESS } from '../../../constants/constants';

// import '../../../../../assets'

const BigBannerWIthSearch = () => {


    const handleclick = () => {
        let data = {
            "search": "los",
            "page": 1,
            "pagination": 10
        }
        apiConnector("searchResult", data)
            .then((response) => {
                if (response.status == SUCCESS) {
                    console.log(response, "working");
                } else {
                    console.log("API failure", 'working');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }




    // const [currentClickedElement, setcurrentClickedElement] = useState('');
    const [isInputActive, setisInputActive] = useState(false);

    useEffect(() => {
        window.onclick = e => {
            // console.log(e.target.id, "FIRST");
            if (e.target.id == searchInputBox) {
                // setcurrentClickedElement(searchInputBox);
                setisInputActive(true);
            } else {
                setisInputActive(false);
                // setcurrentClickedElement('');
            }
        }
    }, [])


    console.log(isInputActive, "FIRST");

    return (
        <>

            <div class="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div class="bannerSection brdrRadius4">
                    <div class="bannerContent">
                        {/* <img src={require('../../../assets/img/logo.svg').default} /> */}
                        <h1 class="whiteColor fontWeight700 fontFamily2">Find Marriage Laws in the United States</h1>
                        {/* <!--search Bar--> */}
                        <div class="usMarr_searchBar">
                            <div class="white_Box d-flex align-items-center">
                                <a href="#"><img src={require('../../../assets/img/loctr.svg').default} /></a>
                                <input type="text" class="form-control" placeholder="Find by county, state, or ZIP Code" id={searchInputBox} />
                                <button href="#" class="orangeBtn brdrRadius4 fontWeight700 fontSize16 transition" onClick={() => { handleclick() }}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BigBannerWIthSearch