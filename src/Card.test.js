import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import TEST_IMAGES from "./_testCommon.js";

//caption, src, currNum, totalNum

const idx = 1
const testImage = TEST_IMAGES[idx]


it('should render', () => {
    render(<Card caption={testImage.caption} src={testImage.src} currNum={idx} totalNum={TEST_IMAGES.length} />)
})

it('should match snapshot', () => {
    const {asFragment} = render(<Card caption={testImage.caption} src={testImage.src} currNum={1} totalNum={TEST_IMAGES.length} />)
    expect(asFragment()).toMatchSnapshot();
})