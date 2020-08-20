Usage:
1. Clone the repo
2. Run `npm install`
3. Start the server `npm start`
4. The above step will expose `http://localhost:3000/protoApi` which will sends data as protobuf buffer
5. Run `node client.js` to decode the data in frontend

### Things to note:

Any changes done in `data.js` (or if data.js is getting json from some API) we have to update the proto/awesome.proto schema as well.

