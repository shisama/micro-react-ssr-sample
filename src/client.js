import React from 'react';
import { hydrade } from 'react-dom';
import Template from './Template';
import List from './List';
import { title } from './config';

const items = JSON.parse(document.querySelector('#app').getAttribute('data-json'));

hydrade(
    <Template title={title}>
        <List items={items} />
    </Template>,
    document.querySelector('#app')
);
