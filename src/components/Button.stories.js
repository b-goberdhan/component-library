import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
};
export const AllButtons = () => (
    <div style={{
        display: 'flex',
        flexDirection:'column',
        margin: '0 0 5px 0'
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 0 5px 0'
        }}>
            <Button>Default</Button>
            {' '}
            <Button primary>Primary</Button>
            {' '}
            <Button secondary>Secondary</Button>
            {' '}
            <Button tertiary>Tertiary</Button>
            {' '}
            <Button disabled>Disabled</Button>
        </div>
        
        <div>
            <Button primary fullWidth>Full Width Button</Button>
        </div>
    </div>
    
);
   