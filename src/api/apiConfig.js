const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "0c78268d657537542b0fe09dfad34bc1",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
