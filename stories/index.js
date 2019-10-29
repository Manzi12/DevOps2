import React from 'react';
import Header from '../src/components/header/'
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

storiesOf("Contact List App/Header",module).add("default",() => (
    <Header noContacts = {10} />
));