import { fireEvent, render, screen } from "@testing-library/react";
import {CounterApp} from '../src/CounterApp.jsx';

describe('CounterApp tests', () => {

    test('should match with snapshot', () => {
        const {container} = render(<CounterApp value={0}/>);
        expect(container).toMatchSnapshot();
    });

    test('should display value sent by props', () => {
        const value = 100;
        render(<CounterApp value={value}/>);
        expect(screen.getByRole('heading', { level : 2 }).innerHTML).toBe(value.toString());
    });

    test('should increment with +1 button', () => {
        render(<CounterApp />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByRole('heading', { level : 2 }).innerHTML).toBe('1');
    });

    test('should decrement with -1 button', () => {
        render(<CounterApp />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByRole('heading', { level : 2 }).innerHTML).toBe('-1');
    });

    test('should reset with reset button', () => {
        render(<CounterApp />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click(screen.getByText('reset'));
        fireEvent.click(screen.getByRole('button', { name : 'reset' }));
        expect(screen.getByText(0)).toBeTruthy();
    });
});