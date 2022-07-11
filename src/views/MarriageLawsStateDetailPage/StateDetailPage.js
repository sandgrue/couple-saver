import React from 'react'
import BannerSmallCards from '../../containers/BannerSmallCards'
import Footer from '../../containers/Footer'
import GovtIssueComponent from '../../containers/GovtIssuedcard/GovtIssueComponent'
import MarriageLicenseApplicationProcedure from '../../containers/MarriageLicenseApplicationProcedure'
import NavBar from '../../containers/NavBar'
import StateListAndSearch from '../../containers/StateListAndSearch'
import StatePageMidSection from './StatePageMidSection'



const StateDetailPage = () => {
    return (
        <div class='bgGrey'>


            {/* <!--breadcrumb--> */}
            <div class="usMarr_breadcrumb">
                <div class="container">
                    <nav>
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item fontSize14"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active fontSize14" aria-current="page">Los Angeles</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <StatePageMidSection />
            <GovtIssueComponent />


            <MarriageLicenseApplicationProcedure />

            <StateListAndSearch />

        </div>
    )
}

export default StateDetailPage