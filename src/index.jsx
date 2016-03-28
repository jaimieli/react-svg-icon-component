'use strict';

const React = require('react');
const classNames = require('classnames');
const { PropTypes } = React;

const SvgIconComponent = props => {
    if (!props.extRef || !props.icon) {
        return <div></div>;
    }
    const path = props.extRef + '#' + props.icon;
    const className = classNames({
        'svg-icon': true,
        [props.className]: props.className
    });
    return (
        <svg className={ className } title={ props.title } role='img'>
            <use xlinkHref={ path } />
        </svg>
    );
};

SvgIconComponent.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string.isRequired,
    extRef: PropTypes.string.isRequired
};

module.exports = SvgIconComponent;
