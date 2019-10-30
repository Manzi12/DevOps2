import React from 'react';
import Header from '../src/components/header/'
//import FilterControls from '../scr/components/filterControls'
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import FilterControls from '../public/components/filterControls';
import Contact from '../src/components/contact';
import ContactList from '../src/components/contactList';

storiesOf("Contact List App/Header",module).add("default",() => (
    <Header noContacts = {10} />
));

storiesOf("Contact List App/Filter Controls",module).add("default",()=>(
    <FilterControls/>
));

const sample ={
    name: {first:'Joe',last:'Bloggs'},
    email:'j.bloggs@example.com',
    phone:'012-23456789',
    picture:{thumbnail:'./profile.png'}
}

storiesOf("Contact List App/Contact",module).add("default",()=>(
    <Contact contact = {sample}/>
));

storiesOf("Contact List App/contactList",module).add("default",()=>{
    const samples = [sample,sample,sample,sample,sample]
    return <ContactList contacts = {samples}/>
});