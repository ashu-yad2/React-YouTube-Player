import axios from "axios";
const KEY = 'AIzaSyB7GQGdu5Y3XCRubu_ozJ2RkGNXLFCvT6c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});

