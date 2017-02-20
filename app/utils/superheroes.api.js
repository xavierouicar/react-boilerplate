import request from 'superagent';
import crypto from 'crypto-js';

const API_URL = 'http://gateway.marvel.com/v1/public';
const API_PUBLIC = '298bab46381a6daaaee19aa5c8cafea5';
const API_PRIVATE = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';

function getCurrentTimestamp() {
  return Math.floor(Date.now() / 1000);
}

function getHashfromTs(ts) {
  return crypto.MD5(ts.toString() + API_PRIVATE + API_PUBLIC).toString();
}

export function getSuperheroesList() {
  const ts = getCurrentTimestamp();
  const hash = getHashfromTs(ts);
  return new Promise((resolve, reject) => {
    request.get(API_URL + '/characters').query({
      ts,
      apikey: API_PUBLIC,
      hash
    }).end(function(err, res) {
      if (!err) {
        const superheroes = res.body.data.results;
        resolve(superheroes);
      }
    });
  });
}


export function getSuperhero(id) {
  const ts = getCurrentTimestamp();
  const hash = getHashfromTs(ts);
  return new Promise((resolve, reject) => {
    request.get(API_URL + '/characters/' + id.toString()).query({
      ts,
      apikey: API_PUBLIC,
      hash
    }).end(function(err, res) {
      if (!err) {
        const superheroes = res.body.data.results[0];
        resolve(superheroes);
      }
    });
  });
}
