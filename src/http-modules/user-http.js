import http from './http';

export async function getUser() {
    const { data } = await http.get('https://jsonplaceholder.typicode.com/posts');
    return data;
}