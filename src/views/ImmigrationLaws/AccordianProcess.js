import React from 'react'
import { Accordion } from 'react-bootstrap'
import { repeatingColorList } from '../../constants/JSONS'

const AccordianProcess = ({ data }) => {



    return (
        <>
            {data.map(
                (data, index) => (
                    <Accordion defaultActiveKey="0" className={`childAcc ${repeatingColorList[index]} accordionBox`} alwaysOpen>
                        <Accordion.Item eventKey="0" alwaysOpen>
                            <Accordion.Header>{data.heading}</Accordion.Header>
                            <Accordion.Body>
                                <div class="accordionListing">
                                    {
                                        data.paras.map(
                                            (listitem) => (
                                                <p class="fontSize16 fontWeight400 primaryColor">
                                                    {listitem}
                                                </p>
                                            )
                                        )
                                    }
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )
            )}
        </>
    )
}

export default AccordianProcess