import React, { useState, useEffect, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom';
import apiConnector from '../backendConnect/apiService';
import { SUCCESS } from '../constants/constants';
import { addDash, isItNull } from '../Functions/functions';

const FooterSearch = () => {


  let history = useHistory();
  const [searchText, setsearchText] = useState('');


  const handlechage = (e) => {
    setsearchText(e.target.value);
  }

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

  useEffect(() => {

  }, [searchResult]);




  const pushToState = (txt) => {
    history.push(`/state/${txt}`);
    setsearchText('');
  }


  return (
    <>
      <div class="footerSearch">
        <div class="container">
          <div class="footerSearchContent text-center">
            <h3 class="whiteColor fontSize40 fontWeight700 fontFamily2">Find based on your state</h3>
            <div class="usMarr_searchBar">
              <div class="white_Box d-flex align-items-center">
                <a href="#"><img src={require('../assets/img/loctr.svg').default} /></a>
                <input type="text" class="form-control" placeholder="Find by county, state, or ZIP Code"
                  onChange={handlechage}
                  value={searchText}
                  id='searchBox' />
                <button href="#" class="orangeBtn brdrRadius4 fontWeight700 fontSize16 transition">Search</button>
              </div>


              {
                searchText.length === 0 ?
                  null
                  :
                  statusOfApi === SUCCESS ?
                    < ul className="serachDatadrop">
                      {
                        searchResult.length === 0 ?
                          <>
                            {/* <p>
                              <Link className='secondaryColor w-100 d-flex align-items-center' onClick={() => pushToState(latlngdata.city)}>
                                <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                Use Your Current Location
                              </Link>
                            </p> */}

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
                            {/* <p>
                              <Link className='secondaryColor w-100 d-flex align-items-center' onClick={() => pushToState(latlngdata.city)}>
                                <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                Use Your Current Location
                              </Link>
                            </p> */}

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
        </div>
      </div>
    </>
  )
}

export default FooterSearch;