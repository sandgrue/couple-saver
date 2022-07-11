import React, {useState} from 'react'
import GovtIssueComponent from '../../containers/GovtIssuedcard/GovtIssueComponent'
import MarriageLicenseApplicationProcedure from '../../containers/MarriageLicenseApplicationProcedure'
import MarriageLicenseCard from '../../containers/MarriageLicenseCard'
import StateListAndSearch from '../../containers/StateListAndSearch'
import MainBanner from './MainBanner/MainBanner'



const Home = () => {


    return (
        <>
            <MainBanner />
            <div class="advertisemntSec text-center">
                <img src={require('../../assets/img/advertisemntPostr.png').default} />
            </div>
            <MarriageLicenseCard />
            <GovtIssueComponent />
            <MarriageLicenseApplicationProcedure />
            <StateListAndSearch />
            

        </>
    )
}

export default Home