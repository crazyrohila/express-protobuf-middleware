const express = require('express');
const PROTO_PATH = __dirname + '/proto/awesome.proto';
var protobuf = require("protobufjs");
let {dummy_data} = require('./data.js');

const app = express();

app.get('/protoApi', async function (req, res) {
  var buffer = await buildProto();
  console.log('brr', buffer);
  res.send(Buffer.from(buffer, 'binary'));
});

async function buildProto() {
  const {err, root} = await protobuf.load(PROTO_PATH);
  if (err) {throw err;}

  const ApiResponse = root.lookupType("drupalApi.ApiResponse");

  let ApiResponseMessage = ApiResponse.create(dummy_data);
  console.log(`message = ${JSON.stringify(ApiResponseMessage)}`);

  let buffer = ApiResponse.encode(ApiResponseMessage).finish();
  return buffer;
}

app.listen(3000);
