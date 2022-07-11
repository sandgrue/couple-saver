import React from 'react';

const FooterSearch = () => {
    return(
        <>
          <div class="footerSearch">
              <div class="container">
                <div class="footerSearchContent text-center">
                  <h3 class="whiteColor fontSize40 fontWeight700 fontFamily2">Find based on your state</h3>
                  <div class="usMarr_searchBar">
                    <div class="white_Box d-flex align-items-center">
                        <a href="#"><img src={require('../assets/img/loctr.svg').default} /></a>
                        <input type="text" class="form-control" placeholder="Find by county, state, or ZIP Code"
                            aria-label="Username" />
                        <button href="#" class="orangeBtn brdrRadius4 fontWeight700 fontSize16 transition">Search</button>
                    </div>
                </div>
                </div>                
              </div>
          </div>
        </>
    )
}

export default FooterSearch;