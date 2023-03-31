import React from 'react';
import AppHeader from '../components/header';

const Home = ():JSX.Element =>
{
    return (
        <React.Fragment>
            <section className="container-fluid p-0 m-0">
                <AppHeader></AppHeader>
            </section>
        </React.Fragment>
    );
}

export default Home;