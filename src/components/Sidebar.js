import React from 'react';
import styled from 'styled-components';
import { ButtonStyle } from './Button';
import PropTypes from 'prop-types';
import { PASTEL_BLUE, WHITE } from './constants/colors';

const SidebarComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    background: ${PASTEL_BLUE};
    height: 100vh;
`;
const SidebarButton = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30px;
    padding: 0 6px;
    ${({theme}) => ButtonStyle(theme.sidebar.button)}

`;
SidebarButton.defaultProps = {
    theme: {
        sidebar: {
            button: {
                color: WHITE,
                background: PASTEL_BLUE,
                borderRadius: '0px',
                borderThickness: '0px',
                borderColor: null
            }
        }
    }
}

const Sidebar = (props) => {
    console.log(props)
    const buttons = props.buttons.map(button => (
        <SidebarButton fullWidth>
            <div>{'BUTT'}</div>
            {button.text}
            
        </SidebarButton>));

    return (<SidebarComponent>{buttons}</SidebarComponent>)
}

export default Sidebar;