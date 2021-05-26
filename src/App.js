import React, {  useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import Checkout
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import Checkout from './containers/Checkout/Checkout';
// import Auth
import Auth from './containers/Auth/Auth';
import Orders from './containers/Orders/Orders'
const app = props => {
 
  const { onTryAutoSignup } = props;
  useEffect(()=>{
    props.onTryAutoSignup();
  },[onTryAutoSignup])
 
  
    let routes = (
      <Switch>
        <Route path="/auth" component={ Auth } />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if ( props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/checkout" component={ Checkout } />
          <Route path="/orders" component={ Orders } />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={ Auth } />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {/* <Suspense fallback={<p>Loading....</p>}> */}

          {routes}
          {/* </Suspense> */}
        </Layout>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( app ) );
