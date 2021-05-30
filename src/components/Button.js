import React from 'react';
import styled, { css } from 'styled-components';
import {darken, lighten} from 'polished';
import { GRAY, WHITE, BLUE, BLACK } from './constants/colors';
import PropTypes from 'prop-types';

export const ButtonStyle = (style = {
    color: '',
    background: '',
    borderThickness: '',
    borderColor: '',
    borderRadius: '',
}) => css`
    outline: none;
    color: ${style.color};
    background: ${style.background};
    border: solid ${style.borderThickness};
    border-color: ${darken(0.10, style.borderColor || style.background)};
    border-radius: ${style.borderRadius};
    &:hover {
        background: ${lighten(0.05, style.background)};
        border-color: ${darken(0.15, style.borderColor || style.background)};
        color: ${darken(0.05, style.color)};
    }
    &:active {
        background: ${darken(0.05, style.background)};
        border-color: ${darken(0.15, style.borderColor || style.background)};
    }
    &:hover:disabled,
    &:active:disabled,
    &:disabled {
        cursor: not-allowed;
        opacity: 0.50;
        background: ${style.background};
        border: solid ${style.borderThickness};
        border-color: ${darken(0.10, style.borderColor || style.background)};
        color: ${style.color};
    }
`;

const ButtonComponent = styled.button`
    width: ${({fullWidth}) => fullWidth ? '100%' : '150px'};
    height: 30px;
    ${({theme, kind}) => ButtonStyle(theme.button[kind])}
`;
ButtonComponent.defaultProps = {
    kind: 'default',
    fullWidth: false,
    theme: {
        button : {
            default: {
                color: BLACK,
                background: WHITE,
                borderRadius: '2px',
                borderThickness: '1px',
                borderColor: null
            },
            primary: {
                color: WHITE,
                background: BLUE,
                borderRadius: '2px',
                borderThickness: '1px',
                borderColor: null
            },
            secondary: {
                color: BLUE,
                background: WHITE,
                borderRadius: '2px',
                borderThickness: '1px',
                borderColor: BLUE
            },
            tertiary: {
                color: GRAY,
                background: WHITE,
                borderRadius: '2px',
                borderThickness: '0px',
                borderColor: null
            }
        }
    }
};
ButtonComponent.propTypes = {
    kind: PropTypes.oneOf([
        'default',
        'primary',
        'secondary',
        'tertiary'
    ])
};

const Button = (props) => {
    const { 
        disabled, 
        primary, 
        secondary, 
        tertiary,
        fullWidth,
        children,
        ...otherProps
    } = props;
    const kind = (primary && 'primary') ||
        (secondary && 'secondary') ||
        (tertiary && 'tertiary') ||
        'default'
    return (<ButtonComponent 
                disabled={disabled} 
                kind={kind} 
                fullWidth={fullWidth} 
                {...otherProps}>
                    {children}
            </ButtonComponent>);
};
Button.defaultProps = {
    disabled: false,
    primary: false,
    secondary: false,
    tiertiary: false,
    fullWidth: false,
};
Button.propTypes = {
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    tiertiary: PropTypes.bool,
    fullWidth: PropTypes.bool
};

export default Button;
