import React from 'react'
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import store from '../store/store';
import {Provider} from 'react-redux';
const RouteLayout = () => {
  return (
    <>
    <Provider store={store}>
      <Navbar />

      <main>
        <Outlet />
      </main>
      </Provider>
    </>
  )
}

export default RouteLayout
