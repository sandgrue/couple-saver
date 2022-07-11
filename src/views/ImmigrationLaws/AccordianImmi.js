import React from 'react'
import { Accordion } from 'react-bootstrap'

const AccordianImmi = ({ data, color }) => {
    return (
        <>

            <Accordion defaultActiveKey="0" className={`childAcc accordionBox ${color} `} alwaysOpen>
                <Accordion.Item eventKey="0" alwaysOpen>
                    <Accordion.Header>{data.heading}</Accordion.Header>
                    <Accordion.Body>
                        <ul class="accordionListing">
                            {
                                data.AccList.map(
                                    (listitem) => (
                                        <li class="fontSize16 fontWeight400 primaryColor">{listitem}</li>
                                    )
                                )
                            }
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default AccordianImmi