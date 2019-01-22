const hello = require("../lib")

export const handler = async (): Promise<any> => {
  const r = hello()
  console.log('Hello World!', r);
  return { r };
}

