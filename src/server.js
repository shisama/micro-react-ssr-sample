import React from 'react';
import { renderToString } from 'react-dom/server';
import axios from 'axios';
import Template from './Template';
import List from './List';
import { title } from './config';

export default async (req, res) => {
    const apiRes = await axios.get('https://qiita.com/api/v2/items');
    const data = apiRes.data;
    return renderToString(
        <Template title={title} data={JSON.stringify(data)}>
            <List items={data} />
        </Template>
    )
}