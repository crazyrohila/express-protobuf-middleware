const PROTO_PATH = __dirname + '/proto/awesome.proto';
const protobuf = require('protobufjs');
const http = require('http');
const axios = require('axios');

const URL = 'http://localhost:3000/protoApi';
// const URL = 'http://localhost:3000/jsonapi/node/article';

axios.get(URL)
.then(async (response) => {
  const {err, root} = await protobuf.load(PROTO_PATH);
  if (err) {throw err;}
  const ApiResponse = root.lookupType("drupalApi.ApiResponse");
  console.log('resssss', Buffer.from(response.data));
  let decoded = ApiResponse.decode(Buffer.from(response.data));
  console.log(`decoded = ${JSON.stringify(decoded)}`);
})
.catch(error => {
  console.log(error);
});
