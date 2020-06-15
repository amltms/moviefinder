import axios from 'axios';
const apikey = "5042d9bd250e2fbd1f65fceff13e225d";

export function fetchData(id) {
  let itemPromise = fetchItem(id);
  let popularItemsPromise = fetchPopularItems();
  let searchPromise = fetchSearch();
  return {
    popularItems: wrapPromise(popularItemsPromise),
    item: wrapPromise(itemPromise),
    search: wrapPromise(searchPromise)
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

export function fetchPopularItems() {
  console.log('Fetching popular items');
  return axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+apikey+'&language=en-UK&page=1')
  .then(res => res.data)
  .catch(err => console.log(err))
  
}

export function fetchItem(id) {
  console.log('Fetching item');
    return axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+apikey)
    .then(res => res.data)
    .catch(err => console.log(err))
}

const fetchSearch = (id) => {
  console.log('Fetching searched item');
  return axios.get('https://api.themoviedb.org/3/search/multi?api_key='+apikey+'&language=en-UK&query='+id+'&page=1&include_adult=false')
  .then(res => res.data)
  .catch(err => console.log(err))
  
}
