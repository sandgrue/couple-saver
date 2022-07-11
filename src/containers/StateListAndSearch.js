import React from 'react';

const StateListAndSearch = () => {
    return (
        <div class="stateBasedList">
            <div class="container">
                <div class="statList brdrRadius4 bgWhite">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div class="stateListTitle">
                                <h3 class="mb-0 fontSize28 fontWeight700 primaryColor fontFamily2">Find based on your state</h3>
                                <div class="stateInput mt-3">
                                    <input type="text" class="form-control" placeholder="Filter by State / County / ZIP Code"
                                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <ul class="stateListing mb-0 pl-0">
                                        <div class="row">
                                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <li class="fontSize16 fontWeight400"><a href="#">Alaska</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Alabama</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Arizona</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">California</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Colorado</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Connecticut</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Delaware</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Florida</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Georgia</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Hawaii</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Idaho</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Illinois</a></li>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <li class="fontSize16 fontWeight400"><a href="#">Indiana</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Iowa</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Kansas</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Kentucky</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Louisiana</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Maine</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Maryland</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Massachusetts</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Michigan</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Minnesot</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Mississippi</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Missouri</a></li>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <li class="fontSize16 fontWeight400"><a href="#">Montana</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Nebraska</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Nevada</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">New Jersey</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">New Mexico</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">New York</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">North Carolina</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">North Dakota</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Ohio Housing</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Oklahoma</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Oregon</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Pennsylvania</a></li>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <li class="fontSize16 fontWeight400"><a href="#">Rhode Island</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">South Carolina</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">South Dakota</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Tennessee</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Texas</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Utah</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Vermont</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Virginia</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Washington</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">West Virginia</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Wisconsin</a></li>
                                                <li class="fontSize16 fontWeight400"><a href="#">Wyoming</a></li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>        
    )
}

export default StateListAndSearch