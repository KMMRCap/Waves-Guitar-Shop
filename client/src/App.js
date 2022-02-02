import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./hoc/Layout";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoites from "./routes/PrivateRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './redux/actions/userActions'
import { Box, CircularProgress } from "@mui/material";

const App = () => {

  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth())
  }, [dispatch]);

  return (
    <Layout>
      {!user.userData ?
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <CircularProgress thickness={7} color='primary' />
        </Box>
        :
        <Routes>
          <Route index
            path='/'
            element={<PublicRoutes comp='home' user={user.userData} restrict={false} />}
          />
          <Route
            path='/shop'
            element={<PublicRoutes comp='shop' user={user.userData} restrict={false} />}
          />
          <Route
            path='/product-detail/:id'
            element={<PublicRoutes comp='product-detail' user={user.userData} restrict={false} />}
          />
          <Route
            path='/auth'
            element={<PublicRoutes comp='auth' user={user.userData} restrict={true} />}
          />
          <Route
            path='/register'
            element={<PublicRoutes comp='register' user={user.userData} restrict={true} />}
          />
          <Route
            path='/admin/add-product'
            element={<AdminRoutes comp='/admin/add-product' user={user.userData} />}
          />
          <Route
            path='/admin/manage-categories'
            element={<AdminRoutes comp='/admin/manage-categories' user={user.userData} />}
          />
          <Route
            path='/admin/site-info'
            element={<AdminRoutes comp='/admin/site-info' user={user.userData} />}
          />
          <Route
            path='/user/dashboard'
            element={<PrivateRoites comp='/user/dashboard' user={user.userData} />}
          />
          <Route
            path='/user/profile'
            element={<PrivateRoites comp='/user/profile' user={user.userData} />}
          />
          <Route
            path='/user/cart'
            element={<PrivateRoites comp='/user/cart' user={user.userData} />}
          />
          <Route
            path='*'
            element={<PublicRoutes comp='not-found' user={user.userData} restrict={false} />}
          />
        </Routes>
      }
    </Layout>
  );
}

export default App;
