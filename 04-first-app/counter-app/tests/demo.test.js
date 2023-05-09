describe('puebas en wtv', () => {
    test('test must not fail', () => {
        // 1     init test
        const message = 'Hello World';
        // 2     estimulo
        const message2 = message.trim();
        // 3     watch behavior
        expect(message2).toBe(message);
    });
    
});