import axios from 'axios';
const apikey = "5042d9bd250e2fbd1f65fceff13e225d";

export function fetchData(id) {
    let moviePromise = fetchMovie();
    let popularItemsPromise = fetchPopularItems();
    let itemsPromise = fetchItems(id);

    return {
      movie: wrapPromise(moviePromise),
      popularItems: wrapPromise(popularItemsPromise),
      items: wrapPromise(itemsPromise)
    };
}

function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
      r => {
        status = "success";
        result = r;
      },
      e => {
        status = "error";
        result = e;
      }
    );
    return {
      read() {
        if (status === "pending") {
          throw suspender;
        } else if (status === "error") {
          throw result;
        } else if (status === "success") {
          return result;
        }
      }
    };
}

const fetchMovie = () => {
    console.log('Fetching movie');
    return axios.get('https://api.themoviedb.org/3/movie/550?api_key='+apikey)
    .then(res => res.data)
    .catch(err => console.log(err))
    
}


const fetchPopularItems = () => {
    console.log('Fetching popular items');
    return axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+apikey+'&language=en-UK&page=1')
    .then(res => res.data)
    .catch(err => console.log(err))
    
}

const fetchItems = (id) => {
  console.log('Fetching items');
  return axios.get('https://api.themoviedb.org/3/search/multi?api_key='+apikey+'&language=en-UK&query='+id+'&page=1&include_adult=false')
  .then(res => res.data)
  .catch(err => console.log(err))
  
}