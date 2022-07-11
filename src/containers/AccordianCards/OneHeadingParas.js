import React from 'react'
import { Accordion } from 'react-bootstrap'
import { removeAllSpaces } from '../../Functions/functions'

const OneHeadingParas = ({ data, id }) => {
    return (
        <div id={id}>

            <div>
                <Accordion defaultActiveKey="0" className={`contentBox brdrRadius4 accordionBox parentAccordion accEdit`} alwaysOpen>
                    <Accordion.Item eventKey="0" alwaysOpen>
                        <Accordion.Header>{data.title}</Accordion.Header>
                        <Accordion.Body>
                            {
                                data.list.map(
                                    (listitem) => (
                                        <p dangerouslySetInnerHTML={{ __html: listitem }} />
                                    )
                                )
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>


        </div>
    )
}

export default OneHeadingParas