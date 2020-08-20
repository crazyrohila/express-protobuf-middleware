const express = require('express');
var protobuf = require("protobufjs");
let {dummy_data} = require('./data.js');

var jsonDescriptor = require("./proto/awesome.json");

const app = express();

app.get('/protoApi', async function (req, res) {
  var buffer = await buildProto();
  console.log('brr', buffer);
  res.send(Buffer.from(buffer, 'binary'));
});

async function buildProto() {
  var root = protobuf.Root.fromJSON(jsonDescriptor);

  const ApiResponse = root.lookupType("ApiResponse");

  let ApiResponseMessage = ApiResponse.create(dummy_data);
  console.log(`message = ${JSON.stringify(ApiResponseMessage)}`);

  let buffer = ApiResponse.encode(ApiResponseMessage).finish();
  return buffer;
}

app.listen(3000);
