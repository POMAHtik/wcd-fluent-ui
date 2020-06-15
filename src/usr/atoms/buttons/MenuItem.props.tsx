import React from 'react';
import PropTypes from 'prop-types';

export interface MenuItemProps {
    id?: string,
    key?: string,
    text?: string,
    //iconProps: { iconName: 'Mail' },
};

export const MenuItem: PropTypes.InferProps<MenuItemProps> = {

    /**
     * ID
     */
    id: PropTypes.string,
    /**
    * Label text
    */
    key: PropTypes.string,
    /**
    * Label text
    */
    text: PropTypes.string,

};