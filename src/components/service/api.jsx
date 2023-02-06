import axios from 'axios';

axios.default.baseURL = 'https://pixabay.com/api/';
axios.default.params = {
    key: '32810341-69b544567d84cbcabae0736a6',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
};

export const fetchImages = async (query, page) => {
    const { data } = await axios.get(`?q=${query}&page=${page}`);
    return data;
};