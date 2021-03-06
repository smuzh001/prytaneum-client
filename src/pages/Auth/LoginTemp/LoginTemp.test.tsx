import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { MemoryRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';

import LoginTemp from './LoginTemp';

jest.mock('hooks/useSnack');
jest.mock('utils/axios');

describe('Register', () => {
    let container: HTMLDivElement | null = null;

    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        if (container) {
            unmountComponentAtNode(container);
            container.remove();
        }
        container = null;
        jest.restoreAllMocks();
    });

    // eslint-disable-next-line jest/expect-expect
    it('should render', () => {
        ReactTestUtils.act(() => {
            render(
                <ThemeProvider theme={theme}>
                    <MemoryRouter initialEntries={['/']}>
                        <Route path='/'>
                            <LoginTemp />
                        </Route>
                    </MemoryRouter>
                </ThemeProvider>,
                container
            );
        });
    });
});
