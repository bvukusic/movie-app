import movieData from '../assets/movieAppData.json';

const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchMovies = async () => {
    try {
        await delay(2000);
        return movieData.carousels;
    } catch (err) {
        throw new Error("unspecified error");
    }
}