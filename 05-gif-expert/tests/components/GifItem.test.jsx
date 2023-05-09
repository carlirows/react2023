import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem.jsx';

describe('GifItem component tests', () => {

    const title = 'A title';
    const url = 'https://localhost/algo.jpg';

    test('should match against snapshot', () => {
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();        
    });

    test('sould display image with given "alt" and "url"', () => {

        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        const { src, alt } = screen.getByRole('img');
        console.log(screen.getByRole('img'));
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('should display title', () => {
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText(title) ).toBeTruthy();
    });
});
