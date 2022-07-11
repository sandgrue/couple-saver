import React from 'react'
import { Accordion } from 'react-bootstrap'
import { repeatingColorList } from '../../constants/JSONS'
import { removeAllSpaces } from '../../Functions/functions'
import AccordianImmi from '../../views/ImmigrationLaws/AccordianImmi'

const InsideAccorList = ({ data, id }) => {
    return (
        <div id={id}>
            <Accordion defaultActiveKey="0" className={`contentBox brdrRadius4 accordionBox parentAccordion`} alwaysOpen>
                <Accordion.Item eventKey="0" alwaysOpen>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>
                        {
                            data.accordians.map(
                                (data, index) => (
                                    <AccordianImmi data={data} color={repeatingColorList[index]} />
                                )
                            )
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    )
}

export default InsideAccorList