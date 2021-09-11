import axios from 'axios';

export const getPostsService = async () => {
    return (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
};
export const getCommentsService = async ()=> {
    const res = (await (axios.get(`https://jsonplaceholder.typicode.com/comments`))).data;
    return res;
}
