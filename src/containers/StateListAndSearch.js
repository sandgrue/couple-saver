import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom';
import apiConnector from '../backendConnect/apiService';
import { SUCCESS } from '../constants/constants';
import { addDash, isItNull } from '../Functions/functions';

const StateListAndSearch = () => {



    let history = useHistory();

    const [searchText, setsearchText] = useState('');


    const handlechage = (e) => {
        setsearchText(e.target.value);
    }




    // const [currentClickedElement, setcurrentClickedElement] = useState('');
    const [isInputActive, setisInputActive] = useState(false);

    // useEffect(() => {
    // window.onclick = e => {
    //     // console.log(e.target.id, "FIRST");
    //     if (e.target.id == 'searchBox') {
    //         setisInputActive(true);
    //     } else {
    //         setisInputActive(false);
    //     }
    // }
    // }, []);


    // useEffect(() => {
    //     console.log(isInputActive, "IS INPUT ACTIVE");
    // }, [isInputActive])





    const [searchResult, setsearchResult] = useState([]);
    const [statusOfApi, setstatusOfApi] = useState('');


    useEffect(() => {
        if (searchText === '' || searchText === null || searchText.length === 0 || isItNull(searchText)) {
            setsearchResult([]);
        } else {

            if (isItNull(searchText)) {
                setsearchResult([]);
            } else {
                let data = {
                    search: searchText,
                    page: 1,
                    pagination: 10
                }
                apiConnector("searchResult", data)
                    .then((res) => {
                        if (res.status === SUCCESS) {
                            console.log(res, "working");
                            setsearchResult(res.data.result);
                            if (res.status === SUCCESS) {
                                setstatusOfApi(SUCCESS);
                            } else {
                                setstatusOfApi(res.status);
                            }
                        } else {
                            console.log("API failure", 'working');
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }
    }, [searchText]);


    const [latlngdata, setlatlngdata] = useState();

    const latlngurl = 'https://pro.ip-api.com/json?key=JQ2bhI11BHF1bzV';

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(latlngurl)
                .then(res => {
                    setlatlngdata(res.data)
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [latlngurl]);




    useEffect(() => {

    }, [searchResult]);


    const pushToState = () => {
        history.push(`/state/${latlngdata.city}`);
        setsearchText('');
    }


    return (
        <div class="stateBasedList">
            <div class="container">
                <div class="statList brdrRadius4 bgWhite">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div class="stateListTitle">
                                <h3 class="mb-0 fontSize28 fontWeight700 primaryColor fontFamily2">Find based on your state</h3>
                                <div class="stateInput mt-3">
                                    <input type="text" class="form-control" placeholder="Filter by State / County / ZIP Code" onChange={handlechage}
                                        value={searchText}
                                        id='searchBox' />
                                </div>

                                {
                                    searchText.length === 0 ?
                                        null
                                        :
                                        statusOfApi === SUCCESS ?
                                            < ul className="serachDatadrop posRel">
                                                {
                                                    searchResult.length === 0 ?
                                                        <>
                                                            <p>
                                                                <Link className='secondaryColor w-100 d-flex align-items-center' onClick={() => pushToState(latlngdata.city)}>
                                                                    <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                                    Use Your Current Location
                                                                </Link>
                                                            </p>

                                                            {
                                                                searchText.length === 0 ?
                                                                    null
                                                                    :
                                                                    <p className='secondaryColor w-100 d-block'>
                                                                        <span className='secondaryColor w-100 d-block'>
                                                                            No County Found with <b className='font-weight999' >{searchText}</b> name
                                                                        </span>
                                                                    </p>
                                                            }
                                                        </>
                                                        :
                                                        <>
                                                            <p>
                                                                <Link className='secondaryColor w-100 d-flex align-items-center' onClick={() => pushToState(latlngdata.city)}>
                                                                    <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                                    Use Your Current Location
                                                                </Link>
                                                            </p>

                                                            {
                                                                searchResult.map(
                                                                    (item, index) => {
                                                                        return (
                                                                            <p className='d-block listItemBlock'>
                                                                                <Link className='searchListitem d-flex align-items-center' onClick={() => pushToState(addDash(item.county_name))}>
                                                                                    <span className='d-block'>
                                                                                        {item.county_name}, {item.state_abbr.toUpperCase()}
                                                                                    </span>
                                                                                </Link>
                                                                            </p>
                                                                        )
                                                                    }
                                                                )
                                                            }
                                                        </>
                                                }

                                            </ul>
                                            :
                                            null
                                }



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
        </div >
    )
}

export default StateListAndSearch