import React from 'react';
import AppHeader from '../components/header';
import AppHero from '../components/hero';
import { checkIfHomePageSeen } from '../includes/scripts/customScript';
const Home = ():JSX.Element =>
{   
    checkIfHomePageSeen();
    return (
        <React.Fragment>
            <section className="container-fluid p-0 m-0">
                <AppHeader></AppHeader>
                <AppHero></AppHero>
            </section>
        </React.Fragment>
    );
}

export default Home;