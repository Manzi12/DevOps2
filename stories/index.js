import React from 'react';
import Header from '../src/components/header/'
//import FilterControls from '../scr/components/filterControls'
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import FilterControls from '../public/components/filterControls';

storiesOf("Contact List App/Header",module).add("default",() => (
    <Header noContacts = {10} />
));

storiesOf("Contact List App/Filter Controls",module).add("default",()=>(
    <FilterControls/>
));