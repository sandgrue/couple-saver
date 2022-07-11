import React from 'react'

const LongContentCard = ({ classNm, heading, para, id }) => {

    // console.log(data);
    return (
        <>
            <div class={`contentBox brdrRadius4 ${classNm}`} id={id}>
                <h3 class="fontSize18 fontWeight700 primaryColor mb-0">{heading}</h3>
                <div class="contentDet">

                    {
                        para.map(
                            (content) => (
                                <p class="fontSize16 fontWeight400 primaryColor">{content}</p>
                            )
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default LongContentCard