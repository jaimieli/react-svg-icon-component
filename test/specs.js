"use strict";

const React = require('react');
const assert = require('assert');
const shallow = require('enzyme').shallow;
const SvgIconComponent = require('../src/index');

describe('SvgComponent component', () => {
    let mockProps;
    beforeEach(() => {
        mockProps = {
            className: 'test-class',
            title: 'test-title'
        };
    });

    it('should render correctly when required props are passed in', () => {
        let shallowComponent = shallow(<SvgIconComponent {...mockProps}/>);
        // extRef and icon are both required for svg to render
        assert.equal(shallowComponent.find('svg').length, 0);
        mockProps.extRef = '/some/path';
        shallowComponent = shallow(<SvgIconComponent {...mockProps}/>);
        assert.equal(shallowComponent.find('svg').length, 0);
        mockProps.icon = 'someIcon';
        shallowComponent = shallow(<SvgIconComponent {...mockProps}/>);
        assert.equal(shallowComponent.find('svg').length, 1);

        assert.equal(shallowComponent.find('svg').prop('title'), mockProps.title);
        assert.equal(shallowComponent.find('svg').hasClass(mockProps.className), true);
        assert.equal(shallowComponent.find('use').prop('xlinkHref'), mockProps.extRef + '#' + mockProps.icon);
    });
});
