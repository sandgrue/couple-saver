import React, { useState } from 'react'

const DropDown = () => {

    const [selected, setselected] = useState();

    let handleChange = (e) => {
        setselected(e.target.value);
    }

    return (
        <>

            <select value={selected} onChange={handleChange}>

                <option value={'1'}>1 km</option>
                <option value={'5'}>5 km</option>
                <option value={'10'}>10 km</option>

            </select>

        </>
    )
}

export default DropDown