console.log('Hello');

const config = {
  url: 'localhost:3000',
  method: 'GET'
}

console.log(config);
Object.freeze(config);

config.method = 'POST'

console.log(config);

