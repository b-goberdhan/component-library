import React from 'react';

import Sidebar from './Sidebar';

export default {
    title: 'Sidebar',
    component: Sidebar,
  };
  

export const Primary = () => <Sidebar buttons={[
    { text: 'hello' },
    { text: 'dummy' }
]}>Hi</Sidebar>;