import React from 'react'

const GovtIssueCard = ({ imageName, headingText }) => {
    return (
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="identifictnList text-center">
                <img class="brdrRadius16" src={require(`../../assets/img/${imageName}.png`).default} />
                <h3 class="fontSize18 text-center fontWeight700 mt-3 primaryColor">{headingText}</h3>
            </div>
        </div>
    )
}

export default GovtIssueCard