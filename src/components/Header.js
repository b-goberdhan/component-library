import React from 'react';
import { darken, lighten } from 'polished';
import styled from 'styled-components';
import { GRAY, WHITE } from './constants/colors';
import PropTypes from 'prop-types';

const theme = {
    header: {
        background: GRAY,
        actionButton: {
            color: WHITE,
            background: GRAY,
        }
    }
}

const HeaderComponent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    background: ${({theme}) => theme.header.background};
`;
HeaderComponent.defaultProps = { theme };

const HeaderContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = (props) => {
    const {
        rightAlignedContent, 
        centerAlignedContent, 
        leftAlignedContent
    } = props;
    return (<HeaderComponent>
                <HeaderContent>{rightAlignedContent}</HeaderContent>
                <HeaderContent>{centerAlignedContent}</HeaderContent>
                <HeaderContent>{leftAlignedContent}</HeaderContent>
            </HeaderComponent>);
};
Header.propTypes = {
    rightAlignedContent: PropTypes.node,
    centerAlignedContent: PropTypes.node,
    leftAlignedContent: PropTypes.node
};

export default Header;