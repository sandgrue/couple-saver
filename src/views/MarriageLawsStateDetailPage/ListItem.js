import React from 'react';
import { Button } from 'react-bootstrap';

const ListItem = () => {
    return (
        <div class="stateDetlInfo brdrRadius4 bgWhite">
            <div class="d-flex align-items-center stateName">
                <h3 class="fontSize18 fontWeight700 mb-0">Norwalk Los Angeles County Long Name Example</h3>
                {/* <div class="ms-auto">
                    <span class="chevronRight"><a href="#"><img src={require('../../assets/img/greyRightArrow.svg').default} /></a></span>
                </div> */}
            </div>
            <div class="d-flex align-items-center stateDel">
                <div class="stateleftInfo">
                    <div class="d-flex align-items-center topInfo">
                        <span><img src={require('../../assets/img/greyMapPin.svg').default} /></span>
                        <p class="mb-0 fontSize14 fontWeight400 primaryColor mb-0">12400 East Imperial Hwy. Norwalk, CA 90650</p>
                    </div>
                    <div class="d-flex align-items-center call">
                        <div class="d-flex align-items-center">
                            <span><img src={require('../../assets/img/greyCall.svg').default} /></span>
                            <p class="mb-0 fontSize14 fontWeight400 primaryColor mb-0">562.462.2137</p>
                        </div>
                        <div class="d-flex align-items-center">
                            <span><img src={require('../../assets/img/greyCall.svg').default} /></span>
                            <p class="mb-0 fontSize14 fontWeight400 primaryColor mb-0">800.201.8999</p>
                        </div>
                    </div>
                </div>
                <div class="staterightInfo ms-auto d-flex align-items-center">
                    <div class="feeBlock">
                        <p class="price fontSize16 fontWeight600 greenColor mb-0">$91</p>
                        <p class="mb-0 fontSize14 fontWeight400 primaryColor">Public License Fee</p>
                    </div>
                    <div class="feeBlock">
                        <p class="price fontSize16 fontWeight600 greenColor mb-0">$85</p>
                        <p class="mb-0 fontSize14 fontWeight400 primaryColor">Confidential License Fee</p>
                    </div>
                    <div class="feeBlock moreInfoBtn">
                        <Button variant="primary" className="transition fontSize16 fontWeight700">More Info</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem