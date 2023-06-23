import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./components/home";

import About from "./components/about";
import Service from "./components/service";
import ServiceDetails from "./components/service-details";
// import Portfolio from "./components/portfolio";
// import PortfolioV2 from "./components/portfolio-v2";
// import PortfolioDetails from "./components/portfolio-details";
import Team from "./components/team";
import TeamDetails from "./components/team-details";
import Faq from "./components/faq";
import ComingSoon from "./components/coming-soon";
import Error from "./components/404";
import Location from "./components/location";
import TermsConditions from "./components/terms-conditions";

//Service types imports
import Legal from "./components/services/legal";
import CommercialManagement from "./components/services/commercial-management";
import ComplianceManagement from "./components/services/compliance-management";
import EmergencyResponse from "./components/services/emergency-response";
import PropertyManagement from "./components/services/property-management";
import ResidentialManagement from "./components/services/residential-management";
import Refurbishment from "./components/services/refurbishment";
import BlockManagement from "./components/services/block-management";

//Portfolio Pages
import PortfolioOne from "./components/portfolio/portfolio-1";
import PortfolioTwo from "./components/portfolio/portfolio-2";
import PortfolioThree from "./components/portfolio/portfolio-3";

import Shop from "./components/shop";
import ShopGrid from "./components/shop-grid";
import ProdductDetails from "./components/product-details";
import ShopLeftSidebar from "./components/shop-left-sidebar";
import ShopRightSidebar from "./components/shop-right-sidebar";

import BlogGrid from "./components/blog-grid";
import BlogLeftSidebar from "./components/blog-left-sidebar";
import BlogRightSidebar from "./components/blog-right-sidebar";
import Blog from "./components/blog";

import BlogDetails from "./components/blog-details";
import Contact from "./components/contact";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import MyAccount from "./components/my-account";
import Login from "./components/login";
import Register from "./components/register";
import AddListing from "./components/add-listing";
import Wishlist from "./components/wishlist";
import OrderTracking from "./components/order-tracking";
import History from "./components/history";
import Privacy from "./components/privacy";

class Root extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/about" component={About} />
            <Route path="/service" component={Service} />
            <Route path="/service-details" component={ServiceDetails} />
            <Route path="/property-management" component={PropertyManagement} />
            <Route
              path="/commercial-management"
              component={CommercialManagement}
            />
            <Route
              path="/compliance-management"
              component={ComplianceManagement}
            />
            <Route
              path="/compliance-management"
              component={ComplianceManagement}
            />
            <Route path="/emergency-response" component={EmergencyResponse} />
            <Route path="/legal" component={Legal} />
            <Route
              path="/residential-management"
              component={ResidentialManagement}
            />
            <Route path="/block-management" component={BlockManagement} />
            <Route path="/refurbishment" component={Refurbishment} />
            <Route path="/portfolio-1" component={PortfolioOne} />
            <Route path="/portfolio-2" component={PortfolioTwo} />
            <Route path="/portfolio-3" component={PortfolioThree} />

            {/* <Route path="/portfolio" component={Portfolio} />
            <Route path="/portfolios" component={PortfolioV2} />
            <Route path="/portfolio-details" component={PortfolioDetails} /> */}
            <Route path="/team" component={Team} />
            <Route path="/team-details" component={TeamDetails} />
            <Route path="/faq" component={Faq} />
            <Route path="/coming-soon" component={ComingSoon} />
            <Route path="/404" component={Error} />
            <Route path="/location" component={Location} />
            <Route path="/shop" component={Shop} />
            <Route path="/shop-grid" component={ShopGrid} />
            <Route path="/shop-left-sidebar" component={ShopLeftSidebar} />
            <Route path="/shop-right-sidebar" component={ShopRightSidebar} />

            <Route path="/product-details" component={ProdductDetails} />
            
            {/* blog */}
            <Route path="/news" component={BlogGrid} />
            <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
            <Route path="/blog-right-sidebar" component={BlogRightSidebar} />
            <Route path="/blog" component={Blog} />

            <Route path="/blog-details" component={BlogDetails} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/my-account" component={MyAccount} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/add-listing" component={AddListing} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/order-tracking" component={OrderTracking} />
            <Route path="/history" component={History} />
            <Route path="/terms-conditions" component={TermsConditions} />
            <Route path="/privacy" component={Privacy} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("quarter"));
