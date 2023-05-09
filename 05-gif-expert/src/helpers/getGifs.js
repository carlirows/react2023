export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=oMUNR70T8ojiUlUL1qhTyzpbxu0ElC7i`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {// map() returns a new array with the results of calling a function for every array element. 
        return {// return an object with the properties id, title and url
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}