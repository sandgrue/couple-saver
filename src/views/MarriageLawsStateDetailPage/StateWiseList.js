import React, { useState } from 'react'
import ListItem from './ListItem'
import StateWIseSearchSection from './StateWIseSearchSection'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Dropdown } from 'bootstrap'
import { isItNull } from '../../Functions/functions'

const StateWiseList = ({ countyName, listData }) => {


    return (
        <>


            <div clas="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="d-flex align-items-end">
                    <div class="pageTitle mb-0">
                        <h1 class="fontSize32 fontWeight700 primaryColor fontFamily2">{countyName}</h1>
                        <p class="mb-0 fontSize16 fontWeight400 primaryColor">Find agents/authorities office that provide marriage license for you in {countyName}</p>
                    </div>
                    <div class="ms-auto sortingBlock">
                        <p class="mb-0 fontWeight400 fontSize10">Sort by</p>
                        <div class="dropdown usMarr_dropdown">

                            <button class="btn btn-secondary dropdown-toggle fontSize14 fontWeight700" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Distance
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">5 Km</a></li>
                                <li><a class="dropdown-item" href="#">10 Km</a></li>
                                <li><a class="dropdown-item" href="#">15 Km</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* List  */}
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                {/* <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem /> */}
                {

                    isItNull(listData) === false ?


                        listData.map(
                            (item, index) => (
                                <ListItem itemData={item} />
                            )
                        )
                        :
                        null
                }
            </div>
            <StateWIseSearchSection countyName={countyName} />


        </>
    )
}

export default StateWiseList