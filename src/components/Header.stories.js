import React from 'react';
import Header from './Header';

export default {
    title: 'Header',
    component: Header,
};

export const DefaultHeader = () => <Header 
                                        rightAlignedContent='A' 
                                        centerAlignedContent='LOGO'
                                        leftAlignedContent='B' />;