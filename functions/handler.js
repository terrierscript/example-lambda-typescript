const hello = require("../lib")

exports.handler = function(event, context, callback) {
  const r = hello()
  callback(null, { r })
}