import React from 'react'
import { Accordion } from 'react-bootstrap'
import { removeAllSpaces } from '../../Functions/functions'

const OneHeadingBullets = ({ data, id }) => {
    return (
        <div id={id}>
            <div>
                <Accordion defaultActiveKey="0" className={`contentBox brdrRadius4  accordionBox parentAccordion accEdit`} alwaysOpen>
                    <Accordion.Item eventKey="0" alwaysOpen>
                        <Accordion.Header>{data.title}</Accordion.Header>
                        <Accordion.Body>
                            <p>{data.para}</p>
                            <ul class="accordionListing">
                                {
                                    data.list.map(
                                        (listitem) => (
                                            <li class="fontSize16 fontWeight400 primaryColor">{listitem}</li>
                                        )
                                    )
                                }
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        </div>
    )
}

export default OneHeadingBullets