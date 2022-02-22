const { readFileSync } = require('fs');
var load2 = () => JSON.parse(readFileSync('users.json')) //stringfy //parse
module.exports = { load2 };