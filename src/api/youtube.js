import axios from "axios"

export default axios.create({
    baseURL : 'https://www.googlepapis.com/youtube/v3',
    params :{
        part: 'snippet',
        maxResults : 5,
        key: 'AIzaSyAWOxgF6Y-z2jJibAE4KItBYO6NOJLTN6g'
    }
})

{/*AIzaSyAWOxgF6Y-z2jJibAE4KItBYO6NOJLTN6g*/}