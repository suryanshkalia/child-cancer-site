import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Content from './Content';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <React.Fragment>
            <Header/>
            <Content>
                <Outlet />{" "}
            </Content>
            <Footer/>
        </React.Fragment>
    );
};
export default Layout;