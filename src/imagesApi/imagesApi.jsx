import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api'
const API_KEY = '20766432-b82ef19051876e0d497c4164f'


const fetchHits = ({ searchQuery= '', currentPage = 1, perPage = 12 }) => {
    return  axios.get(
    `${BASE_URL}/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    ).then(response => response.data.hits)
};

export default { fetchHits };