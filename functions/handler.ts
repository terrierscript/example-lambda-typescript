const hello = require("../lib")

export const handler = async (): Promise<any> => {
  const r = hello()
  console.log('Hello World!', r);
  return {
    statusCode: 200,
    body: "Hello, World" + r
  }
}

