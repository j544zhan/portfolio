const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BASE_URL': prod ? 'https://allisonzhang.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://allisonzhang.herokuapp.com',
    'process.env.CLIENT_ID': 'YiYxLXuSz5PkjVykSwIrkHLSs7Rv6I3Z'
}