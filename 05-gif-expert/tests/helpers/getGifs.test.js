import { getGifs } from "../../src/helpers/getGifs";

describe('test on getGifs helper', () => {
    test('should return array', async() => {
        const gifs = await getGifs('One Punch');        
        expect(typeof gifs).toBe('object');
        expect(gifs.length).not.toBe(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    });
    
});