import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from 'hoc/Layout';
import AuthenticationCheck from 'hoc/AuthenticationCheck';

import Home from 'components/home';
import RegisterLogin from 'components/register_login';
import Register from 'components/register_login/Register';
import Shop from 'components/shop';

import UserDashBoard from 'components/user';
import AddProduct from 'components/user/admin/AddProduct';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/user/dashboard"
          exact
          component={AuthenticationCheck(UserDashBoard, true)}
        ></Route>
        <Route
          path="/admin/add_product"
          exact
          component={AuthenticationCheck(AddProduct, true)}
        ></Route>
        <Route
          path="/register"
          exact
          component={AuthenticationCheck(Register, false)}
        ></Route>
        <Route
          path="/register_login"
          exact
          component={AuthenticationCheck(RegisterLogin, false)}
        ></Route>
        <Route
          path="/shop"
          exact
          component={AuthenticationCheck(Shop, null)}
        ></Route>
        <Route
          path="/"
          exact
          component={AuthenticationCheck(Home, null)}
        ></Route>
      </Switch>
    </Layout>
  );
};

export default Routes;
