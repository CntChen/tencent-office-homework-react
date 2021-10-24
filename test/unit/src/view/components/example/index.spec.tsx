import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import Example from 'src/view/components/example';

/**
 * @author cntchen
 * @priority P0
 * @casetype unit
 */
describe('Example Component Test', () => {
    afterEach(cleanup);

    it('传递属性渲染', () => {
        const tilteProp = 'Hello Test Title';

        render(
            <Example
                {...{
                    title: tilteProp,
                }}
            />,
        );

        const titleWrap = screen.getAllByText(new RegExp(tilteProp, 'i'));
        // 可以通过 screen.debug 获得 DOM 格式化输出
        // screen.debug(titleWrap);
        expect(titleWrap).not.toBeUndefined();
    });

    it('点击按钮逻辑', () => {
        render(
            <Example
                {...{
                    title: 'test',
                }}
            />,
        );

        const countSpan = screen.getByText('0', {
            selector: 'span',
        });
        const clickButton = screen.getByText(/click me/i, {
            selector: 'button',
        });

        expect(countSpan.innerHTML).toEqual('0');
        expect(clickButton).toBeEnabled();
        fireEvent.click(clickButton);
        expect(countSpan.innerHTML).toEqual('1');
    });

    it('Snapshot', () => {
        const { container } = render(
            <Example
                {...{
                    title: 'test',
                }}
            />,
        );

        expect(container.innerHTML).toMatchSnapshot();
    });
});
