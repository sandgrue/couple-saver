import React from 'react'
import apiConnector from '../../../backendConnect/apiService';

// import '../../../../../assets'

const BigBannerWIthSearch = () => {

    const handleclick = () => {
        // console.log("working");

        let data = {
            "search": "los",
            "page": 1,
            "pagination": 10
        }
        apiConnector("searchResult", data)
            .then((response) => {
                console.log(response, "working");
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <>

            <div class="col-lg-7">
                <div class="bannerSection brdrRadius4">
                    <div class="bannerContent">
                        {/* <img src={require('../../../assets/img/logo.svg').default} /> */}
                        <h1 class="whiteColor fontWeight700 fontFamily2">Find Marriage Laws in the United States</h1>
                        {/* <!--search Bar--> */}
                        <div class="usMarr_searchBar">
                            <div class="white_Box d-flex align-items-center">
                                <a href="#"><img src={require('../../../assets/img/loctr.svg').default} /></a>
                                <input type="text" class="form-control" placeholder="Find by county, state, or ZIP Code"
                                    aria-label="Username" />
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