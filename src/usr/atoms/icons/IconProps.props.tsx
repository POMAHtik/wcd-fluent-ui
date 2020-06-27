import React from 'react';
import PropTypes from 'prop-types';

import { IIconProps } from '@fluentui/react';

export const IconProps: PropTypes.InferProps<IIconProps> = {
    /**
     * The name of the icon to use from the icon font.
     * If string is empty, a placeholder icon will be rendered the same width as an icon.
     */
    iconName: PropTypes.string,

    /**
     * The aria label of the icon for the benefit of screen readers.
     * @deprecated Use the native prop `aria-label`
     */
    ariaLabel: PropTypes.string,

    /**
     * The type of icon to render (image or icon font).
     * @deprecated Inferred based on the presence of `imageProps`
     */
    iconType: PropTypes.oneOf(['default', 'image']),


};