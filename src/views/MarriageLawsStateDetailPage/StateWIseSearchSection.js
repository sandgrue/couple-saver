import React from 'react'

const StateWIseSearchSection = () => {
    return (
        <>

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="stateDetlInfo tryLocation d-flex align-items-center brdrRadius4 mb-0 bgWhite">
                    <span><img src={require('../../assets/img/tryLocation.svg').default} /></span>
                    <div class="flex1 ">
                        <h5 class="fontSize16 fontWeight700 primaryColor">Couldn’t find what you’re looking for? Try other location</h5>
                        <div class="tryLocatnInput">
                            <input type="text" class="form-control w-100" placeholder="Los Angeles, CA" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="searchIcon"><a href="#"><img src={require('../../assets/img/search.svg').default} /></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StateWIseSearchSection