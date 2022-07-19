import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Popper from '@popperjs/core';
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home/Home';
import NavBar from "./containers/NavBar";
import Footer from "./containers/Footer";
import FamilyLaws from "./views/FamilyLaws/FamilyLaws";
import ImmigrationLaws from "./views/ImmigrationLaws/ImmigrationLaws";
import Weddingceremonies from "./views/WeddingCeremonies/weddingceremonies";
import StateDetailPage from "./views/MarriageLawsStateDetailPage/StateDetailPage.js";
import MarriageLaws from "./views/MarriageLaws/MarriageLaws.js";
import AgencyDetails from "./views/AgencyDetails/AgencyDetails.js";





function App() {




    return (
        <>
            <div class="wrapper">
                <Router>
                    <NavBar />
                    <div class='heightCalc'>
                        <Switch>
                            {/* <Route path="/" exact component={Home} />
                            <Route path="/marriage-laws" exact component={MarriageLaws} />
                            <Route path="/marriage-laws/los-angeles/norwalklosangeles" exact component={AgencyDetails} />
                            <Route path="/state" exact component={StateDetailPage} />
                            <Route path="/family-laws" exact component={FamilyLaws} />
                            <Route path="/immigration-laws" exact component={ImmigrationLaws} />
                            <Route path="/wedding-ceremonies" exact component={Weddingceremonies} /> */}


                            <Route path="/" exact component={Home} />


                            <Route path="/marriage-laws" exact component={MarriageLaws} />


                            {/* api wale pages */}
                            <Route path="/marriage-laws/los-angeles/norwalklosangeles" exact component={AgencyDetails} />
                            <Route path="/state/:countyName" exact component={StateDetailPage} />


                            {/* static pages */}
                            <Route path="/family-laws" exact component={FamilyLaws} />
                            <Route path="/immigration-laws" exact component={ImmigrationLaws} />
                            <Route path="/wedding-ceremonies" exact component={Weddingceremonies} />


                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </div>
        </>
    );
}

export default App;
