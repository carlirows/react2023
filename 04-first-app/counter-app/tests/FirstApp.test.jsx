import {render, screen} from '@testing-library/react';
import { FirstApp } from '../src/FirstApp.jsx';
describe('firstApp tests', () => {
    const title = "Whatever World"
    const subtitle = 'you got me cornered again'
    // test('should match with snapshot', () => {
    //     const {container} = render(<FirstApp title={title}/>);
    //     expect(container).toMatchSnapshot();
    // });
    test('should display message Whatever World', () => {
        render(<FirstApp title={title}/>); // renderiza el componente
        expect(screen.getByText(title)).toBeTruthy(); // busca el texto en el componente
        // screen.debug(); // muestra el componente en consola
    });
    test('should display title in an h1 tag', () => {
        render(<FirstApp title={title}/>); // renderiza el componente
        expect(screen.getByRole('heading', { level : 1 }).innerHTML).toContain(title); // busca el texto en el componente

    })
    test('should display subtitle sent by props', () => {
        render(<FirstApp title={title} subtitle={subtitle}/>); // renderiza el componente
        expect(screen.getAllByText(subtitle).length).toBe(2); // busca el texto en el componente
    });

});
