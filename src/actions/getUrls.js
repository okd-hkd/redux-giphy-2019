import giphyAPI from "../APIs/giphyAPI";

const startRequest = data => {
  return {
    type: "START_REQUEST",
    payload: data
  };
};

const receiveData = data => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

const getUrls = word => {
  return dispatch => {
    dispatch(startRequest());
    giphyAPI(word).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);
      dispatch(receiveData(imageUrlList));
    });
  };
};

export default getUrls;
