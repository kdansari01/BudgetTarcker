const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ddd162f05a633d0c2d8773027d1ace79',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;