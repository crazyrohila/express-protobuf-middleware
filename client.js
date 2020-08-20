const protobuf = require('protobufjs');
const http = require('http');
const axios = require('axios');

const URL = 'http://localhost:3000/protoApi';
// const URL = 'http://localhost:3000/jsonapi/node/article';

var jsonDescriptor = require("./proto/awesome.json");

axios.get(URL)
.then(async (response) => {
  var root = protobuf.Root.fromJSON(jsonDescriptor);
  const ApiResponse = root.lookupType("ApiResponse");
  console.log('resssss', Buffer.from(response.data));
  let decoded = ApiResponse.decode(Buffer.from(response.data));
  console.log(`decoded = ${JSON.stringify(decoded)}`);
})
.catch(error => {
  console.log(error);
});
