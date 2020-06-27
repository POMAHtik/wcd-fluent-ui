import React from 'react';
import PropTypes from 'prop-types';

import { IContextualMenuItem } from '@fluentui/react';
import { IconProps } from '../icons/IconProps.props';

export const MenuItem: PropTypes.InferProps<IContextualMenuItem> = {

    /**
     * Unique id to identify the item
     */
    key: PropTypes.string,
    /**
    * Label text
    */
    text: PropTypes.string,

    /**
     * The props for the icon shown in the button.
     */
    iconProps: PropTypes.shape(IconProps),
};